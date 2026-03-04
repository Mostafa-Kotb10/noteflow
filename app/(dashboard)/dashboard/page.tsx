import Navbar from '@/components/navbar';
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Page() {
    const session = await getSession();
    if (!session?.user) redirect("/sign-in");
  return (
    <div>
        Dashboard
    </div>
  )
}
