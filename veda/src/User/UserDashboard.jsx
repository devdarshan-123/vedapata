function UserDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-[#faf7f2] p-10 font-[Vidaloka]">

      <h1 className="text-2xl text-[#4E2D00] mb-6">
        User Dashboard
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md">

        <h2 className="mb-3">User Info</h2>

        <p>Email: {user?.email}</p>

      </div>

    </div>
  );
}

export default UserDashboard;