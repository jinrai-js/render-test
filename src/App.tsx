import { HashRouter, Link } from "react-router-dom"
import Routes from "./Routes"
import { Adapter } from "mark-api-react/rrd6"

function App() {
    return (
        <div className="p-10">
            <HashRouter>
                <nav className="flex gap-8 text-[20px] mb-8">
                    <Link to="/">Home</Link>

                    <div className="flex flex-col gap-1">
                        <Link to="/todos">Todos</Link>
                        <Link to="/tasks">Tasks</Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Link to="/categoryes">Categoryes</Link>
                        <Link to="/categoryes/home">Home</Link>
                        <Link to="/categoryes/work">Work</Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Link to="/search/text?search=hello">Search text</Link>
                        <Link to="/search/types?types=work">Search types</Link>
                    </div>
                </nav>

                <div className="border-t py-10">
                    <Adapter>
                        <Routes />
                    </Adapter>
                </div>
            </HashRouter>
        </div>
    )
}

export default App
