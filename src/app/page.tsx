import { ForgotPassword } from "@/components/forgot-password";
import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import { use } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const searchValue = use(searchParams);
  const query = searchValue?.mode || "signIn";

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        {query == "signIn" && <LoginForm />}
        {query == "signUp" && <RegisterForm />}
        {query == "forgotPassword" && <ForgotPassword />}
      </div>
    </div>
  );
}
