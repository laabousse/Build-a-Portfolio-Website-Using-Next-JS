// components/FooterNav.jsx
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const footerLinks = [
  {
    title: "Quick Links",
    ariaLabel: "Primary navigation",
    links: [
      { name: "Home", path: "/", description: "Return to homepage" },
      { name: "Services", path: "/services", description: "View our services" },
      { name: "Resume", path: "/resume", description: "View my resume" },
      { name: "Work", path: "/work", description: "Browse my portfolio" },
      { name: "Contact", path: "/contact", description: "Get in touch" },
    ],
  },
  {
    title: "Connect",
    ariaLabel: "Social media links",
    links: [
      {
        name: "LinkedIn",
        path: "https://linkedin.com/in/laabousse",
        icon: <FaLinkedin className="text-lg" aria-hidden="true" />,
        description: "Connect with me on LinkedIn",
      },
      {
        name: "GitHub",
        path: "https://github.com/laabousse",
        icon: <FaGithub className="text-lg" aria-hidden="true" />,
        description: "View my projects on GitHub",
      },
      {
        name: "Twitter",
        path: "https://twitter.com/ilaabousse",
        icon: <FaTwitter className="text-lg" aria-hidden="true" />,
        description: "Follow me on Twitter",
      },
    ],
  },
];

export default footerLinks;
