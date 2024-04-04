import React from "react";

const DuaSectionHeader = ({heading,section}) => {
  return (
    <div
      id={`sec_${section}`}
      className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg"
    >
      <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush ">
        <span className="text-primary  font-medium leading-[25px] text-mss style-Kalpurush">
          Section:{" "}
        </span>
        {heading}
      </p>
    </div>
  );
};

export default DuaSectionHeader;
