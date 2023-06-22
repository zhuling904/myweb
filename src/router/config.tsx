import About from "../pages/About";
import Home from "../pages/Home";
import { ROUTER_CONFIG } from "./typing";
const routesConfig: ROUTER_CONFIG[] = [
    {
        path: "/",
        title: "Home",
        element: <Home/>,
    },
    {
        path: "/about",
        title: "About",
        element: <About/>,
    },
]
export default routesConfig;