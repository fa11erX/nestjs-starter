async function getData() {
  const res = await fetch('http://localhost:4000')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return 'api ok';
}

export default async function Post() {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <h1>My todoList</h1>
      {data}
    </div>
  );
}
