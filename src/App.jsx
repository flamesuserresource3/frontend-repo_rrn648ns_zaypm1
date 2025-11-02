import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-[inter] text-gray-100">
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold text-white">Netfyx IT Solutions</h4>
              <p className="mt-2 text-sm text-gray-400">
                We build sleek, modern digital products for startups and enterprises.
              </p>
            </div>
            <nav className="grid grid-cols-2 gap-4 text-sm md:justify-items-center">
              <a className="text-gray-300 transition-colors hover:text-emerald-400" href="#">Home</a>
              <a className="text-gray-300 transition-colors hover:text-emerald-400" href="#services">Services</a>
              <a className="text-gray-300 transition-colors hover:text-emerald-400" href="#">Portfolio</a>
              <a className="text-gray-300 transition-colors hover:text-emerald-400" href="#">About Us</a>
              <a className="text-gray-300 transition-colors hover:text-emerald-400" href="#contact">Contact Us</a>
              <a className="text-gray-300 transition-colors hover:text-emerald-400" href="mailto:contact@netfyxitsolutions.com">contact@netfyxitsolutions.com</a>
            </nav>
            <div className="md:text-right">
              <p className="text-sm text-gray-400">Follow us</p>
              <div className="mt-3 flex items-center gap-3 md:justify-end">
                <a href="#" className="rounded-full border border-white/10 p-2 text-gray-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400">X</a>
                <a href="#" className="rounded-full border border-white/10 p-2 text-gray-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400">LinkedIn</a>
                <a href="#" className="rounded-full border border-white/10 p-2 text-gray-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-400">Dribbble</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} Netfyx IT Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
