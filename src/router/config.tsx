import Home from "../pages/Home";
import Works from "../pages/Works";
import About from "../pages/About";
import { ROUTER_CONFIG } from "./typing";
const routesConfig: ROUTER_CONFIG[] = [
    {
        path: "/",
        title: "Home",
        element: <Home/>,
    },
    {
        path: "/works",
        title: "Works",
        element: <Works/>,
    },
    {
        path: "/about",
        title: "About",
        element: <About/>,
    },
]
export default routesConfig;