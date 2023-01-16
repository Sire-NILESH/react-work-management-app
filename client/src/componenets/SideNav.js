import { useSelector, useDispatch } from "react-redux";
import { currentOptionActions } from "../store/current-option-slice";
// import { allData } from "./dummyData";
import { useState } from "react";

import ThemeButton from "./ThemeButton";
import ShowMobileNavHandler from "./ShowMobileNavHandler";
import SearchButton from "./SearchButton";

function SideNav(props) {
  const [showNavMobile, setShowNavMobile] = useState(null);
  const dispatch = useDispatch();

  const currOption = useSelector((state) => state.currentOption);
  const { designTeamTasks, personalTasks } = useSelector(
    (state) => state.allTasks
  );

  const selectCurrentOptionFromDesignTeam = (e) => {
    dispatch(
      currentOptionActions.setCurrentOption({
        taskType: "designTeamTasks",
        taskId: e.target.id,
      })
    );
  };

  const selectCurrentOptionFromPersonal = (e) => {
    dispatch(
      currentOptionActions.setCurrentOption({
        taskType: "personalTasks",
        taskId: e.target.id,
      })
    );
  };

  const showMobileNaveHandler = () => {
    setShowNavMobile((prevState) =>
      prevState && prevState === "show" ? "hide" : "show"
    );
  };

  return (
    <>
      {/* MOB NAV BAR HAMBURGER MENU */}
      <div className="absolute top-14 left-10 z-[50] flex items-center md:hidden">
        <ShowMobileNavHandler
          showNavMobile={showNavMobile}
          showMobileNaveHandler={showMobileNaveHandler}
        />
        {showNavMobile && showNavMobile === "show" ? (
          <div className="flex justify-center space-x-4 md:hidden">
            <ThemeButton
              className="ml-4 !shadow-none"
              onClickHandler={props.themeHandler}
            />
            <SearchButton className="flex md:hidden" />
          </div>
        ) : null}
      </div>

      {/* gray area */}
      <div
        className={`absolute ${
          showNavMobile && showNavMobile === "show" ? "block" : "hidden"
        } z-30 h-screen w-screen translate-y-[-15%] transform`}
        onClick={showMobileNaveHandler}
      ></div>
      <aside
        className={`absolute z-40 h-[110%] w-[60%] translate-y-[-16%]  transform bg-[#f2f2ff] ${
          showNavMobile && showNavMobile === "show"
            ? "translate-x-[0%]"
            : "translate-x-[-105%]"
        } easing-in-out shadow-lg  transition-all duration-300 dark:bg-stone-800 md:relative md:inline-block md:h-full md:w-[25%] md:translate-x-[0%] md:translate-y-[0%] md:!bg-transparent md:shadow-none`}
      >
        {/* <!-- 01 --> */}
        <div className="mt-36 mb-8  space-y-4 md:mt-[0.75rem]">
          <h3 className="text-normal col-span-1 ml-8 font-semibold text-slate-400/60 dark:text-slate-300 lg:text-2xl">
            Design team
          </h3>
          <ul className="space-y-2 lg:w-[85%]">
            {designTeamTasks?.map((task, i) => {
              return (
                <li key={i}>
                  <button
                    className={`relative w-full rounded-r-full px-8 py-2 text-left text-sm font-semibold text-slate-500 transition-colors duration-200 ease-out hover:bg-purple-200/50 focus:!outline-0 dark:hover:bg-gray-800  ${
                      currOption.taskId === task.taskId
                        ? "current-option dark:bg-lime-400 dark:text-slate-600 dark:shadow-none dark:hover:!bg-lime-400 dark:hover:!text-slate-600"
                        : ""
                    }`}
                    key={i}
                    id={task.taskId}
                    onClick={selectCurrentOptionFromDesignTeam}
                  >
                    {task && task.task}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* -- 02 -- */}
        <div className="mb-8 space-y-4">
          <h3 className="text-normal col-span-1 ml-8 font-semibold text-slate-400/50 dark:text-slate-300  lg:text-2xl">
            Personal
          </h3>
          <>
            <ul className="space-y-2 lg:w-[80%]">
              {personalTasks?.map((task, i) => {
                return (
                  <li key={i}>
                    <button
                      className={`relative w-full rounded-r-full px-8 py-2 text-left text-sm font-semibold text-slate-500 transition-colors duration-200 ease-out hover:bg-purple-200/50 focus:!outline-0 dark:hover:bg-gray-800 ${
                        currOption.taskId === task.taskId
                          ? "current-option dark:bg-lime-400 dark:text-slate-600 dark:shadow-none dark:hover:!bg-lime-400 dark:hover:!text-slate-600"
                          : ""
                      }`}
                      key={task.taskId}
                      id={task.taskId}
                      onClick={selectCurrentOptionFromPersonal}
                    >
                      {task.task}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        </div>
      </aside>
    </>
  );
}

export default SideNav;
