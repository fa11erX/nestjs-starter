export async function getTodos() {
    const res = await fetch('http://localhost:4000/api/todos', { next: { tags: ['todo'] } })
    if (!res.ok) {
        throw new Error('Failed to fetch todos')
    }

    return res.json()
}