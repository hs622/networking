import { LoginForm } from "@/components/login-form";
import { RegisterForm } from "@/components/register-form";
import { use } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchValue = use(searchParams);
  const query = searchValue?.mode;

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {query == "signIn" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
