import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-4">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}


export default App;
