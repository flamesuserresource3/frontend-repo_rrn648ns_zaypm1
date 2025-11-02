import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-[inter] text-gray-900">
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold">Netfyx IT Solutions</h4>
              <p className="mt-2 text-sm text-gray-600">
                We build sleek, modern digital products for startups and enterprises.
              </p>
            </div>
            <nav className="grid grid-cols-2 gap-4 text-sm md:justify-items-center">
              <a className="text-gray-700 hover:text-gray-900" href="#">Home</a>
              <a className="text-gray-700 hover:text-gray-900" href="#services">Services</a>
              <a className="text-gray-700 hover:text-gray-900" href="#">Portfolio</a>
              <a className="text-gray-700 hover:text-gray-900" href="#">About Us</a>
              <a className="text-gray-700 hover:text-gray-900" href="#contact">Contact Us</a>
              <a className="text-gray-700 hover:text-gray-900" href="mailto:contact@netfyxitsolutions.com">contact@netfyxitsolutions.com</a>
            </nav>
            <div className="md:text-right">
              <p className="text-sm text-gray-600">Follow us</p>
              <div className="mt-3 flex items-center gap-3 md:justify-end">
                <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-700 hover:bg-gray-50">X</a>
                <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-700 hover:bg-gray-50">LinkedIn</a>
                <a href="#" className="rounded-full border border-gray-200 p-2 text-gray-700 hover:bg-gray-50">Dribbble</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} Netfyx IT Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
