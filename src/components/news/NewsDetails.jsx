import React from "react";
import parse from "html-react-parser";
const NewsDetails = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div className=" px-3 sm:px-5">
        <h4 className="my-3">{data?.title}</h4>
        <hr />
        <div className="grid grid-cols-1">
          <div className="overflow-hidden h-[70svh]">
            <img className="w-full fill bg-cover" src={data?.img1} />
          </div>
          {parse(data?.long_des)}
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
