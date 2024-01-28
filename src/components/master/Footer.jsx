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
    <footer className="max-w-screen-xl px-4 py-5 mx-auto text-gray-500 bg-white md:px-8">
      <div className="justify-between gap-6 md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="../../../public/images/logo.svg" className="w-32" />
            <p className="leading-relaxed mt-2 text-[15px]">
              {social["about"]}
            </p>
          </div>
          <FooterSubscribe />
        </div>
        <div className="items-center justify-between flex-1 mt-10 space-y-6 sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="font-medium text-gray-800">{item?.label}</h4>
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
      <div className="items-center justify-between py-6 mt-8 border-t sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 News All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href={social["facebook"]}>
                <FacebookIcon />
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href={social["youtube"]}>
                <YoutubeIcon />
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
              <a href={social["twitter"]}>
                <TwitterIcon />
              </a>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full">
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
