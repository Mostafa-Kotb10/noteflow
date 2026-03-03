"use server";
import bcrypt from "bcrypt";

import prisma from "./prisma";

import { SignInInput, SignUpInput } from "@/app/(auth)/validation-schema";
import { Provider } from "@/app/generated/prisma/enums";
import { Prisma } from "@/app/generated/prisma/client";
import { randomBytes } from "crypto";
import { cookies } from "next/headers";

interface SignUpInputData extends SignUpInput {
    provider_id?: Provider
}

interface SignInInputData extends SignInInput {
  provider_id?: Provider
}

export const getSession = async () => {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token")?.value;

  if (!sessionToken) return null;

  try {
    const session = await prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true },
    });
    if (!session) return null;
    if (session.expiresAt < new Date()) return null;
    return session.user;
  } catch (err) {
    console.error("getCurrentUser error:", err);
    return null;
  }
};

export const signUp = async (input: SignUpInputData) => {
    try {
      const email = input.email.toLowerCase().trim();
      const passwordHash = await bcrypt.hash(input.password, 12);
  
      const res = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: { username: input.username, email, fullName: input.fullName, emailVerified: false },
        });
        await tx.account.create({
          data: { providerId: Provider.credentials, accountId: email, passwordHash, userId: user.id },
        });    
      });

      return { ok: true };

    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        return { ok: false, error: "Email or username already taken" };
      }
      console.error("Sign-up error:", err);
      return { ok: false, error: "An unexpected error occurred" };
    }
  };

export const signIn = async (input: SignInInputData) => {
  const provider = input.provider_id || Provider.credentials
  const email = input.email.toLocaleLowerCase()
  try {
    const account = await prisma.account.findUnique({
      where: {
        providerId_accountId: {
          accountId: email,
          providerId: provider
        }
      },
      include: {user: true}
    })

    if (!account) return {
      ok: false,
      error: "Invalid email or password"
    }

    const validPasswrd = await bcrypt.compare(input.password, account.passwordHash)

    if (!validPasswrd) return {
      ok: false,
      error: "Invalid email or password"
    }

    const token = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await prisma.session.create({
      data: {
        token,
        userId: account.userId,
        expiresAt,
      },
    });

    (await cookies()).set({
      name: "session_token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

  } catch (err) {
    if (err) {
      return { ok: false, error: "An unexpected error occurred!" };
    }
  }

  return {
    ok: true
  }
}
