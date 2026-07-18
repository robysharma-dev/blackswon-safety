"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/hero.png", "/hero1.png", "/hero2.png"];

const products = [
  {
    number: "01",
    title: "Fire Hydrant Systems",
    copy: "Hydrant valves, hose reels, landing valves and complete water-based firefighting systems.",
  },
  {
    number: "02",
    title: "Fire Sprinkler Systems",
    copy: "Automatic sprinklers, piping and accessories designed for dependable fire suppression.",
  },
  {
    number: "03",
    title: "Fire Extinguishers",
    copy: "Portable and wheeled extinguishers for different fire classes and workplace risks.",
  },
  {
    number: "04",
    title: "Detection & Alarm",
    copy: "Smoke detectors, control panels, sounders and early-warning fire alarm solutions.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      {/* Premium Hero Section */}
      <section
        id="home"
        className="relative min-h-[820px] h-screen max-h-[980px] w-full overflow-hidden bg-slate-950 text-white"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="Blackswon industrial safety infrastructure"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </motion.div>
        </AnimatePresence>

        {/* Technical Grid */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Main Hero Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 pb-24 pt-32 md:px-12">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="mb-7 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-cyan-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-cyan-300">
                  Arisys Engineering Division
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
                Safety that
                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                  powers industry.
                </span>
              </h1>

              <div className="mt-8 max-w-2xl border-l-2 border-cyan-400/80 pl-6">
                <h2 className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-white">
                  Blackswon Safety Services Private Limited
                </h2>

                <p className="max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                  High-performance fire-safety products and infrastructure
                  engineered for demanding environments, stronger compliance
                  and dependable protection.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="group inline-flex min-w-[220px] items-center justify-between bg-cyan-400 px-6 py-5 text-sm font-black uppercase tracking-wider text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Explore Products

                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-semibold text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
                >
                  Discover Blackswon
                  <span>↗</span>
                </a>
              </div>
            </motion.div>

            {/* Right Glass Panel */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative overflow-hidden border border-white/20 bg-slate-950/55 p-8 shadow-2xl backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-cyan-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Fire Protection Systems
                </span>

                <h3 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight text-white">
                  Engineered for
                  <br />
                  critical environments.
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    "Fire Hydrant Systems",
                    "Fire Sprinkler Systems",
                    "Detection & Alarm",
                  ].map((item, itemIndex) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-t border-white/15 pt-5"
                    >
                      <span className="font-black text-cyan-400">
                        0{itemIndex + 1}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 md:flex">
          {images.map((image, slideIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(slideIndex)}
              aria-label={`Show hero image ${slideIndex + 1}`}
              className={`h-[2px] transition-all duration-300 ${
                index === slideIndex
                  ? "w-10 bg-cyan-400"
                  : "w-5 bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Bottom Product Rail */}
        <div className="absolute bottom-0 left-1/2 z-20 grid w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 grid-cols-2 border-t border-white/20 md:grid-cols-4">
          {[
            "Hydrant Systems",
            "Fire Sprinklers",
            "Extinguishers",
            "Detection & Alarm",
          ].map((item, itemIndex) => (
            <div
              key={item}
              className="border-r border-white/15 bg-slate-950/65 px-5 py-5 backdrop-blur-md"
            >
              <span className="mb-1 block text-[9px] font-bold tracking-[0.2em] text-cyan-400">
                0{itemIndex + 1}
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-300 md:text-[10px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Fire-Safety Products Section */}
      <section
        id="products"
        className="relative overflow-hidden bg-slate-100 px-6 py-24 text-slate-950 md:py-32"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-cyan-500" />

                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                  Our Fire-Safety Range
                </span>
              </div>

              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Protection at every
                <br />

                <span className="text-blue-700">critical point.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-600">
              Essential firefighting, suppression and early-warning products
              for commercial, industrial and residential projects.
            </p>
          </div>

          <div className="grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.number}
                className="group flex min-h-[420px] flex-col border-b border-r border-slate-300 bg-white/70 p-7 transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:border-cyan-500 hover:bg-white hover:shadow-2xl"
              >
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-400">
                  {product.number}
                </span>

                <div className="my-10 flex h-16 w-16 items-center justify-center bg-blue-950 text-2xl font-light text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-blue-950">
                  +
                </div>

                <h3 className="mb-4 text-xl font-black uppercase leading-tight tracking-tight text-slate-950">
                  {product.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600">
                  {product.copy}
                </p>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${product.title}`}
                  className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6 text-xs font-black uppercase tracking-wider text-blue-900 transition-colors hover:text-cyan-600"
                >
                  Enquire
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative h-[420px] w-full overflow-hidden bg-slate-200 lg:h-[600px]">
            <Image
              src="/hero1.png"
              alt="Blackswon fire-safety infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 bg-cyan-400 px-6 py-5 text-xs font-black uppercase tracking-wider text-blue-950">
              Engineered for dependable protection
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-cyan-500" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                About Blackswon
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Building stronger
              <br />
              fire protection.
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                At{" "}
                <strong className="text-slate-950">
                  Blackswon Safety Services Private Limited
                </strong>
                , we understand that modern fire safety goes beyond basic
                compliance. The correct systems help protect people, property
                and business continuity.
              </p>

              <p>
                Our product range includes fire hydrant components, sprinkler
                systems, extinguishers, detection equipment and alarm
                solutions for different project requirements.
              </p>

              <p>
                We focus on dependable products, responsive supply and
                practical guidance for commercial, industrial and residential
                fire-safety projects.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex min-w-[210px] items-center justify-between bg-blue-950 px-6 py-5 text-sm font-black uppercase tracking-wider text-white transition-all hover:-translate-y-1 hover:bg-cyan-500 hover:text-blue-950"
            >
              Talk to our team
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Blackswon Section */}
      <section className="bg-slate-100 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-cyan-500" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                Why Blackswon
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Fire protection built
              <br />
              around your project.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Complete Product Range",
                copy: "Core firefighting, suppression and detection products available from one dependable source.",
              },
              {
                number: "02",
                title: "Project-Focused Supply",
                copy: "Responsive support for commercial, industrial and residential fire-safety requirements.",
              },
              {
                number: "03",
                title: "Practical Guidance",
                copy: "Clear product information to help customers select suitable products for every application.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="border-t-2 border-blue-950 pt-7"
              >
                <span className="text-xs font-black text-blue-700">
                  {item.number}
                </span>

                <h3 className="mt-10 text-xl font-black uppercase text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-blue-950 px-6 py-24 text-white md:py-32"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-cyan-400" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
              Start a conversation
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Let&apos;s strengthen your
            <br />

            <span className="text-cyan-400">fire protection.</span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-slate-300">
            Share your project requirements and our team will help you
            identify suitable fire-safety products and system components.
          </p>

          <a
            href="mailto:info@blackswon.in"
            className="mt-10 inline-flex min-w-[250px] items-center justify-between bg-cyan-400 px-6 py-5 text-sm font-black text-blue-950 transition-all hover:-translate-y-1 hover:bg-white"
          >
            info@blackswon.in
            <span>↗</span>
          </a>
        </div>

        <div className="absolute -bottom-40 right-0 text-[450px] font-black leading-none text-white/[0.025]">
          B
        </div>
      </section>
    </main>
  );
}