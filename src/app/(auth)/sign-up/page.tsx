"use client";
import React from "react";
import img from "@/assets/images/Side Image.png";
import Image from "next/image";
import FormInput from "@/components/ui/form-input";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { RouteUrl } from "@/constants/route-url";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
    },
  });
  const { handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log(data);
    router.push(RouteUrl.LOGIN);
    // handle form submission
  };

  return (
    <div className="flex items-center gap-20">
      <Image src={img} alt="" width={750} className="hidden md:block" />
      <div className="p-10 basis-full md:basis-1/2">
        <h2 className="text-xl md:text-4xl">Create an account</h2>
        <p className="pb-5">Enter your details below</p>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 max-w-md"
          >
            <FormInput
              name="first_name"
              label="First Name"
              placeholder="John"
              required
              className="w-full"
            />
            <FormInput
              name="last_name"
              label="Last Name"
              placeholder="Doe"
              required
              className="w-full"
            />
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
            <Button className="w-full" type="submit">
              Create Account
            </Button>
            <Button variant="outline" type="button" className="w-full gap-2">
              <Icon icon="flat-color-icons:google" className="text-lg" />
              Sign up with Google
            </Button>
            <div className="flex items-center justify-center">
              <p>Already have account?</p>
              <Link href={RouteUrl.LOGIN}>
                <Button size="sm" type="button" variant="link">
                  Login
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
