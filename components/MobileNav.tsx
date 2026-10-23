"use client";

import Link from "next/link";
import { useState } from "react";
import { content } from "@/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-steel text-foreground"
        aria-expanded={open}
        aria-controls="mobiel-menu"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative h-3.5 w-5" aria-hidden>
          <span className={`absolute left-0 h-0.5 w-full bg-current transition motion-reduce:transition-none ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-current ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 h-0.5 w-full bg-current transition motion-reduce:transition-none ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
      </button>
      <nav
        id="mobiel-menu"
        data-section="mobiel-menu"
        hidden={!open}
        className="absolute left-1/2 top-full z-50 w-screen -translate-x-1/2 border-b border-steel bg-white shadow-lg"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 pb-4">
          {content.pages.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center text-base text-foreground"
                data-cta={item.href === "/offerte" ? "offerte" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
