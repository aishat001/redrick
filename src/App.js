import {Route, Routes, useLocation, Navigate} from "react-router";
import './App.css';
import AllComponents from "./pages/components";
import Homepage from "./pages/homepage";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/components" element={<AllComponents/>} />

        </Routes>
      </>
  );
}

export default App;
