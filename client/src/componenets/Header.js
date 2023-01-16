import React, { useState } from "react";
import { useSelector } from "react-redux";
import Members from "./Members";
import ThemeButton from "./ThemeButton";
import SearchButton from "./SearchButton";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState("");
  const user = useSelector((state) => state.currentUser);
  const taskMembers = useSelector((state) => state.members.currentTaskMembers);
  // const allMembers = useSelector((state) => state.members.allMembers);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const showTeamMembersHandler = () => {
    setShow("team");
    setIsOpen(true);
  };

  const showAllMembersHandler = () => {
    setShow("all");
    setIsOpen(true);
  };

  return (
    <header className="mx-8 grid grid-cols-5 items-center border-b-2 p-6 dark:border-stone-800">
      {/* SEARCH BUTTON */}
      <SearchButton className="hidden md:flex" />
      <div className="w-8 md:hidden"></div>

      {/* center */}
      <div className="col-span-3 flex items-center space-x-1 justify-self-center">
        <p
          className="mr-4 cursor-pointer text-sm font-semibold uppercase tracking-widest text-slate-500 hover:underline hover:underline-offset-8 lg:mr-8"
          onClick={showTeamMembersHandler}
        >
          Design Team
        </p>
        {/* member images */}
        <div className="hidden gap-1 md:flex">
          <div
            className="hidden cursor-pointer overflow-x-hidden lg:flex lg:gap-1"
            onClick={showTeamMembersHandler}
          >
            {taskMembers?.map((user) => {
              return (
                <img
                  key={user}
                  src={`users/${user.photoId}.jpg`}
                  className="mr-1 h-10 w-10 rounded-full border-2 bg-slate-300 dark:border-stone-600"
                  alt={`${user.userName}`}
                />
              );
            })}
          </div>

          <div
            className="flex cursor-pointer gap-1 lg:hidden"
            onClick={showTeamMembersHandler}
          >
            {taskMembers?.map((m, i) => {
              if (i < 3) {
                return (
                  <img
                    key={i}
                    src={`users/${m.photoId}.jpg`}
                    className="h-10 w-10 rounded-full border-2 bg-slate-300 dark:border-stone-600"
                    alt={`${m.userName}`}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>

          {/* Team Members Modal */}
          {isOpen && (
            <Members
              openHandler={openModal}
              closeHandler={closeModal}
              isOpen={isOpen}
              show={show}
              // allUsers={allMembers}
              allUsers={props.allUsers}
              team={taskMembers}
            />
          )}
        </div>
        {/* ADD MEMBERS BUTTON */}
        <button
          type="buttton"
          className="shadow-btn flex h-8 w-8 items-center justify-center rounded-full text-slate-500 dark:border-0 dark:bg-slate-800 dark:shadow-none"
          onClick={showAllMembersHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      {/* <!-- last --> */}
      <div className="flex items-center justify-end space-x-4 lg:space-x-8">
        {/* <button
          onClick={props.themeHandler}
          className="absolute right-1 top-2 h-7 w-7 cursor-pointer rounded-full text-slate-400 shadow-md transition-colors duration-200  ease-out hover:text-slate-400 md:relative md:flex md:h-6 md:w-6 md:items-center"
        >
          {props.currentTheme === "light" ? (
            <RiMoonClearLine className="h-7 w-7 md:h-6 md:w-6" />
          ) : (
            <HiOutlineSun className="h-7 w-7 md:h-6 md:w-6" />
          )}
        </button> */}

        {/* THEME BUTTON */}
        <ThemeButton className="hidden" onClickHandler={props.themeHandler} />

        <img
          src={`users/${user.photoId}.jpg`}
          className="h-10 w-10 rounded-full border-2 bg-slate-300 dark:border-stone-600"
          alt={`${user.userName}`}
        />
      </div>
    </header>
  );
}

export default Header;
