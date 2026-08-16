"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, primaryCta } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes. Derived directly
  // during render (rather than in an effect) to avoid an extra render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-navy-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-navy-800 dark:bg-navy-950/90"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm dark:bg-navy-950/70"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-fhb flex h-16 items-center justify-between sm:h-20"
      >
        <Logo />

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-teal-50 font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                        : "text-ink-muted hover:bg-navy-50 hover:text-navy-950 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-white dark:text-navy-950 dark:hover:bg-teal-300"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-950 dark:text-white"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-b border-navy-100 bg-white shadow-lg transition-[grid-template-rows] duration-300 ease-out dark:border-navy-800 dark:bg-navy-950 md:hidden ${
          isMobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="container-fhb flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-teal-50 font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                        : "text-ink-muted hover:bg-navy-50 hover:text-navy-950 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href={primaryCta.href}
                className="flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-4 py-3 text-base font-semibold text-white dark:bg-white dark:text-navy-950"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
