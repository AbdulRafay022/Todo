import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../features/todoSlice";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";

function Title() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((store) => store.todo);

  return (
    <div className="flex items-center  w-full ">
      <h1
        className={`text-2xl font-bold text-start duration-700 transition-all font-dancing ${
          isDark ? "text-white" : ""
        }`}
      >
        Todo List
      </h1>

      {!isDark ? (
        <img
          src={iconMoon}
          alt={iconMoon}
          className="ml-auto cursor-pointer"
          onClick={() => dispatch(darkMode())}
        />
      ) : (
        <img
          src={iconSun}
          alt={iconSun}
          className="ml-auto cursor-pointer"
          onClick={() => dispatch(darkMode())}
        />
      )}
    </div>
  );
}

export default Title;
