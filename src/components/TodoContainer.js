import Title from "./Title";
import Form from "./Form";
import Todos from "./Todos";

function TodoContainer() {
  return (
    <div className="flex justify-center items-center pt-12  gap-3 mb-8 flex-col max-w-sm mx-auto">
      <Title />
      <Form />
      <Todos />
    </div>
  );
}

export default TodoContainer;
