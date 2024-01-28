"use client";
import React, { useState } from "react";
import SubmitButton from "../master/SubmitButton";
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";

const FooterSubscribe = () => {
  let [data, setData] = useState({ email: "" });
  let [submit, setSubmit] = useState(false);
  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Please enter a valid email");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/subscriber", options)).json();
      setSubmit(false);
      setData({ email: "" });
      res["status"] === "success"
        ? SuccessToast("Request Success")
        : ErrorToast("Something went wrong");
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className="block pt-4 pb-2">Stay up to date</label>
      <div className="max-w-sm flex items-center border rounded-md p-1">
        <input
          type="text"
          value={data.email}
          placeholder="Enter your email"
          onChange={(e) => {
            inputOnChange("email", e.target.value);
          }}
          className="w-full p-2.5 outline-none"
        />
        <SubmitButton
          onClick={formSubmit}
          className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
          submit={submit}
          text={"Subscribe"}
        />
      </div>
    </form>
  );
};

export default FooterSubscribe;
