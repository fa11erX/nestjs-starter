'use server'

export async function addTodo(content: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content })
    };
    await fetch('http://localhost:4000/api/todo', requestOptions)
}