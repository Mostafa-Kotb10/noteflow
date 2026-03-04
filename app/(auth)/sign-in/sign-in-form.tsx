"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldGroup, FieldSet, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SignInInput, signInSchema } from "../validation-schema";
import { signIn } from "@/lib/auth";
import { LoadingButton } from "@/components/loading-button";

// -----------------------------
// Zod Schema


// -----------------------------
// Component
// -----------------------------

export const SignInForm: React.FC = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: SignInInput) => {
    try {
      const res = await signIn(data);

      if (!res.ok) {
        toast.error(res.error || "Invalid credentials");
        setError("email", { message: res.error });
        setError("password", { message: res.error });
        return;
      }

      toast.success("Signed in successfully!");
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>Welcome back! Please sign in to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded w-96 flex flex-col gap-4">
          <FieldGroup>
            <FieldSet>
              {/* Email */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" {...field} placeholder="you@example.com" />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </Field>
                )}
              />

              {/* Password */}
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" {...field} placeholder="Enter password" />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </Field>
                )}
              />
            </FieldSet>

            <FieldSeparator />

            {/* Submit Button */}
            <Field orientation="horizontal">
              <LoadingButton className="w-full" loading={isSubmitting}>
                Sign In
              </LoadingButton>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;