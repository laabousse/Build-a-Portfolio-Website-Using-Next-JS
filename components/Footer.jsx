// components/Footer.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import footerLinks from "./FooterNav";

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center text-center max-w-2xl mx-auto">
          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className={`text-sm hover:text-accent transition-colors flex items-center justify-center gap-2 ${
                        link.path === pathname ? "text-accent" : "text-gray-400"
                      }`}
                      target={link.path.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.path.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {link.icon && link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Laabousse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
