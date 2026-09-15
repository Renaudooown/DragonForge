"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSessionToken,
  getSitePassword,
  passwordsMatch,
  sessionCookie,
} from "@/lib/session";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _previous: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = getSitePassword();

  if (!expected) {
    return { error: "The site password isn’t configured yet." };
  }

  if (!(await passwordsMatch(password, expected))) {
    return { error: "That password isn’t right." };
  }

  const token = await createSessionToken();
  if (!token) {
    return { error: "Couldn’t start a session." };
  }

  const jar = await cookies();
  jar.set(sessionCookie.name, token, {
    ...sessionCookie.options,
    maxAge: sessionCookie.maxAge,
  });

  redirect("/");
}

export async function logoutAction() {
  const jar = await cookies();
  jar.set(sessionCookie.name, "", {
    ...sessionCookie.options,
    maxAge: 0,
  });
  redirect("/login");
}
