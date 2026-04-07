import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Login/Log";
import RegisterPage from "./Register/Register";
import MainPage from "./MainPage";
import Cpage from "./About/Cpage";
import CartPage from "./Cart/Cartpage";
import PaymentPage from "./Cart/PaymentPage";
import AdminPage from "./Admin/AdminPage";
import UserDashboard from "./User/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<MainPage />} />
        

        {/* ✅ DYNAMIC ROUTE */}
        <Route path="/detail/:id" element={<Cpage />} />
        <Route path="/cart" element={<CartPage />} />
<Route path="/payment" element={<PaymentPage />} />

<Route path="/admin" element={<AdminPage />} />
<Route path="/user" element={<UserDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;