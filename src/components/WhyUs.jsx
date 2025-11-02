export default function WhyUs() {
  const other = [
    "Generic templates",
    "Slow timelines",
    "Surface-level research",
    "Hidden costs",
    "Little post-launch support",
  ];
  const us = [
    "Custom, strategy-led solutions",
    "Agile delivery with clear milestones",
    "Deep discovery and user testing",
    "Transparent pricing",
    "Long-term partnership & support",
  ];

  return (
    <section className="bg-gradient-to-b from-black to-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Why choose us</h2>
          <p className="mt-3 text-gray-300">A clear difference where it matters most.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-100">Other Agencies</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {other.map((item) => (
                <li key={item} className="rounded-lg bg-neutral-800/80 px-4 py-2">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-100">Netfyx IT Solutions</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-200">
              {us.map((item) => (
                <li key={item} className="rounded-lg bg-gradient-to-r from-emerald-900/40 to-lime-800/30 px-4 py-2 ring-1 ring-emerald-500/20">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div id="contact" className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-r from-emerald-600 to-lime-500 p-1 shadow-lg">
          <div className="rounded-2xl bg-neutral-950 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Ready to scale your brand to new heights?
            </h3>
            <p className="mt-2 text-gray-300">
              Let's talk about your goals and map the fastest path to impact.
            </p>
            <a
              href="mailto:contact@netfyxitsolutions.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-md"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
