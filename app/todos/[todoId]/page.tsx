import React from "react";
import { Todo } from "../../../typings";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + todoId,
        { cache: "no-cache" }
        // { next: { revalidate: 60 } }
    );
    const todo = res.json();
    return todo;
};

export default async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);

    if (!todo.id) return notFound();
    return (
        <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <p className="border-t border-black mt-5 text-right">
                By User: {todo.userId}
            </p>
        </div>
    );
}

// *****only required for Static Site Generation (SSG) and Incremental Static Regeneration (ISG)*****
// *****our build is Server Side Rendering (SSR) so not needed*****

// export async function generateStaticParams() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const todos: Todo[] = await res.json();
//     const trimmedTodos = todos.slice(0, 10);
//     return trimmedTodos.map((t) => ({ todoId: t.id.toString() }));
// }
