import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSchools from "./pages/AddSchools.jsx";
import ShowSchools from "./pages/showSchools.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ShowSchools/>} />
        <Route path="/add" element={<AddSchools/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App