import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Navbar from "./components/navbar";
import VideoCarousel from "./components/caorusel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
