const COOKIE_NAME = "df_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function bytesToHex(bytes: ArrayBuffer | Uint8Array): string {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  return [...view].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

async function hmacHex(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );
  return bytesToHex(signature);
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return bytesToHex(digest);
}

export function getSitePassword(): string | undefined {
  const password = process.env.SITE_PASSWORD;
  return password && password.length > 0 ? password : undefined;
}

function getSigningSecret(): string | undefined {
  return process.env.SESSION_SECRET || getSitePassword();
}

export async function passwordsMatch(input: string, expected: string): Promise<boolean> {
  const [left, right] = await Promise.all([sha256Hex(input), sha256Hex(expected)]);
  return timingSafeEqual(left, right);
}

export async function createSessionToken(): Promise<string | null> {
  const secret = getSigningSecret();
  if (!secret) return null;
  const expiresAt = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `v1.${expiresAt}`;
  const signature = await hmacHex(secret, payload);
  return `${payload}.${signature}`;
}

export async function isValidSessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const secret = getSigningSecret();
  if (!secret) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [version, expiry, signature] = parts;
  if (version !== "v1" || !expiry || !signature) return false;
  const expiresAt = Number(expiry);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;
  const expected = await hmacHex(secret, `${version}.${expiry}`);
  return timingSafeEqual(signature, expected);
}

export const sessionCookie = {
  name: COOKIE_NAME,
  maxAge: MAX_AGE_SECONDS,
  options: {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  },
};
