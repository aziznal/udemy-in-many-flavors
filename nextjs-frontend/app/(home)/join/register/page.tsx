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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import PasswordStrengthMeter from "@/components/PasswordStrengthMeter";
import { useAuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

const registerFormSchema = z.object({
  fullname: z.string().min(2, {
    message: "fullname must be valid",
  }),
  email: z.string().email({
    message: "email must be valid",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

type RegisterForm = z.infer<typeof registerFormSchema>;

export default function Register() {
  const { register } = useAuthContext();
  const router = useRouter();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const password = form.watch("password");

  const onFormSubmit = async (values: RegisterForm) => {
    await register(values);

    router.push("/");
  };

  return (
    <>
      <h1 className="text-start font-bold">Sign up and start learning</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          className="flex w-full flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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

          <PasswordStrengthMeter password={password} />

          <div className="mt-3 flex gap-2 text-start text-sm">
            <Checkbox id="special-offers" className="mt-1" />

            <label htmlFor="special-offers">
              Send me special offers, personalized recommendations, and learning
              tips
            </label>
          </div>

          <Button className="mt-2 bg-fuchsia-600" type="submit">
            Sign up
          </Button>
        </form>

        <div className="text-[11px]">
          By signing up, you agree to sell me your{" "}
          <span className="underline">kidneys</span> and{" "}
          <span className="underline">left lung</span>
        </div>

        <hr className="my-2 border-zinc-300" />

        <div className="text-sm">
          {"Already have an account? "}
          <Link
            href="/join/login"
            className="font-bold text-purple-600 underline"
          >
            Log in
          </Link>
        </div>
      </Form>
    </>
  );
}
