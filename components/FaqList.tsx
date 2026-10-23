import { faq } from "@/lib/faq";

export default function FaqList() {
  return (
    <div data-section="faq" className="space-y-3">
      {faq.map((item) => (
        <details key={item.q} className="border border-steel bg-white p-4">
          <summary className="cursor-pointer text-lg font-semibold text-foreground">{item.q}</summary>
          <p className="mt-2 text-base text-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
