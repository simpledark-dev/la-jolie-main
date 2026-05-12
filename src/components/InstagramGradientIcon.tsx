"use client";

import { useId } from "react";

interface Props {
  size?: number;
  className?: string;
}

export default function InstagramGradientIcon({ size = 24, className }: Props) {
  const gradientId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA77" />
          <stop offset="25%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="75%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      {/* Filled gradient body */}
      <rect x="2" y="2" width="20" height="20" rx="5" fill={`url(#${gradientId})`} />
      {/* Camera lens — white outline */}
      <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.75" />
      {/* Top-right dot — white */}
      <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" />
    </svg>
  );
}
