import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularNewsList = ({ popular }) => {
  return (
    <section className="max-w-screen-xl sm:px-5 mx-auto px-3">
      <div className="grid gap-3 sm:gap-5 grid-cols-1">
        {popular?.map((item, idx) => (
          <Link
            href={`/details?id=${item?.id}`}
            className="p-3 overflow-hidden h-[20svh] w-full grid grid-cols-5 gap-3 cursor-pointer hover:drop-shadow-md hover:bg-gray-100 transition"
            key={idx}
          >
            <Image
              className="object-cover w-full h-full col-span-2"
              src={item?.img1}
              height={100}
              width={100}
              sizes="30vw"
              alt=""
            />
            <div className="col-span-3">
              <div>
                <h3 className="text-lg font-medium">{item?.title}</h3>
                <p className="underline">{item?.short_des}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularNewsList;
