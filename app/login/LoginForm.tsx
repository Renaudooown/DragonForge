"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/login/actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="mx-auto mt-10 w-full max-w-xs">
      <label className="sr-only" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        autoFocus
        placeholder="Password"
        className="w-full border-0 border-b border-ivory/30 bg-transparent py-3 text-center text-lg text-ivory outline-none placeholder:text-ivory/35 focus:border-forge focus-visible:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full text-center text-sm uppercase tracking-[0.32em] text-ivory transition-colors hover:text-forge disabled:opacity-60"
      >
        {pending ? "Entering" : "Enter"}
      </button>
      {state.error ? (
        <p className="mt-6 text-center text-sm text-ivory/70" role="alert">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
