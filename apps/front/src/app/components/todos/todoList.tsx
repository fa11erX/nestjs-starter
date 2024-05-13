'use client'


import { PlusIcon } from "@heroicons/react/16/solid"


type TodoItem = {
    id: number,
    content: string,
}

interface Props {
    todos: TodoItem[],
}

export const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                              
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {todos.map((todo) => (
                                    <tr key={todo.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {todo.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{todo.content}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">  <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            <PlusIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            Supprimer
                                        </button></td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
