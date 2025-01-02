import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  value: "",
  isDark: true,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addValue(state, action) {
      state.value = action.payload;
    },
    addTodo(state) {
      if (state.value === "")
        return alert(`
                ------------------------------------------------
                    Oops! You forgot to write something...  😅
                ------------------------------------------------
          `);
      state.todos.push({ text: state.value, isOver: false });
      state.value = "";
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((_, i) => i !== action.payload);
    },
    darkMode(state) {
      state.isDark = !state.isDark;
    },
    completedTodo(state, action) {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.isOver = !todo.isOver;
      }
    },
  },
});

export const { addValue, addTodo, deleteTodo, darkMode, completedTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
