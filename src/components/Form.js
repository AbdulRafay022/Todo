import { useDispatch, useSelector } from "react-redux";
import { addTodo, addValue } from "../features/todoSlice";

function Form() {
  const dispatch = useDispatch();
  const { value, isDark } = useSelector((store) => store.todo);

  return (
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
        className={` px-4 hover:bg-opacity-60 duration-700 transition-all font-dancing ${
          isDark
            ? "text-white bg-green-500 rounded-full border-2  border-blue-700"
            : "bg-[#ddc397] rounded-md border-blue-400 border"
        }`}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
