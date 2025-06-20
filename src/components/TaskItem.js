function TaskItem({ task, handleDelete, handleToggle, openModal }) {
  const priorityColor = {
    most: "bg-red-500 text-white",
    more: "bg-yellow-400 text-black",
    normal: "bg-green-400 text-black",
    least: "bg-gray-300 text-black",
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg px-4 py-3 flex items-start justify-between border-l-4 hover:shadow-lg transition-all duration-300 ${
        task.completed ? "bg-gray-100 opacity-70" : "border-orange-400"
      }`}
    >
      <div className="flex items-start gap-3 w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggle(task)}
          className="w-5 h-5 mt-1 accent-orange-500 transition-transform duration-300 transform scale-110"
        />

        <div className="w-full cursor-pointer" onClick={() => openModal(task)}>
          <h3
            className={`text-lg font-semibold transition-all duration-300 ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {task.description}
            </p>
          )}

          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span>📅 {task.dueDate || "No due date"}</span>
            <span
              className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                priorityColor[task.priority]
              }`}
            >
              {task.priority?.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleDelete(task.id)}
        className="ml-4 text-red-400 hover:text-red-600 transition-all"
        title="Delete Task"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;