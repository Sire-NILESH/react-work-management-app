import React from "react";

const SearchButton = (props) => {
  return (
    <div
      className={`${props.className} cursor-pointer items-center justify-start space-x-2`}
    >
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-300 transition-colors duration-200 ease-out hover:text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search"
        className="hidden w-[100%] bg-[#f2f2ff] p-2 text-sm font-semibold tracking-widest text-slate-600 placeholder:uppercase placeholder:text-slate-400/50 focus:border-b-2 focus:border-slate-400 focus:outline-none dark:bg-stone-900 dark:text-slate-300 dark:placeholder:text-slate-300 md:inline-block lg:placeholder:tracking-[4px]"
      />
    </div>
  );
};

export default SearchButton;
