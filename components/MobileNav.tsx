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
        <span className="flex w-5 flex-col gap-1.5" aria-hidden>
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
        </span>
      </button>
      <nav
        id="mobiel-menu"
        data-section="mobiel-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-steel bg-white shadow-lg"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
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
