import About from "../pages/About";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return <>
       <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </>
}

export default App;