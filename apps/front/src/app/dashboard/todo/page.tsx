import { AddTodo } from "~/app/components/todos/addTodo";
import { TodoList } from "~/app/components/todos/todoList";
import { addTodo } from "~/services/actions/addTodo";
import { getTodos } from "~/services/fetch/getTodos";

export default async function Post() {
  const data = await getTodos()

  return (
    <div>
      <h1 className="mb-3 text-xl font-bold">Todo</h1>
      <AddTodo onSubmit={addTodo} />
      <TodoList todos={data} />
    </div>
  );
}
