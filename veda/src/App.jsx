import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Login/Log";

import MainPage from "./MainPage";
import Cpage from "./About/Cpage";
function App() {
  return (
    <BrowserRouter>

      <Routes>

      
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={<MainPage /> }
        />
        
  
        <Route
          path="/detail"
          element={<Cpage /> }
        />
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;