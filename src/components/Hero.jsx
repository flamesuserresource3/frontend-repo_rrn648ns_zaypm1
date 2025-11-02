import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decorative gradients */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-20%] h-80 w-80 rounded-full bg-gradient-to-tl from-orange-400/20 to-amber-300/10 blur-3xl" />
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="260" stroke="#111827" strokeOpacity="0.08" strokeWidth="1" />
          <circle cx="400" cy="400" r="320" stroke="#111827" strokeOpacity="0.06" strokeWidth="1" />
          <circle cx="400" cy="400" r="380" stroke="#111827" strokeOpacity="0.04" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
            Netfyx IT Solutions
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build new products for startups
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            We design and engineer modern digital experiences — websites, apps, and software —
            that help ambitious brands move faster and grow smarter.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:bg-gray-50"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
