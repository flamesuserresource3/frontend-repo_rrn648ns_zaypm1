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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why choose us</h2>
          <p className="mt-3 text-gray-600">A clear difference where it matters most.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Other Agencies</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {other.map((item) => (
                <li key={item} className="rounded-lg bg-gray-50 px-4 py-2">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Netfyx IT Solutions</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {us.map((item) => (
                <li key={item} className="rounded-lg bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div id="contact" className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-r from-blue-600 to-orange-500 p-1 shadow-lg">
          <div className="rounded-2xl bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to scale your brand to new heights?
            </h3>
            <p className="mt-2 text-gray-600">
              Let's talk about your goals and map the fastest path to impact.
            </p>
            <a
              href="mailto:contact@netfyxitsolutions.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
