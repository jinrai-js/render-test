import { useQuery } from "mark-api-react"
import type { FC } from "react"
import { ApiURl } from "../api"

const query = () => useQuery("GET", `${ApiURl}/get-array.json`)

interface TestProps {}

const Test: FC<TestProps> = () => {
    const [[array]] = query()

    return <>{array}</>
}

export default Test
