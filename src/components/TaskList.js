import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import TaskItem from "./TaskItem"; // We will build this next

function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Map priorities to sorting weight
  const priorityWeight = {
    most: 1,
    more: 2,
    normal: 3,
    least: 4,
  };

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort by priority weight → then by dueDate
      fetched.sort((a, b) => {
        const pA = priorityWeight[a.priority] || 5;
        const pB = priorityWeight[b.priority] || 5;
        if (pA !== pB) return pA - pB;

        const dA = a.dueDate || "";
        const dB = b.dueDate || "";
        return dA.localeCompare(dB);
      });

      setTasks(fetched);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-2 mt-6">
      {tasks.length === 0 && <p className="text-gray-500 text-sm">No tasks yet.</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
