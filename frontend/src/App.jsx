import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSchools from "./pages/AddSchools.jsx";
import ShowSchools from "./pages/showSchools.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSchools />} />
        <Route path="/add" element={<ShowSchools />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App