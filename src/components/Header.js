import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header({ username }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase
      navigate("/login");   // Redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-brand.orange-600 text-white">
      <h1 className="text-xl font-bold">Taskee</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">👤 {username}</span>
        <button
          onClick={handleLogout}
          className="bg-white text-brand.orange-600 px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
