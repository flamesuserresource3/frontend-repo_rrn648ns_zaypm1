import { Code2, Globe, Palette, BadgeCheck, Smartphone, Megaphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Globe,
    desc: "High-performance websites built with modern frameworks and best practices.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    desc: "Human-centered interfaces that blend aesthetics with usability.",
  },
  {
    title: "Software Development",
    icon: Code2,
    desc: "Robust, scalable software tailored to your business needs.",
  },
  {
    title: "Branding",
    icon: BadgeCheck,
    desc: "Distinct brand systems that communicate your value clearly.",
  },
  {
    title: "App Development",
    icon: Smartphone,
    desc: "Native and cross-platform apps with thoughtful user journeys.",
  },
  {
    title: "Social Media Marketing",
    icon: Megaphone,
    desc: "Strategic campaigns to reach, engage, and convert your audience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-24 w-24 rotate-12 rounded-xl bg-gradient-to-br from-emerald-500/15 to-lime-400/10 blur-xl" />
        <div className="absolute right-10 bottom-10 h-28 w-28 -rotate-12 rounded-full bg-gradient-to-br from-emerald-400/15 to-lime-300/10 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About & Services</h2>
          <p className="mt-3 text-gray-600">
            Netfyx IT Solutions crafts future-ready digital products for startups and enterprises. From strategy to launch, we partner end-to-end.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-lime-500 text-white shadow-md shadow-emerald-600/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
