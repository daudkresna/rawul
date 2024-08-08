import React from "react";

const ToolTip = ({ text, hover }: { text: string; hover: boolean }) => {
  return (
    <div
      className={`absolute p-2 -bottom-2 rounded-md left-1/2 -translate-x-1/2 w-fit h-fit shadow-md bg-blue-200 transform ease-in-out duration-300
        
        ${hover ? "scale-100" : "scale-0"}`}
    >
      {text}
    </div>
  );
};

export default ToolTip;
