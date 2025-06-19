import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("normal");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Task title is required");

    try {
      await addDoc(collection(db, "tasks"), {
        title,
        description,
        dueDate: date || null,
        priority,
        completed: false,
        createdAt: Timestamp.now(),
      });

      // Reset form
      setTitle("");
      setDescription("");
      setDate("");
      setPriority("normal");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="most">🔥 Most Important</option>
          <option value="more">⚠️ More Important</option>
          <option value="normal">✔️ Normal</option>
          <option value="least">🕒 Least Important</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
