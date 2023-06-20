import Home from "../pages/Home";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
    return <>
       <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={'123'}></Route>
        </Routes>
    </>
}

export default App;