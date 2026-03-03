"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldSet,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignUpInput, signUpSchema } from "../validation-schema";
import { signUp } from "@/lib/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const router = useRouter()
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting, },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", agree: false, username: "", email: "", password: "" },
  });

  const onSubmit = async (data: SignUpInput) => {
    try {
      const res = await signUp(data)
      if (!res.ok) {
        toast.error(res.error || "An error occured")
        setError("username", { message: res.error })
        setError("email", { message: res.error })
        return;
      }
    } catch (err) {
      console.log(err)
      toast.error(`An error occured`)
      throw new Error("An error occured")
    }
    toast.success("Account created Successfully!")
    router.push("/sign-in")
    return;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>Signup now and join noteflows family </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded w-96 flex flex-col gap-4"
        >
          <FieldGroup>
            <FieldSet>
              {/* Username */}
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input id="username" {...field} placeholder="Your username" />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.username.message}
                      </p>
                    )}
                  </Field>
                )}
              />

              {/* Full Name */}
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                    <Input id="fullName" {...field} placeholder="John Doe" />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                    )}
                  </Field>
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      {...field}
                      placeholder="you@example.com"
                    />
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
                    <Input
                      id="password"
                      type="password"
                      {...field}
                      placeholder="Enter password"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </Field>
                )}
              />

              {/* Terms Checkbox */}
              <Controller
                name="agree"
                control={control}
                render={({ field }) => (
                  <Field orientation="vertical">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="agree"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldLabel htmlFor="agree" className="font-normal">
                        I agree to the terms and conditions
                      </FieldLabel>
                    </div>
                    {errors.agree && (
                      <p className="text-red-500 text-sm">{errors.agree.message}</p>
                    )}
                  </Field>
                )}
              />
            </FieldSet>

            <FieldSeparator />

            {/* Submit Button */}
            <Field orientation="horizontal">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
