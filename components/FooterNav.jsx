// components/FooterNav.jsx
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Resume", path: "/resume" },
      { name: "Work", path: "/work" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "LinkedIn",
        path: "https://linkedin.com/in/yourusername",
        icon: <FaLinkedin className="text-lg" />,
      },
      {
        name: "GitHub",
        path: "https://github.com/yourusername",
        icon: <FaGithub className="text-lg" />,
      },
      {
        name: "Twitter",
        path: "https://twitter.com/yourusername",
        icon: <FaTwitter className="text-lg" />,
      },
    ],
  },
];

export default footerLinks;
