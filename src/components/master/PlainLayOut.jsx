// When not logged in

import React from "react";
import AppNavBar from "@/components/master/AppNavBar";
import Footer from "@/components/master/Footer";
import { Toaster } from "react-hot-toast";

async function getData() {
  let socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())[
    "data"
  ];
  let categories = (
    await (
      await fetch(`${process.env.HOST}/api/category`, { cache: "no-store" })
    ).json()
  )["data"];
  return { socials: socials, categories: categories };
}

const PlainLayOut = async ({ children }) => {
  const data = await getData();
  // console.log(data);
  return (
    <>
      <AppNavBar data={data} />
      {children}
      <Toaster />
      <Footer data={data} />
    </>
  );
};

export default PlainLayOut;
