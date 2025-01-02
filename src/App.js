import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addValue,
  completedTodo,
  darkMode,
  deleteTodo,
} from "./features/todoSlice";
import iconMoon from "./icon-moon.svg";
import iconSun from "./icon-sun.svg";

function App() {
  const dispatch = useDispatch();
  const { todos, value, isDark } = useSelector((store) => store.todo);
  return (
    <div
      className={`min-h-screen transition-all duration-700 ease-in-out  ${
        isDark
          ? "bg-gradient-to-br from-[#0A1128] via-[#003366] to-[#005f73] bg-[length:200%_200%] bg-[position:0_0] text-white"
          : "bg-gradient-to-br from-[#D9E8F6] via-[#ffE8c1] to-[#C1E1DC] bg-[length:200%_200%] bg-[position:100%_100%]"
      }`}
    >
      <div className="flex justify-center items-center pt-12  gap-3 mb-8 flex-col max-w-sm mx-auto">
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
        <form
          className="flex gap-3 w-full "
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodo());
          }}
        >
          <input
            type="text"
            className={`border border-blue-400 pl-3 py-1 w-full duration-700 transition-all placeholder:font-dancing   ${
              isDark
                ? "bg-navy-blue text-white rounded-full"
                : "bg-[rgba(255,240,193,0.5)] rounded-md"
            }`}
            placeholder="Add todo item"
            value={value}
            onChange={(e) => dispatch(addValue(e.target.value))}
          />
          <button
            className={` px-4    hover:bg-opacity-60 duration-700 transition-all font-dancing ${
              isDark
                ? "text-white bg-green-500 rounded-full border-2  border-blue-700"
                : "bg-[#ddc397] rounded-md border-blue-400 border"
            }`}
            type="submit"
          >
            Add
          </button>
        </form>
        <ul className="w-full ">
          {todos.map((todo, i) => (
            <li
              key={i}
              className={`flex text-center border group  border-blue-400 pr-1 pl-4 py-1 gap-3 items-center mb-2 w-full   ${
                isDark
                  ? "bg-navy-blue text-white rounded-full"
                  : "bg-[rgba(255,240,193,0.5)] text-gray-700 rounded-md"
              }  mx-auto  hover:bg-opacity-40 hover:scale-105 hover:-translate-x-1 transition-all  duration-700`}
            >
              <input
                type="checkbox"
                onClick={() => dispatch(completedTodo(i))}
              />
              <p className={`${todo.isOver ? "line-through opacity-50" : ""}`}>
                {todo.text}
              </p>
              <button
                onClick={() => dispatch(deleteTodo(i))}
                className={`text-sm text-red-400 border  border-gray-400 px-3 ml-auto transition-all duration-700 group-hover:rotate-180 ${
                  isDark ? "rounded-full" : "rounded-md"
                }`}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
