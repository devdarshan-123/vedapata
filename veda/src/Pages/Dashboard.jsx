

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ padding: "50px" }}>

      <h1>Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;