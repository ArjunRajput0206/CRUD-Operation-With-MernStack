import EmpList from "./pages/EmpList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manage from "./pages/Manage";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpList />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
