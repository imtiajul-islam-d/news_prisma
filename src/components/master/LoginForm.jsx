"use client";

import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import Link from "next/link";

const LoginForm = () => {
  let [data, setData] = useState({ email: "", password: "" });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (IsEmail(data.email)) {
      ErrorToast("Incorrect Email!");
    }
    if (IsEmpty(data.password)) {
      ErrorToast("Incorrect Password!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/user/login", options)).json();
      setSubmit(false);

      if (res["status"] === "successful") {
        SuccessToast("Login Successful");
        setData({ email: "", password: "" });
        window.location.href = "/";
      } else {
        ErrorToast("Something went wrong");
      }
    }
  };
  return (
    <form novalidate="" action="" className="space-y-12">
      <div className="space-y-4">
        <div>
          <label for="email" className="block mb-2 text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              inputOnChange("email", e.target.value);
            }}
            placeholder="leroy@jenkins.com"
            className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label for="password" className="text-sm">
              Password
            </label>
            <Link
              rel="noopener noreferrer"
              href="/user/emailVerify"
              className="text-xs hover:underline text-gray-400"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              inputOnChange("password", e.target.value);
            }}
            placeholder="*****"
            className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          {/* <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
          >
            Sign in
          </button> */}
          <SubmitButton
            onClick={formSubmit}
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
            submit={submit}
            text="Login"
          />
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Dont have an account yet?
          <Link
            rel="noopener noreferrer"
            href="/user/registration"
            className="hover:underline text-violet-400"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
