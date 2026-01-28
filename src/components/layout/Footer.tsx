import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-slate-50 pt-16 pb-12 md:pb-16">
      {/* Card-like container */}
      <div 
        className="
          mx-auto max-w-6xl px-6 md:px-10 
          bg-white/70 backdrop-blur-sm 
          border border-orange-200/60 rounded-2xl 
          shadow-sm 
          overflow-hidden
        "
      >
        <div className="py-12 md:py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo Column */}
            <div className="flex flex-col">
              <img
                src="/logo.png"
                alt="Vivekananda School"
                className="h-28 w-auto object-contain mb-6"
              />
              <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
                Nurturing minds with knowledge, values & discipline
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-800">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                {["/", "/about", "/academics", "/admissions", "/contact"].map((path, i) => {
                  const labels = ["Home", "About", "Academics", "Admissions", "Contact"];
                  return (
                    <li key={path}>
                      <a
                        href={path}
                        className="text-slate-600 hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {labels[i]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-800">
                Contact Us
              </h4>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-orange-600 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Vivekananda School<br />
                    Mehdipatnam, Telangana
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-600 flex-shrink-0" />
                  <span>+91 9XXXXXXXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-600 flex-shrink-0" />
                  <a
                    href="mailto:info@vivekanandaschool.com"
                    className="hover:text-orange-600 transition-colors duration-200"
                  >
                    info@vivekanandaschool.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col sm:items-end">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-800">
                Follow Us
              </h4>
              <div className="flex gap-5">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "Youtube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="group rounded-full bg-white p-3 shadow-sm hover:bg-orange-100 transition-all duration-300 hover:scale-110 hover:shadow-md border border-orange-100"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-orange-600 group-hover:text-orange-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright – inside the card, bottom aligned */}
        <div className="border-t border-orange-100/60 pt-6 pb-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Vivekananda School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;