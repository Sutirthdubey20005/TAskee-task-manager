import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 2500); // go to login after 2.5s
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-300 via-yellow-200 to-white">
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <img
          src="/taskee-logo.jpg"
          alt="Taskee Logo"
          className="h-24 w-24 object-contain rounded-full shadow-md"
        />
        <h1 className="text-4xl font-bold mt-4 text-orange-700 tracking-wider drop-shadow">
          TAskee
        </h1>
        <p className="text-sm text-gray-600 mt-2">Powered by E-Cell</p>
      </motion.div>
    </div>
  );
}

export default Splash;
