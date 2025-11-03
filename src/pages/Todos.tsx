import { useQuery } from "mark-api-react"
import type { FC } from "react"
import { ApiURl } from "../api"

interface Todo {
    id: number
    title: string
    completed: boolean
}

const useTodos = () => useQuery<undefined, { todos: Todo[] }>("GET", `${ApiURl}/todos.json`)

interface TodosProps {}

const Todos: FC<TodosProps> = () => {
    const [[data], { loading }] = useTodos()

    if (loading) return <div>Loading</div>

    return (
        <section className="flex flex-col gap-3">
            {data?.todos.map(todo => {
                return (
                    <label className={`flex gap-2 ${todo.completed ? "line-through" : ""}`} key={todo.id}>
                        <input checked={todo.completed} type="checkbox" />
                        <span>{todo.title}</span>
                    </label>
                )
            })}
        </section>
    )
}

export default Todos
