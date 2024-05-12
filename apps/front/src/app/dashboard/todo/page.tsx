async function getData() {
  const res = await fetch('http://localhost:4000/api/todos')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Post() {
  const data = await getData()
  const todoItems = data.map((todo: any) => <li>{todo.content}</li>);

  return (
    <div>
      <h1>My todoList</h1>
      <ul>{todoItems}</ul>
    </div>
  );
}
