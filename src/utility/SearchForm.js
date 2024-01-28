"use client";
import Link from "next/link";
import React from "react";

const SearchForm = ({ keyword, setKeyword }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="items-center justify-start flex-1 pb-4 lg:flex lg:pb-0"
    >
      <div className="flex items-center gap-1 px-2 border rounded-lg">
        <Link href={keyword === "" ? "/" : `/search?keyword=${keyword}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
        />
      </div>
    </form>
  );
};

export default SearchForm;
