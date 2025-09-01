import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy,Suspense } from "react";
import Loading from "./components/Loading.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const ShowSchools = lazy(() => import("./pages/ShowSchools.jsx"));
const AddSchools = lazy(() => import("./pages/AddSchools.jsx"));

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <main className="main">
          <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ShowSchools />} />
            <Route path="/add" element={<AddSchools />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
