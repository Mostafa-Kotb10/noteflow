"use client";

import { Building2Icon, LogOutIcon, ShieldIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "@/app/generated/prisma/client";
import { logout } from "@/lib/auth";
import toast from "react-hot-toast";

interface Props {
  user: User;
}

export function UserDropdown({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.username}
              width={16}
              height={16}
              className="rounded-full object-cover"
            />
          ) : (
            <UserIcon />
          )}
          <span className="max-w-48 truncate">{user.username}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <UserIcon className="size-4" /> <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <OrganizationsItem />
        <AdminItem />
        <SignOutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminItem() {
  return (
    <DropdownMenuItem asChild>
      <Link href="/admin">
        <ShieldIcon className="size-4" /> <span>Admin</span>
      </Link>
    </DropdownMenuItem>
  );
}

function OrganizationsItem() {
  return (
    <DropdownMenuItem asChild>
      <Link href="/organizations/pick">
        <Building2Icon className="size-4" /> <span>Organizations</span>
      </Link>
    </DropdownMenuItem>
  );
}

function SignOutItem() {
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await logout()
    if (error) {
        toast.error("Something went wrong")
    }

    toast.success("Signed Out Successfully")
    router.push('/sign-in')
  }

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      <LogOutIcon className="size-4" /> <span>Sign out</span>
    </DropdownMenuItem>
  );
}