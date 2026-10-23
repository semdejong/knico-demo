import Link from "next/link";
import { content } from "@/content";

export default function StickyBar() {
  return (
    <div
      data-section="sticky-bar"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-steel bg-white md:hidden"
    >
      <a
        href={content.company.phoneTel}
        className="inline-flex h-14 flex-1 items-center justify-center border-r border-steel text-base font-semibold text-brand"
      >
        Bel
      </a>
      <Link
        href="/offerte"
        data-cta="offerte"
        className="inline-flex h-14 flex-1 items-center justify-center bg-brand text-base font-semibold text-white"
      >
        Offerte
      </Link>
    </div>
  );
}
