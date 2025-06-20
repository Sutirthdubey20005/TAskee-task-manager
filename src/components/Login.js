import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle login/register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (err) {
      console.error(err.message);
      setError("Authentication failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-white px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-4">
          {isLogin ? "Welcome Back" : "Create Account"}
          <img
  src="/taskee-logo.jpg"
  alt="Taskee Logo"
  className="w-16 h-16 mx-auto mb-4 rounded-lg"
/>

        </h1>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-yellow-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            {isLogin ? "🔐 Login" : "📝 Register"}
          </button>
        </form>

        <div className="text-sm text-center mt-4 text-gray-600">
          {isLogin ? (
            <>
              New to Taskee?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-orange-500 font-medium hover:underline"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-orange-500 font-medium hover:underline"
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
