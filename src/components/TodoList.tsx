// src/components/TodoList.tsx
import type { Todo } from "@/types";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
