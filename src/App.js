import { useSelector } from "react-redux";
import TodoContainer from "./components/TodoContainer";
import BackGroundStyle from "./Style/BackGroundStyle";

function App() {
  const { isDark } = useSelector((store) => store.todo);
  const { drakBackGround, lightBackGround, baseStyle } = BackGroundStyle();

  return (
    <div
      className={`${baseStyle} ${isDark ? drakBackGround : lightBackGround}`}
    >
      <TodoContainer />
    </div>
  );
}

export default App;
