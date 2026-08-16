"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

const noopSubscribe = () => () => {};

/**
 * True only once the component has mounted on the client. Implemented via
 * `useSyncExternalStore` (server snapshot always `false`) rather than the
 * common `useEffect(() => setMounted(true), [])` idiom, which triggers
 * React's set-state-in-effect lint rule.
 */
function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

/**
 * Light / Dark / System theme selector.
 *
 * `useTheme()` only knows the real theme after mount (it reads
 * localStorage/media-query client-side), so the trigger renders a
 * neutral, non-interactive placeholder until then — rendering the real
 * icon immediately would mismatch the server-rendered markup and trigger
 * a hydration warning.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!mounted) {
    return <div className="h-10 w-10 shrink-0 rounded-lg" aria-hidden="true" />;
  }

  const active = themeOptions.find((option) => option.value === theme) ?? themeOptions[2];
  const ActiveIcon = active.icon;

  return (
    <div className="relative shrink-0" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Theme: ${active.label}`}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-navy-50 hover:text-navy-950 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-white"
      >
        <ActiveIcon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
      </button>

      <div
        role="menu"
        aria-label="Theme"
        className={`absolute right-0 top-full z-50 mt-2 w-40 origin-top-right rounded-xl border border-navy-100 bg-white p-1.5 shadow-[var(--shadow-card-hover)] transition-all duration-150 dark:border-navy-800 dark:bg-navy-900 ${
          isOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        {themeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = option.value === theme;
          return (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={isActive}
              onClick={() => {
                setTheme(option.value);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300"
                  : "text-ink-muted hover:bg-navy-50 hover:text-navy-950 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {option.label}
              {isActive && <Check className="ml-auto h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
