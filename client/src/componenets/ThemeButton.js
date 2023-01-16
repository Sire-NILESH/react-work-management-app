import React from "react";
import { HiOutlineSun } from "react-icons/hi";
import { RiMoonClearLine } from "react-icons/ri";

const ThemeButton = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      className={`${props.className} h-7 w-7 cursor-pointer rounded-full text-slate-400 shadow-md transition-colors duration-200  ease-out hover:text-slate-400 md:flex md:h-6 md:w-6 md:items-center`}
    >
      {props.currentTheme === "light" ? (
        <RiMoonClearLine className="h-7 w-7 md:h-6 md:w-6" />
      ) : (
        <HiOutlineSun className="h-7 w-7 md:h-6 md:w-6" />
      )}
    </button>
  );
};

export default ThemeButton;
