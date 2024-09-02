"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirect: false,
        // callbackUrl: "/admin/dashboard",
      });

      if (response?.error) {
        toast.error("Credential Error");
        return;
      }
      toast.success("Login Successful");
      router.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="border-b p-5">
        <h2 className="text-2xl md:hidden">M</h2>
        <h2 className="text-2xl hidden md:block">
          Marketplace<sup>NG</sup>
        </h2>
      </nav>

      <form onSubmit={onSubmit} className="max-w-lg mx-auto mt-20">
        <Card className="space-y-5 p-5">
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input name="username" type="text" placeholder="Username" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" placeholder="Password" />
            </div>

            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
