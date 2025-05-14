"use client";

import { FormEvent, Fragment, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LoginBtn = () => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000)

    router.push('/feed');
  };

  return (
    <Fragment>
      {loading ? (
        <Button className="w-full">Loading...</Button>
      ) : (
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      )}
    </Fragment>
  );
};

export default LoginBtn;
