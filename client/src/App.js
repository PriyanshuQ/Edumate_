import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Main /> */}
          <Route path="/" element={<Main />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
