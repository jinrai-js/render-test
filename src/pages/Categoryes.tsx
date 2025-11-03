import { useParamsIndex, useQuery, useSearchValue } from "mark-api-react"
import type { FC } from "react"
import { useNavigate } from "react-router-dom"
import type { Output } from "./Tasks"
import Pagination from "../components/Pagination"
import CategoryChips, { type Category } from "../components/Categoryes"
import { ApiURl } from "../api"

interface CategoryesProps {}

const Categoryes: FC<CategoryesProps> = () => {
    const type = useParamsIndex(1, "all")
    const [page, setPage] = useSearchValue("page", "1")
    const navigate = useNavigate()

    const [[category]] = useQuery<undefined, Category[]>("GET", `${ApiURl}/categories/category.json`)
    const [[data]] = useQuery<{ page: number }, Output>("GET", `${ApiURl}/categories/${type}/${page}.json`, undefined, {
        deps: [page, type],
    })

    return (
        <div className="flex flex-col gap-3">
            Categoryes: {type}
            {category && (
                <CategoryChips category={category} onClick={cat => navigate(`/categoryes${cat ? "/" + cat : ""}`)} />
            )}
            <h1 className="text-[40px]">{category?.find(itm => itm.link == type)?.name}</h1>
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
        </div>
    )
}

export default Categoryes
