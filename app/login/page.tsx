import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { site } from "@/data/site";
import { LoginForm } from "@/app/login/LoginForm";
import { isValidSessionToken, sessionCookie } from "@/lib/session";

export default async function LoginPage() {
  const jar = await cookies();
  const token = jar.get(sessionCookie.name)?.value;
  if (await isValidSessionToken(token)) {
    redirect("/");
  }

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-navy px-6 py-16 text-ivory">
      <div className="w-full max-w-md text-center">
        {/* Native img so the login screen can load brand assets without a session. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/dragonforge-logo-on-dark.png"
          alt="DragonForge"
          width={834}
          height={322}
          className="mx-auto h-auto w-[min(70vw,16rem)]"
        />
        <h1 className="mt-10 font-sans text-[0.7rem] uppercase tracking-[0.42em] text-ivory/80">
          {site.title}
        </h1>
        <p className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-6xl">
          {site.eventName}
          <span className="text-forge">.</span>
        </p>
        <p className="mt-6 text-sm tracking-wide text-ivory/55">Private attendee site</p>
        <LoginForm />
      </div>
    </main>
  );
}
