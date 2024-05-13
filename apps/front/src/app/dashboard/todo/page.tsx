import { AddTodo } from "~/app/components/todos/addTodo";
import { TodoList } from "~/app/components/todos/todoList";

async function getData() {
  const res = await fetch('http://localhost:4000/api/todos')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Post() {
  const data = await getData()

  return (
    <div>
      <h1 className="mb-3 text-xl font-bold">Todo</h1>
      <AddTodo />
      <TodoList todos={data} />
    </div>
  );
}
