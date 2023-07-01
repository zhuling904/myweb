import Home from "../pages/Home";
import Works from "../pages/Works";
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
]
export default routesConfig;