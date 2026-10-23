"use client";

import { FormEvent, useState } from "react";

const bewerkingen = ["Draaien", "Frezen", "Zagen", "Naald markeren", "Laser graveren", "Omstempelen 3.1"];

export default function OfferteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const gekozen = bewerkingen.filter((item) => data.get(item) === "on");
    const lines = [
      "Offerteaanvraag via de website van KNICO",
      "",
      `Naam: ${value(data, "naam")}`,
      `Bedrijfsnaam: ${value(data, "bedrijfsnaam")}`,
      `E-mailadres: ${value(data, "email")}`,
      `Telefoonnummer: ${value(data, "telefoon")}`,
      `Materiaal: ${value(data, "materiaal")}`,
      `Aantal stuks: ${value(data, "aantal")}`,
      `Bewerkingen: ${gekozen.join(", ") || "—"}`,
      `Gewenste leverdatum: ${value(data, "leverdatum") || "—"}`,
      "",
      "Omschrijving:",
      value(data, "omschrijving"),
      "",
      "Voeg uw tekening als bijlage toe aan de e-mail.",
    ];
    const href = `mailto:info@knico.nl?subject=${encodeURIComponent("Offerteaanvraag KNICO")}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-foreground/20 bg-white p-5 sm:p-6" data-section="offerte-formulier">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Naam" name="naam" required />
        <Field label="Bedrijfsnaam" name="bedrijfsnaam" />
        <Field label="E-mailadres" name="email" type="email" required />
        <Field label="Telefoonnummer" name="telefoon" type="tel" />
        <label className="block text-base">
          <span className="font-semibold text-foreground">Materiaal</span>
          <select name="materiaal" required className="mt-1 h-12 w-full border border-steel bg-white px-3">
            <option value="Kunststof">Kunststof</option>
            <option value="Aluminium">Aluminium</option>
            <option value="Roestvast staal">Roestvast staal</option>
            <option value="Anders">Anders</option>
          </select>
        </label>
        <Field label="Aantal stuks" name="aantal" required />
      </div>
      <fieldset>
        <legend className="font-semibold text-foreground">Bewerkingen</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {bewerkingen.map((item) => (
            <label key={item} className="flex min-h-11 items-center gap-2 text-base">
              <input type="checkbox" name={item} className="h-4 w-4" />
              {item}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-base">
        <span className="font-semibold text-foreground">Omschrijving</span>
        <textarea name="omschrijving" rows={5} required className="mt-1 w-full border border-steel px-3 py-2" />
      </label>
      <Field label="Gewenste leverdatum (optioneel)" name="leverdatum" type="date" />
      <button type="submit" data-cta="offerte" className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-white">
        Open e-mail naar info@knico.nl
      </button>
      <p className="text-base text-body">Voeg uw tekening als bijlage toe aan de e-mail.</p>
      <p className="text-sm text-body">
        Het formulier opent uw eigen e-mailprogramma. Wij slaan niets op deze site op. U mailt zelf naar info@knico.nl.
      </p>
      {sent ? (
        <p className="border border-brand bg-muted p-4 text-base text-foreground" role="status">
          Uw e-mailprogramma is geopend met de ingevulde gegevens. Voeg uw tekening als bijlage toe en verzend de e-mail
          naar info@knico.nl. Lukt dat niet, mail dan zelf naar info@knico.nl of bel 0315-655424.
        </p>
      ) : null}
    </form>
  );
}

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-base">
      <span className="font-semibold text-foreground">{label}</span>
      <input type={type} name={name} required={required} className="mt-1 h-12 w-full border border-steel px-3" />
    </label>
  );
}
