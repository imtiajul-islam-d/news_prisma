import LoginForm from "@/components/master/LoginForm";
import PlainLayOut from "@/components/master/PlainLayOut";
import React from "react";

const page = () => {
  return (
    <PlainLayOut>
      <section className="px-3 mx-auto w-full my-8 flex items-center justify-center">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <LoginForm />
        </div>
      </section>
    </PlainLayOut>
  );
};

export default page;
