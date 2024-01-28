"use client";
import React, { useEffect, useState } from "react";
import SubmitButton from "@/components/master/SubmitButton";
import { useRouter } from "next/navigation";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utility/FormHelper";
import Cookies from "js-cookie";
import Link from "next/link";

const CommentForm = ({ comment }) => {
  let router = useRouter();
  const [login, setLogin] = useState(false);

  let [data, setData] = useState({
    postID: parseInt(comment[0]?.postID),
    descriptions: "",
  });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmpty(data.descriptions)) {
      ErrorToast("Descriptions Missing!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/comments/manage", options)).json();
      setSubmit(false);
      if (res["status"] === "success") {
        SuccessToast("Comment posted");
        setData({ ...data, descriptions: "" });
        router.refresh();
      } else {
        router.replace("/user/login");
      }
    }
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <div>
      <h5>Write your comment</h5>
      <textarea
        className="w-full border border-gray-300"
        value={data.descriptions}
        rows={6}
        onChange={(e) => {
          inputOnChange("descriptions", e.target.value);
        }}
      />
      {login ? (
        <SubmitButton
          className="px-3 py-2 mt-3 text-white bg-gray-700"
          onClick={formSubmit}
          submit={submit}
          text="Submit"
        />
      ) : (
        <Link className="text-red-500" href="/user/login">
          Please login to make a comment
        </Link>
      )}
    </div>
  );
};

export default CommentForm;
