import Gen from './components/Modules/Tree/gens/gen.component'
import Navbar from "./components/navbar.component";
import { Route, Router, Routes } from "react-router-dom"
import RegForm from "./components/regForm.component";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/regForm" element={<RegForm />} />
        <Route path="/"
          element={<div style={{textAlign: 'center'}}>
            <Gen />
          </div>} />
      </Routes>
    </>
  );
}

export default App;
