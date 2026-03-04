import Navbar from "@/components/navbar"
import React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Navbar />
      <main >
        {children}
      </main>
    </div>
  )
}