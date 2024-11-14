"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWeixin } from "react-icons/fa";
import { useState } from "react";
import { Button } from "./ui/button";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/laabousse",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/laabousse/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/ilaabousse",
  },
  {
    icon: <FaWeixin />,
    path: "/assets/addWechat.png",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  const [isWeChatOpen, setWeChatOpen] = useState(false);

  const toggleWeChatPopup = () => {
    setWeChatOpen(!isWeChatOpen);
  };

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        if (item.path === "/assets/addWechat.png") {
          return (
            <div key={index} className={iconStyles} onClick={toggleWeChatPopup}>
              {item.icon}

              {isWeChatOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                  <div className="popup-content bg-[#1c1c22] p-5 rounded-lg text-center">
                    <img
                      src={item.path}
                      alt="WeChat QR Code"
                      className="max-w-[350px] max-h-[350px]"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="uppercase Flex items-center mt-6"
                      onClick={toggleWeChatPopup}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
