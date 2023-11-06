import { Routes, Route } from "react-router-dom";
import routesConfig from "./config";
import { ROUTER_CONFIG } from "./typing";
const MyRouter = () => {
  return (
    <>
      <Routes>
        {routesConfig.map((item: ROUTER_CONFIG) => {
          return (
            <Route
              key={item.title}
              path={item.path}
              element={item.element}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
};

export default MyRouter;
