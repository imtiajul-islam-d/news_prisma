import React from "react";
import FooterSubscribe from "../ui/FooterSubscribe";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/lib/social";

const Footer = (props) => {
  const footerNavs = [
    {
      label: "Recommended",
      items: props?.data["categories"],
    },
    {
      label: "Legal",
      items: [
        {
          href: "/privacy",
          name: "Privacy",
        },
        {
          href: "/terms",
          name: "Terms",
        },
      ],
    },
  ];
  const social = props?.data["socials"][0];
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="https://www.floatui.com/logo.svg" className="w-32" />
            <p className="leading-relaxed mt-2 text-[15px]">
              {social["about"]}
            </p>
          </div>
          <FooterSubscribe />
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 font-medium">{item?.label}</h4>
              {item.items.map((el, idx) =>
                item?.label === "Recommended" ? (
                  idx < 4 && (
                    <li key={idx}>
                      <a
                        href={`/category?id=${el["id"]}`}
                        className="hover:underline hover:text-indigo-600"
                      >
                        {el.name}
                      </a>
                    </li>
                  )
                ) : (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:underline hover:text-indigo-600"
                    >
                      {el.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Float UI All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href={social["facebook"]}>
                <FacebookIcon />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href={social["youtube"]}>
                <YoutubeIcon />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href={social["twitter"]}>
                <TwitterIcon />
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href={social["linkedin"]}>
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style> */}
    </footer>
  );
};

export default Footer;
