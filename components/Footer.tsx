import Link from "next/link";
import { content } from "@/content";
import Logo from "@/components/Logo";

export default function Footer() {
  const { company, pages } = content;

  return (
    <footer data-section="footer" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="border border-white/25">
          <div className="grid gap-8 border-b border-white/25 p-5 sm:p-6 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <Logo tone="dark" markClass="h-12 w-12" />
              <p className="mt-4 max-w-sm text-base text-white/80">
                Toeleveringsbedrijf in {company.city}, in de {company.region}, aan de Duitse grens.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white/50">Menu</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 md:grid-cols-1">
                {pages.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-base text-white/90 hover:text-white md:min-h-0"
                      data-cta={item.href === "/offerte" ? "offerte" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white/50">Bereikbaar</p>
              <p className="mt-3 text-base text-white/80">Bel of mail ons.</p>
              <a href={company.phoneTel} className="mt-2 inline-flex min-h-11 items-center text-lg font-semibold text-white">
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex min-h-11 items-center text-base text-white underline">
                {company.email}
              </a>
              <p className="text-base text-white/80">{company.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 font-mono text-xs text-white/55">
            <span>KNICO · CNC Metaalbewerking · sinds 1996</span>
            <span>{company.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
