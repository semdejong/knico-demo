import Link from "next/link";
import { content } from "@/content";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const { company, nav } = content;

  return (
    <header data-section="header" className="border-b border-steel bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="shrink-0 rounded-sm" aria-label="KNICO, naar home">
          <Logo compact markClass="h-12 w-12 sm:h-14 sm:w-14" />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.95rem] text-foreground hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={company.phoneTel}
            className="hidden h-11 items-center px-2 text-[0.95rem] font-semibold text-brand md:inline-flex"
          >
            {company.phoneDisplay}
          </a>
          <Link
            href="/offerte"
            data-cta="offerte"
            className="inline-flex h-11 items-center bg-brand px-3 text-sm font-semibold text-white sm:px-4"
          >
            <span className="sm:hidden">Offerte</span>
            <span className="hidden sm:inline">Offerte aanvragen</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
