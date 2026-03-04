"use client"

import Section from "@/components/section"
import Marquee from "react-fast-marquee"

export default function TextMarquee() {
  const items = [
    "Trusted by 40k+",
    "AI Powered",
    "Built for Teams",
    "Secure & Scalable",
  ]

  return (
    <Section className="overflow-hidden py-0">
      <Marquee className="bg-black" speed={50} gradient={false} pauseOnHover={true}>
        {items.map((text, i) => (
          <div key={i} className="flex  items-center gap-6 mr-12 py-8">
            <span className="text-white text-4xl font-semibold uppercase tracking-wide">
              {text}
            </span>
            <Separator />
          </div>
        ))}
        {items.map((text, i) => (
          <div key={i} className="flex  items-center gap-6 mr-12 py-8">
            <span className="text-white text-4xl font-semibold uppercase tracking-wide">
              {text}
            </span>
            <Separator />
          </div>
        ))}
      </Marquee>
    </Section>
  )
}

function Separator() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <circle cx="12" cy="12" r="6" />
    </svg>
  )
}