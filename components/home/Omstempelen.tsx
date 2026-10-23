import Link from "next/link";
import { omstempelTekst } from "@/lib/diensten";

export default function Omstempelen() {
  return (
    <section data-section="omstempelen" className="border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="border border-foreground/15 p-6 sm:p-8">
          <p className="font-mono text-sm text-brand">07</p>
          <h2 className="mt-1 text-3xl font-semibold sm:text-4xl">Omstempelen van 3.1 materiaal</h2>
          <p className="mt-4 text-lg text-body">{omstempelTekst}</p>
          <Link href="/omstempelen" className="mt-6 inline-flex h-12 items-center font-semibold text-brand">
            Lees hoe omstempelen werkt
          </Link>
        </div>
      </div>
    </section>
  );
}
