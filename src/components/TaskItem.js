function TaskItem({ task }) {
  const priorityColors = {
    most: "bg-red-600",
    more: "bg-orange-500",
    normal: "bg-blue-500",
    least: "bg-gray-500",
  };

  const badge = (
    <span
      className={`text-white px-2 py-1 text-xs rounded-full ${
        priorityColors[task.priority] || "bg-gray-400"
      }`}
    >
      {task.priority?.toUpperCase() || "NORMAL"}
    </span>
  );

  return (
    <div className="bg-white shadow p-4 rounded border-l-4 border-blue-400 hover:shadow-md transition cursor-pointer">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-800">{task.title}</h2>
        {badge}
      </div>
      {task.dueDate && (
        <p className="text-sm text-gray-600 mt-1">📅 Due: {task.dueDate}</p>
      )}
    </div>
  );
}

export default TaskItem;
