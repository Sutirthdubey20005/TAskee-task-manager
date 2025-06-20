import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Header with Taskee logo */}
      <header className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="/taskee-logo.jpg" // Make sure this file is in your public folder
            alt="Taskee Logo"
            className="w-10 h-10 rounded-md"
          />
          <h1 className="text-2xl font-bold tracking-wide">Taskee</h1>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm sm:text-base truncate max-w-xs">
              👤 {user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="bg-white text-orange-600 px-3 py-1.5 rounded-md hover:bg-orange-100 transition text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      {/* ✅ Main App Content */}
      <main className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
        {user && (
          <>
            <AddTask userId={user.uid} />
            <TaskList userId={user.uid} />
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
