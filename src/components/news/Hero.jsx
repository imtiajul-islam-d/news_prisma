import Link from "next/link";
import React from "react";

const Hero = ({ data }) => {
  const dateString = (str) => {
    const originalDate = new Date(str);
    // Convert to a formatted string
    const formattedDate = originalDate.toLocaleDateString("en-US", {
      //   year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };
  console.log(data);
  return (
    <div className="max-w-screen-xl p-5 mx-auto text-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {data?.featured?.map(
          (item, idx) =>
            idx === 0 && (
              <Link
                href={`/details?id=${item?.id}`}
                key={idx}
                className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-500"
                style={{
                  "background-image": `url(${item?.img1})`,
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <Link
                    rel="noopener noreferrer"
                    href={`/category?id=${item?.catID}`}
                    className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-400"
                  >
                    {item?.keywords}
                  </Link>
                  <div className="flex flex-col justify-start text-center text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      {dateString(item?.updatedAt)}
                    </span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <Link
                    rel="noopener noreferrer"
                    href={`/details?id=${item?.id}`}
                    className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-gray-100"
                  >
                    {item?.short_des}
                  </Link>
                </h2>
              </Link>
            )
        )}
        {data["featured"].map(
          (item, idx) =>
            idx !== 0 && (
              <Link
                href={`/details?id=${item?.id}`}
                key={idx}
                className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
                style={{
                  "background-image": `url(${item?.img1})`,
                }}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <Link
                    rel="noopener noreferrer"
                    href={`/category?id=${item?.catID}`}
                    className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-400"
                  >
                    {item?.keywords}
                  </Link>
                  <div className="flex flex-col justify-start text-center text-gray-100">
                    <span className="text-3xl font-semibold leadi tracki">
                      {dateString(item?.updatedAt)}
                    </span>
                  </div>
                </div>
                <h2 className="z-10 p-5">
                  <Link
                    rel="noopener noreferrer"
                    href={`/details?id=${item?.id}`}
                    className="font-medium text-md group-hover:underline text-gray-100"
                  >
                    {item?.short_des}
                  </Link>
                </h2>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Hero;
