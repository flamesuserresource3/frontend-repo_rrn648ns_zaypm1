export default function TrustedBy() {
  const logos = [
    { name: "Nimbus", initials: "N" },
    { name: "Vertex", initials: "V" },
    { name: "Aperture", initials: "A" },
    { name: "HelixLabs", initials: "H" },
    { name: "Quantum", initials: "Q" },
  ];

  return (
    <section className="bg-neutral-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-400">
          Trusted by clients worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-neutral-900 shadow-sm"
            >
              <span className="text-base font-semibold tracking-wide text-gray-200">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
