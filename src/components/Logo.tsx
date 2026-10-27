import type { SVGProps } from "react";

/** App-icon style brand symbol (same artwork as app/icon.svg). */
export function BrandSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect width="64" height="64" rx="14" fill="#1E332D" />
      <path d="M5 42l9-11 4 3 6-9 4 4 5-10 6 9 4-3 4 6 4-3 6 9 2 5z" fill="#F3EBDD" />
      <path
        d="M33 19.5l1.5 7-1 5M24.5 25.5l1 5M44.5 25l.6 5M39 29l-.5 5"
        fill="none"
        stroke="#1E332D"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M11 46q21-1.6 42 0-21 1.6-42 0zM18 49.6q14-1.3 28 0-14 1.3-28 0zM26 53q6-1 12 0-6 1-12 0z"
        fill="#F3EBDD"
      />
      <path
        d="M8 34c3-11 12-19 24-20 12 1 21 9 24 20M32 14c-5 1-9 6-11 12M32 14c5 1 9 6 11 12"
        fill="none"
        stroke="#B56843"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="32" cy="14" r="3.6" fill="#B56843" />
      <circle cx="12.5" cy="25.5" r="2.7" fill="#B56843" />
      <circle cx="51.5" cy="25.5" r="2.7" fill="#B56843" />
      <circle cx="21" cy="26" r="1.9" fill="#B56843" />
      <circle cx="43" cy="26" r="1.9" fill="#B56843" />
    </svg>
  );
}

/**
 * Typographic wordmark. The A carries the brand's terracotta node + drop line.
 * Screen readers get plain "Skailand Consulting".
 */
export function Wordmark({ size = "md" }: { size?: "md" | "xl" }) {
  return (
    <span className={`wordmark wordmark-${size}`}>
      <span className="visually-hidden">Skailand Consulting</span>
      <span className="wordmark-name" aria-hidden="true">
        SK<span className="wordmark-a">A</span>ILAND
      </span>
      <span className="wordmark-sub" aria-hidden="true">
        Consulting
      </span>
    </span>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <BrandSymbol className="logo-symbol" width="38" height="38" />
      <Wordmark />
    </span>
  );
}
