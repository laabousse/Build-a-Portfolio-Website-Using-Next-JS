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
            <nav
              key={index}
              aria-label={section.ariaLabel}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-accent">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className={`group text-base hover:text-accent transition-colors flex items-center justify-center gap-3 ${
                        link.path === pathname ? "text-accent" : "text-gray-500"
                      }`}
                      target={
                        link.path.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.path.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={link.description}
                    >
                      {link.icon && (
                        <span className="group-hover:text-accent transition-colors">
                          {link.icon}
                        </span>
                      )}
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
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
