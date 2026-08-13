import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Share2 } from "lucide-react";

import heroVases from "@/assets/hero-vases.jpg";
import workshop from "@/assets/workshop.jpg";
import vase1 from "@/assets/vase-1.jpg";
import vase2 from "@/assets/vase-2.jpg";
import vase3 from "@/assets/vase-3.jpg";
import vase4 from "@/assets/vase-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+250789450358";
const PHONE_DISPLAY = "+250 789 450 358";

const pieces = [
  {
    img: vase1,
    name: "Ebony Column",
    note: "Hand-turned hardwood, natural oil finish",
  },
  { img: vase2, name: "Honey Vessel", note: "Teak, wide-belly silhouette" },
  { img: vase3, name: "Ash Table Set", note: "Bowls and slim vase, pale ash" },
  { img: vase4, name: "Tapered Olive", note: "Lacquered grain, floor height" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroVases}
          alt="Collection of handcrafted wooden vases by Amigos"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-24">
          <p className="eyebrow">Gakinjiro · Kigali · Rwanda</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Amigos
            <span className="block italic text-primary">Wooden Vases</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            We specialise in wooden vases and home decor — each piece turned,
            sanded and finished by hand in our Kigali workshop.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-secondary"
            >
              See the catalog
            </a>
          </div>
        </div>
      </section>

      {/* Marquee-ish info strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: Clock, label: "Open now", value: "Open 24 hours" },
            { icon: MapPin, label: "Find us", value: "Gakinjiro, Kigali" },
            { icon: Instagram, label: "Follow", value: "@amigos_wooden_vases" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 px-6 py-6">
              <Icon className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="eyebrow">{label}</p>
                <p className="mt-1 text-sm text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">The catalog</p>
            <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">
              Pieces in <span className="italic text-primary">grain</span>
            </h2>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="hidden shrink-0 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline sm:block"
          >
            Ask for a price
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {pieces.map((p) => (
            <figure key={p.name} className="group">
              <div className="overflow-hidden bg-card">
                <img
                  src={p.img}
                  alt={p.name}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-display text-lg">{p.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {p.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Craft */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <img
            src={workshop}
            alt="Artisan turning a wooden vase on a lathe"
            width={1200}
            height={1408}
            loading="lazy"
            className="w-full object-cover"
            style={{ boxShadow: "var(--shadow-deep)" }}
          />
          <div>
            <p className="eyebrow">The workshop</p>
            <h2 className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
              Turned by hand,
              <span className="block italic text-primary">one at a time</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Every vase starts as a solid block of local hardwood. It is
              mounted, turned, shaped and sanded until the grain shows what it
              wants to be — then oiled or lacquered by hand.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-y-8">
              {[
                ["Custom sizes", "Made to your room"],
                ["Bulk orders", "Hotels & interiors"],
                ["Home decor", "Bowls, lamps, sets"],
                ["Delivery", "Across Kigali"],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-display text-lg">{t}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="visit" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="eyebrow">Visit or call</p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight tracking-tight sm:text-6xl">
          Gakinjiro, Kigali —
          <span className="italic text-primary"> open 24 hours</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
          </a>
          <a
            href="https://www.instagram.com/amigos_wooden_vases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm transition-colors hover:bg-secondary"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a
            href="https://maps.google.com/?q=Gakinjiro,+Kigali,+Rwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm transition-colors hover:bg-secondary"
          >
            <Share2 className="h-4 w-4" /> Directions
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Amigos Wooden Vases · Arts & entertainment</span>
          <span>Gakinjiro, Kigali, Rwanda</span>
        </div>
      </footer>
    </main>
  );
}
