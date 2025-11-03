import { useQuery, useSearchArray } from "mark-api-react"
import { type FC } from "react"
import CategoryChips, { type Category } from "../components/Categoryes"
import { ApiURl } from "../api"

interface SearchTypesProps {}

const SearchTypes: FC<SearchTypesProps> = () => {
    const [selected, setSelected] = useSearchArray("types", [])
    console.log({ selected })

    const [[category]] = useQuery<undefined, Category[]>("GET", `${ApiURl}/categories/category.json`)
    const [[data], { loading }] = useQuery<{ tags: string[] }, { tags: string[] }>(
        "POST",
        "https://httpbin.org/post",
        { tags: selected },
        { deps: [selected], useChashe: true, dataKey: "json" },
    )

    return (
        <div className="flex flex-col gap-6">
            <CategoryChips
                category={category?.filter(itm => itm.link) ?? []}
                onClick={cat => setSelected(prev => [...prev.filter(itm => itm != cat), cat])}
            />
            <hr />
            {loading ? (
                "loading"
            ) : (
                <CategoryChips
                    category={data?.tags.map(itm => category?.find(cat => cat.link == itm)).filter(itm => !!itm) ?? []}
                    onClick={cat => setSelected(prev => prev.filter(itm => itm != cat))}
                />
            )}
        </div>
    )
}

export default SearchTypes
