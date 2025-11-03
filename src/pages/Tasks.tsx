import { useQuery, useSearchValue } from "mark-api-react"
import type { FC } from "react"
import type { PaginationProps } from "../components/Pagination"
import Pagination from "../components/Pagination"
import { ApiURl } from "../api"

export interface Output {
    todos: Todo[]
    pagination: PaginationProps
}

export interface Todo {
    id: number
    title: string
    completed: boolean
}

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
    const [page, setPage] = useSearchValue("page", "1")
    const [[data], { loading }] = useQuery<{ page: number }, Output>("GET", `${ApiURl}/tasks/${page}.json`, undefined, {
        deps: [page],
    })

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

            {data && <Pagination pagination={data.pagination} setPage={setPage} />}
        </section>
    )
}

export default Tasks
