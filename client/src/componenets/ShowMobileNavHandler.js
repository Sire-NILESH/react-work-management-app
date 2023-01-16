import React from "react";
import { HiArrowNarrowLeft, HiOutlineMenuAlt2 } from "react-icons/hi";

const ShowMobileNavHandler = (props) => {
  return (
    <button
      className="rounded-full p-1 shadow-xl md:hidden"
      onClick={props.showMobileNaveHandler}
    >
      {props.showNavMobile === "show" ? (
        <HiArrowNarrowLeft className="h-7 w-7 text-slate-500 dark:text-slate-400" />
      ) : (
        <HiOutlineMenuAlt2 className="h-7 w-7 text-slate-500 dark:text-slate-400" />
      )}
    </button>
  );
};

export default ShowMobileNavHandler;
