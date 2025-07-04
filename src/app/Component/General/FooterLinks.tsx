"use client";

import React, { useState } from "react";
import Link from "next/link";

const FooterLink = ({
  href,
  children,
  isReady
}: {
  href: string;
  children: React.ReactNode;
  isReady?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href }
      className={`text-white border-b transition-all duration-200 ${
        hovered ? "border-white" : "border-transparent"
      }`}
      
      onClick={e => {
        if (!isReady) {
          e.preventDefault();
          alert("Coming soon!");
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

export default FooterLink