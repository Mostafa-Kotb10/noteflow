import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getSession } from "@/lib/auth";
import { UserDropdown } from "./user-dropdown";


const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
];

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white border-b backdrop-blur ">
      <nav className="mx-auto flex py-4 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center gap-8">
          <Logo />

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {user ? <UserDropdown user={user} /> : <>
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>

            <Button asChild>
              <Link href="/sign-up">Get started</Link>
            </Button></>}
        </div>
      </nav>
    </header>
  );
}
