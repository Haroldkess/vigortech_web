"use client";

import React, { useState } from "react";
import Link from "next/link";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`text-white border-b transition-all duration-200 ${
        hovered ? "border-white" : "border-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
};

export default FooterLink