import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline full-width cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft green gradient overlays for depth (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-emerald-900/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-28 sm:pt-36 sm:pb-36">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-white/20 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Netfyx IT Solutions
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Build new products for startups
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-emerald-100">
            We design and engineer modern digital experiences — websites, apps, and software —
            that help ambitious brands move faster and grow smarter.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900/40"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-colors hover:bg-white/15"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
