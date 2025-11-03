import type { FC } from "react"
import { Route, Routes as All } from "react-router-dom"
import Home from "./pages/Home"
import Todos from "./pages/Todos"
import Tasks from "./pages/Tasks"
import Categoryes from "./pages/Categoryes"
import SearchText from "./pages/SearchText"
import SearchTypes from "./pages/SearchTypes"

interface RoutesProps {}

const Routes: FC<RoutesProps> = () => {
    return (
        <All>
            <Route path="render-test">
                <Route index element={<Home />} />
                <Route path="todos" element={<Todos />} />
                <Route path="tasks" element={<Tasks />} />

                <Route path="categoryes" element={<Categoryes />}>
                    <Route path=":type" element={<Categoryes />} />
                </Route>

                <Route path="search">
                    <Route path="text" element={<SearchText />} />
                    <Route path="types" element={<SearchTypes />} />
                </Route>
            </Route>
        </All>
    )
}

export default Routes
