import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        
        {/* Taskee Logo + Title */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/taskee-logo.jpg"
            alt="Taskee Logo"
            className="h-16 w-16 object-contain rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow">
              taskee
            </h1>
            <p className="text-xs sm:text-sm text-white tracking-wider font-medium">
              TASK MANAGER WEB APPLICATION
            </p>
          </div>
        </motion.div>

        {/* E-Cell branding */}
        <motion.div
          className="flex items-center gap-2 mt-4 sm:mt-0"
          whileHover={{ scale: 1.1 }}
        >
          <p className="text-sm text-white font-medium">powered by</p>
          <img
            src="/ecell-logo.jpg"
            alt="E-Cell Logo"
            className="h-10 w-10 object-contain rounded-full shadow"
          />
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
