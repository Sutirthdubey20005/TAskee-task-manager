import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import TaskItem from "./TaskItem";
import TaskModal from "./TaskModal";

function TaskList({ userId }) {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  const priorityWeight = { most: 1, more: 2, normal: 3, least: 4 };

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filtered = fetched.filter((task) => task.userId === userId);
      filtered.sort(
        (a, b) => (priorityWeight[a.priority] || 5) - (priorityWeight[b.priority] || 5)
      );
      setTasks(filtered);
    });
    return () => unsubscribe();
  }, [userId]);

  const handleToggle = async (task) => {
    const ref = doc(db, "tasks", task.id);
    await updateDoc(ref, { completed: !task.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  return (
    <>
      <div className="space-y-4 mt-6">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            openModal={setActiveTask}
          />
        ))}
      </div>
      <TaskModal task={activeTask} onClose={() => setActiveTask(null)} />
    </>
  );
}

export default TaskList;
