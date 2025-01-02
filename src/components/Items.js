import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../features/todoSlice";

function Items() {
  const dispatch = useDispatch();
  const { todos, isDark } = useSelector((store) => store.todo);

  return todos.map((todo, i) => (
    <li
      key={i}
      className={`flex text-center border group border-blue-400 pr-1 pl-4 py-1 gap-3 items-center mb-2 w-full   ${
        isDark
          ? "bg-navy-blue text-white rounded-full"
          : "bg-[rgba(255,240,193,0.5)] text-gray-700 rounded-md"
      }  mx-auto  hover:bg-opacity-40 hover:scale-105 md:hover:-translate-x-1 transition-all  duration-700`}
    >
      <input type="checkbox" onClick={() => dispatch(completedTodo(i))} />
      <p className={`${todo.isOver ? "line-through opacity-50" : ""}`}>
        {todo.text}
      </p>
      <button
        onClick={() => dispatch(deleteTodo(i))}
        className={`text-sm text-red-400 border font-bold  border-gray-400 px-2 ml-auto transition-all duration-700 group-hover:rotate-180 ${
          isDark ? "rounded-full" : "rounded-md"
        }`}
      >
        ❌
      </button>
    </li>
  ));
}

export default Items;
