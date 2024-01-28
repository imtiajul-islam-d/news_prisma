import React from "react";
import avatar from "../../../public/images/avatar.png";
const CommentList = ({ comment }) => {
  console.log(comment);
  return (
    <div className="mt-4 border border-t px-3 sm:px-5 py-5">
      <h3 className="font-medium">Comments</h3>
      <div>
        {comment?.map((item, idx) => (
          <div className="border p-3 my-2" key={idx}>
            <div className="flex items-center">
              <img
                src={"../../../public/images/avatar.png"}
                className="h-10 w-10 ring rounded-full mr-2"
                alt=""
              />
              <span className="text-xl">{item?.users?.firstName}</span>
            </div>
            <div>
              <p className="mt-2">{item?.descriptions}</p>
            </div>
          </div>
        ))}
      </div>
      <form></form>
    </div>
  );
};

export default CommentList;
