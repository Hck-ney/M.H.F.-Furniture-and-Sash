"use client";

import { useState } from "react";
import { ImageCarousel } from "@/components/image-carousel";

const works = [
  {
    title: "House on the Ridge",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Still Life / Copenhagen",
    type: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "The Quiet Office",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
];

const projectTypes = ["All", "Residential", "Hospitality", "Commercial"];

export default function Page() {
  const [workFilter, setWorkFilter] = useState("All");
  const [submitted, setSubmitted] = useState(false);
  const visibleWorks =
    workFilter === "All"
      ? works
      : works.filter((work) => work.type === workFilter);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="font-serif text-xl tracking-tight">
            M.H.F FURNITURES & SASH
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
            <a href="#works" className="hover:text-primary">
              Our work
            </a>
            <a href="#services" className="hover:text-primary">
              Services
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-20 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-12">
        <div className="flex flex-col justify-between gap-14 lg:py-10">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Custom furniture & doors / handcrafted in the Philippines
            </p>
            <h1 className="max-w-xl font-serif text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
              Furniture made for the way you live.
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-base leading-7 text-muted-foreground">
              We are a furniture studio creating made-to-measure pieces, doors,
              and interiors from honest materials. Every commission begins with
              a conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#works"
                className="bg-primary px-6 py-3 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:-translate-y-0.5"
              >
                Explore our work
              </a>
              <a
                href="#contact"
                className="border border-primary px-6 py-3 text-xs uppercase tracking-[0.16em] hover:text-foreground"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <ImageCarousel
          label="featured studio work"
          className="min-h-[540px] lg:min-h-[700px]"
          slides={[
            {
              src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
              alt: "Custom wooden furniture in a sunlit interior",
              eyebrow: "Custom furniture studio",
              title: "Made slowly. Made to stay.",
            },
            {
              src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
              alt: "Warmly lit room furnished with natural materials",
              eyebrow: "Residential interiors",
              title: "Rooms with a quiet presence.",
            },
            {
              src: "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1600&q=90",
              alt: "Minimal dining room with crafted wood furniture",
              eyebrow: "Hand-finished details",
              title: "The beauty is in the grain.",
            },
          ]}
        />
      </section>

      <section
        id="works"
        className="border-t border-border/70 bg-card px-5 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                A selection of commissions
              </p>
              <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-6xl">
                Our work, in place.
              </h2>
            </div>
            <div className="flex gap-5 text-xs uppercase tracking-[0.15em]">
              {projectTypes.map((item) => (
                <button
                  key={item}
                  onClick={() => setWorkFilter(item)}
                  className={
                    workFilter === item
                      ? "border-b border-primary pb-2"
                      : "pb-2 text-muted-foreground"
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {visibleWorks.map((work, index) => (
              <article
                key={work.title}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <ImageCarousel
                  label={work.title}
                  className="aspect-[4/3]"
                  slides={[
                    {
                      src: work.image,
                      alt: work.title,
                      eyebrow: work.type,
                      title: "View the commission",
                    },
                    {
                      src: works[(index + 1) % works.length].image,
                      alt: `${work.title} detail`,
                      eyebrow: "Material study",
                      title: "Made to endure.",
                    },
                  ]}
                />
                <div className="flex justify-between pt-4 text-xs uppercase tracking-[0.15em]">
                  <span>{work.title}</span>
                  <span className="text-muted-foreground">{work.type}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-border bg-background px-5 py-20 text-foreground lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col gap-5 border-b border-foreground/20 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our craft / What we make
              </p>
              <h2 className="max-w-md font-serif text-5xl leading-none tracking-[-0.04em] md:text-6xl">
                Whatever you imagine, we make.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 opacity-65">
              Furniture and architectural pieces made with patience, precision,
              and an understanding of the spaces they enter.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] opacity-55">
                  Made to measure
                </p>
                <p className="mt-5 max-w-xs font-serif text-3xl leading-tight">
                  From one chair to a whole home, we make the pieces that make a
                  space yours.
                </p>
              </div>
              <div className="border-t border-border pt-5 text-sm font-semibold uppercase leading-7 tracking-[0.12em] text-foreground">
                Mahogany · Yakal · Tanguile · Kiln dried
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Furniture",
                  "Made-to-measure pieces designed around your space and the way you live.",
                ],
                [
                  "02",
                  "Beds, tables & chairs",
                  "Thoughtful everyday pieces, crafted in honest timber and finished by hand.",
                ],
                [
                  "03",
                  "Doors & sash",
                  "Custom doors, sash windows, and sliding window aluminum for homes and businesses.",
                ],
                [
                  "04",
                  "Complete finishing",
                  "Pabutas, installation, and varnish services available to complete the work.",
                ],
              ].map(([num, title, text]) => (
                <div key={num} className="border border-border bg-card p-7">
                  <span className="text-xs opacity-50">{num}</span>
                  <h3 className="mt-10 font-serif text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 grid gap-10 border-t border-foreground/20 pt-8 lg:grid-cols-3">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Wood options
              </p>
              <p className="font-serif text-2xl leading-tight">
                Mahogany · Yakal · Tanguile · Kiln dried
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Doorjamb / hamba
              </p>
              <p className="font-serif text-2xl">2×4 · 2×5 · 2×6</p>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Door sizes
              </p>
              <p className="font-serif text-2xl">
                60×210 · 70×210 · 80×210 · 90×210
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
            <span className="border-2 border-primary bg-card px-4 py-2">
              Flush door
            </span>
            <span className="border-2 border-primary bg-card px-4 py-2">
              Panel door
            </span>
            <span className="border-2 border-primary bg-card px-4 py-2">
              Glass door
            </span>
            <span className="border-2 border-primary bg-card px-4 py-2">
              Aluminum door
            </span>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-border/70 bg-secondary/35 px-5 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Let's make something
            </p>
            <p className="mb-5 inline-flex bg-primary px-3 py-2 text-xs uppercase tracking-[0.16em] text-primary-foreground">
              Project inquiries welcome
            </p>
            <h2 className="max-w-md font-serif text-5xl leading-none tracking-[-0.04em] md:text-6xl">
              Tell us about your space.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
              Share a few details and we'll get back to you with the best next
              step for your project.
            </p>
            <div className="mt-10 space-y-2 text-sm">
              <a
                className="block hover:text-primary"
                href="mailto:hello@ateliernoma.com"
              >
                placeholder@gmail.com
              </a>
              <a className="block hover:text-primary" href="tel:+639171234567">
                +63 999 999 9999
              </a>
              <p className="text-muted-foreground">Rizal · Philippines</p>
            </div>
          </div>
          {submitted ? (
            <div className="flex min-h-[420px] flex-col justify-center border-t border-primary py-10">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Message received
              </p>
              <h3 className="font-serif text-4xl">
                Thank you for reaching out.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                We'll be in touch soon to learn more about your project.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-7 border border-primary/30 bg-background p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
                  Name
                  <input
                    required
                    name="name"
                    className="border-b border-border bg-transparent py-3 text-sm normal-case tracking-normal outline-none focus:border-primary"
                  />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="border-b border-border bg-transparent py-3 text-sm normal-case tracking-normal outline-none focus:border-primary"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
                Project type
                <select
                  name="project"
                  className="border-b border-border bg-transparent py-3 text-sm normal-case tracking-normal outline-none"
                >
                  <option>Custom furniture</option>
                  <option>Custom doors</option>
                  <option>Full interior</option>
                  <option>Restoration</option>
                </select>
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
                Budget / timeline
                <input
                  name="details"
                  placeholder="Tell us what you have in mind"
                  className="border-b border-border bg-transparent py-3 text-sm normal-case tracking-normal outline-none placeholder:text-muted-foreground"
                />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.14em]">
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="resize-none border-b border-border bg-transparent py-3 text-sm normal-case tracking-normal outline-none focus:border-primary"
                />
              </label>
              <button className="w-fit bg-primary px-7 py-4 text-xs uppercase tracking-[0.16em] text-primary-foreground hover:-translate-y-0.5">
                Send inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-card px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 text-xs uppercase tracking-[0.15em] md:flex-row">
          <a
            href="#top"
            className="font-serif text-lg normal-case tracking-normal"
          >
            M.H.F FURNITURES & SASH
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground">
            <a href="#works">Our work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <span>© 2026 M.H.F Furnitures & Sash</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
