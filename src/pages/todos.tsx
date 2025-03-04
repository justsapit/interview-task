import { api } from "../utils/api";
import { useState } from "react";

export default function Todos() {
  const { data: todos, refetch } = api.todo.getAll.useQuery();
  const createTodo = api.todo.create.useMutation({ onSuccess: () => refetch() });
  const updateTodo = api.todo.update.useMutation({ onSuccess: () => refetch() });
  const deleteTodo = api.todo.delete.useMutation({ onSuccess: () => refetch() });

  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="mb-4">
        <input
          className="border p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New todo..."
        />
        <button className="ml-2 px-4 py-2 bg-green-500 text-white" onClick={() => createTodo.mutate({ text })}>
          Add
        </button>
      </div>

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center border-b p-2">
            <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
            <div>
              <button className="mx-2 text-blue-500" onClick={() => updateTodo.mutate({ id: todo.id, completed: !todo.completed })}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button className="text-red-500" onClick={() => deleteTodo.mutate({ id: todo.id })}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
