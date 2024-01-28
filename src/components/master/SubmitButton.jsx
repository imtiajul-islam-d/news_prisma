"use client";
import React from "react";

const SubmitButton = (props) => {
  if (props?.submit === false) {
    return (
      <button
        onClick={props.onClick}
        type="submit"
        className={props?.className}
      >
        {props.text}
      </button>
    );
  } else {
    return (
      <button disabled={true} className={props?.className}>
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Processing...</span>
        </div>
      </button>
    );
  }
};

export default SubmitButton;
