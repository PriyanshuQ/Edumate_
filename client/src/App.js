import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
