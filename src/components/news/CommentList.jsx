import React from "react";
import avatar from "../../../public/images/avatar.png";
import CommentForm from "./CommentForm";
const CommentList = ({ comment }) => {
  return (
    <div className="px-3 py-5 mt-4 border border-t sm:px-5">
      <h3 className="font-medium">Comments</h3>
      <div>
        {comment?.map((item, idx) => (
          <div className="p-3 my-2 border" key={idx}>
            <div className="flex items-center">
              <img
                src={"../../../public/images/avatar.png"}
                className="w-10 h-10 mr-2 rounded-full ring"
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
      <CommentForm comment={comment} />
    </div>
  );
};

export default CommentList;
