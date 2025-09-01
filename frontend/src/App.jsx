import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSchools from "./pages/AddSchools.jsx";
import ShowSchools from "./pages/ShowSchools.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<ShowSchools />} />
            <Route path="/add" element={<AddSchools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
