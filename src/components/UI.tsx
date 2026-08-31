import Link from "next/link";
import type { ReactNode } from "react";

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="15"
    height="9"
    viewBox="0 0 15 9"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <path d="M0 4.5h13.5M10 1l3.5 3.5L10 8" />
  </svg>
);

type Variant = "solid" | "gold" | "light" | "outline";

const variantClass: Record<Variant, string> = {
  solid: "pill pill-solid",
  gold: "pill pill-gold",
  light: "pill pill-light",
  outline: "pill",
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Cta({
  href,
  children,
  variant = "outline",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const cls = `${variantClass[variant]} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="pill-arrow" />}
    </>
  );

  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="link-arrow" />
    </>
  );
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-underline ${className}`.trim()}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`link-underline ${className}`.trim()}>
      {inner}
    </Link>
  );
}

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`eyebrow ${light ? "eyebrow-light" : ""} ${className}`.trim()}>
      {children}
    </span>
  );
}

export { ArrowRight };
