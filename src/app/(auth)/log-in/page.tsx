"use client";
import React from "react";
import img from "@/assets/images/Side Image.png";
import Image from "next/image";
import FormInput from "@/components/ui/form-input";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { RouteUrl } from "@/constants/route-url";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log(data);
    router.push(RouteUrl.HOME);
    // handle form submission
  };

  return (
    <div className="flex items-center gap-20">
      <Image src={img} alt="" width={750} className="hidden md:block" />
      <div className="p-10 basis-full md:basis-1/2">
        <h2 className="text-xl md:text-4xl">Log in to Marketplace</h2>
        <p className="pb-5">Enter your details below</p>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 max-w-md"
          >
            <FormInput
              name="email"
              label="Email"
              placeholder="john@gmail.com"
              type="email"
              required
              className="w-full"
            />
            <FormInput
              name="password"
              label="Password"
              placeholder="***"
              type="password"
              required
              className="w-full"
            />

            <div className="flex items-center justify-between">
              <Button type="submit">Login</Button>
              <Button size="sm" type="button" variant="link">
                Forget Password?
              </Button>
            </div>
            <Button variant="outline" type="button" className="w-full gap-2">
              <Icon icon="flat-color-icons:google" className="text-lg" />
              Login with Google
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;
