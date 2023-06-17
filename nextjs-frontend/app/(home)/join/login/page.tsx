"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const loginFormSchema = z.object({
  email: z.string().email({
    message: "email must be valid",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const onFormSubmit = (values: LoginForm) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="text-start font-bold">Log in to your Udemy account</h1>

      <div className="mt-1 flex cursor-pointer items-center gap-2 border border-zinc-900 px-3 py-2 font-bold hover:bg-gray-100">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
          alt="Google"
          width="30"
          height="100"
        />

        <span>Continue with Google</span>
      </div>

      <div className="flex cursor-pointer items-center gap-2 border border-zinc-900 px-3 py-2 font-bold hover:bg-gray-100">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Facebook_Home_logo_old.svg"
          alt="Google"
          width="30"
          height="100"
        />

        <span>Continue with Facebook</span>
      </div>

      <div className="flex cursor-pointer items-center gap-2 border border-zinc-900 px-3 py-2 font-bold hover:bg-gray-100">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Google"
          width="30"
          height="100"
        />

        <span>Continue with Apple</span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="flex w-full flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-2 bg-fuchsia-600" type="submit">
            Log in
          </Button>
        </form>

        <div className="mt-3">
          or{" "}
          <Link href="#" className="font-bold text-purple-600 underline">
            Forgot Password
          </Link>
        </div>

        <hr className="my-2 border-zinc-300" />

        <div className="text-sm flex flex-col gap-1">
          <div>
            {"Don't have an account? "}
            <Link
              href="/join/register"
              className="font-bold text-purple-600 underline"
            >
              Sign up
            </Link>
          </div>

          <Link
            href="/join/register"
            className="font-bold text-purple-600 underline"
          >
            Log in with your organization
          </Link>
        </div>
      </Form>
    </>
  );
}
