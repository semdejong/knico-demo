import Link from "next/link";

export default function PageEnd({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <aside data-section="verder" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">Volgende stap</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Stuur uw tekening</h2>
          <p className="mt-3 max-w-xl text-lg text-white/80">
            Enkel stuks tot middelgrote series, in kunststof, aluminium en roestvast staal. De tekening voegt u als
            bijlage toe aan de e-mail.
          </p>
          <Link
            href="/offerte"
            data-cta="offerte"
            className="mt-6 inline-flex h-12 items-center bg-brand px-5 font-semibold text-white"
          >
            Offerte aanvragen
          </Link>
        </div>
        <ul className="border border-white/20">
          {links.map((link) => (
            <li key={link.href} className="border-b border-white/15 last:border-b-0">
              <Link
                href={link.href}
                data-cta={link.href === "/offerte" ? "offerte" : undefined}
                className="flex min-h-12 items-center px-4 text-base text-white/90 hover:bg-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
