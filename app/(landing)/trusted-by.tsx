"use client";

import Marquee from "react-fast-marquee";
import Container from "@/components/container";
import { TRUSTED_BY } from "@/constants/";

const TrustedBySection = () => {
  return (

    <Container>
      <Marquee
        speed={40}
        pauseOnHover
        gradient
        gradientColor="#fff"
        gradientWidth={100}
      >
        <TrustedByList />
        <TrustedByList />
        <TrustedByList />
        <TrustedByList />
      </Marquee>
    </Container>

  );
};

const TrustedByList = () => {
  return (
    <ul className="flex gap-40 ml-40">
      {TRUSTED_BY.map(({ svg: Logo, label, website, ariaLabel }) => (
        <li key={label} className="relative group">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel ?? `Visit ${label}`}
            className="flex items-center justify-center"
          >
            <Logo className="h-10 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" aria-hidden="true" />

            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-10 whitespace-nowrap">
              {label}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default TrustedBySection;