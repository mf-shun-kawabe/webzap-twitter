"use client";

import { useSearchParams } from "next/navigation";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const registered = searchParams.get("registered") === "true";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {mode === "login" ? "ログイン" : "新規登録"}
          </h2>
          {registered && (
            <p className="mt-2 text-center text-sm text-green-600">
              登録が完了しました。ログインしてください。
            </p>
          )}
        </div>
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          {mode === "login" ? <LoginForm /> : <RegisterForm />}
          <div className="mt-4 text-center">
            {mode === "login" ? (
              <a
                href="/auth?mode=register"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                アカウントをお持ちでない方はこちら
              </a>
            ) : (
              <a
                href="/auth?mode=login"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                既にアカウントをお持ちの方はこちら
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
