import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { Toaster } from "react-hot-toast";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Main /> */}
      <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
