import { api } from "../utils/api";
import { useState, useEffect } from "react";

export default function Todos() {
  const { data: todos, refetch } = api.todo.getAll.useQuery();

  const createTodo = api.todo.create.useMutation({
    onSuccess: async () => {
      await refetch();
      setText("");
    }
  });

  const updateTodo = api.todo.update.useMutation({
    onSuccess: async () => {
      await refetch();
    }
  });

  const deleteTodo = api.todo.delete.useMutation({
    onSuccess: async () => {
      await refetch();
    }
  });

  const [text, setText] = useState("");
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    setIsEntering(false);
  }, []);

  const handleCreateTodo = () => {
    void createTodo.mutateAsync({ text });
  };

  const handleUpdateTodo = (id: number, completed: boolean) => {
    void updateTodo.mutateAsync({ id, completed });
  };

  const handleDeleteTodo = (id: number) => {
    void deleteTodo.mutateAsync({ id });
  };

  return (
    <main
      className={`min-h-screen p-6 transition-opacity duration-500 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400 ${isEntering ? "opacity-0" : "opacity-100"}`}
    >
      <h1 className="text-3xl font-extrabold text-white mb-6 text-center">Todo List</h1>

      <div className="mb-6 flex justify-center">
        <input
          className="border p-2 rounded-lg bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New todo..."
        />
        <button
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md transition hover:bg-green-600 active:scale-95"
          onClick={handleCreateTodo}
        >
          Add
        </button>
      </div>

      {todos && todos.length === 0 ? (
        <div className="text-center text-xl text-gray-700">
          <p>No more things to do today!</p>
        </div>
      ) : (
        <ul className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
          {todos?.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border-b py-2 last:border-none"
            >
              <span
                className={`${
                  todo.completed
                    ? "line-through text-gray-500 transition-all duration-300"
                    : "text-black"
                }`}
              >
                {todo.text}
              </span>
              <div>
                <button
                  className="mx-2 text-blue-500 hover:text-blue-700 transition-colors duration-200 transform hover:scale-105"
                  onClick={() => handleUpdateTodo(todo.id, !todo.completed)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="text-red-500 hover:text-red-700 transition-colors duration-200 transform hover:scale-105"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
