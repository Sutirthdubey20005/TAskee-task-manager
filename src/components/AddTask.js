import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function AddTask({ userId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("normal");
  const [loading, setLoading] = useState(false); // ✅ prevent rapid submits

  const todayStr = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || loading) return;

    if (date && date < todayStr) {
      alert("Due date cannot be in the past.");
      return;
    }

    setLoading(true); // ✅ disable button

    try {
      await addDoc(collection(db, "tasks"), {
        title,
        description,
        dueDate: date || null,
        priority,
        completed: false,
        createdAt: Timestamp.now(),
        userId: userId,
      });

      setTitle("");
      setDescription("");
      setDate("");
      setPriority("normal");
    } catch (err) {
      console.error("Error adding task:", err);
    } finally {
      setLoading(false); // ✅ re-enable button
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        rows={3}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={todayStr} // ✅ blocks past dates
          className="w-full sm:w-1/2 p-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full sm:w-1/2 p-3 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="most">🔥 Most Important</option>
          <option value="more">⭐ More Important</option>
          <option value="normal">✅ Normal</option>
          <option value="least">🕓 Least Important</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading} // ✅ disables button while adding
        className={`w-full ${
          loading ? "bg-orange-300 cursor-not-allowed" : "bg-orange-500 hover:bg-yellow-400"
        } text-white font-bold py-3 rounded-md transition-all shadow-md`}
      >
        {loading ? "Adding..." : "➕ Add Task"}
      </button>
    </form>
  );
}

export default AddTask;
