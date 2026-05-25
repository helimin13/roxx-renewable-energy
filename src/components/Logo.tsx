"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({
  href = "/",
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 60 },
    md: { width: 180, height: 90 },
    lg: { width: 240, height: 120 },
  };

  const currentSize = sizes[size];

  return (
    <Link href={href} className={`inline-block group ${className}`}>
      <div className="transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="ROXX Renewable Energy"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
}
