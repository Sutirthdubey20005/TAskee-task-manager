import { motion } from "framer-motion";

function TaskModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-2 text-blue-700">{task.title}</h2>
        <p className="text-sm text-gray-700 mb-2">{task.description || "No description"}</p>
        {task.dueDate && <p className="text-sm text-gray-500">📅 Due: {task.dueDate}</p>}
        <p className="mt-3 text-xs text-gray-400">Priority: {task.priority?.toUpperCase()}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}

export default TaskModal;
