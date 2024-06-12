import AddTask from "./components/AddTask";
import Header from "./components/Header";
import {useState } from "react";
import Task from "./components/Task";
import BgImg from "./components/BgImg";
import TasksController from "./components/TasksController";
import type { Task as TaskType } from "./context/Tasks";
const App = (): React.JSX.Element => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  return (
    <div className="relative">
      <BgImg/>
      <div className="mx-auto w-[95%] max-w-[600px] pt-20">
        <div>
          <Header />
        </div>
        <div className="mt-12 ">
          <AddTask />
        </div>
        <div className="mt-8 shadow-lg">
          <ul>
            {tasks.map((task, i) => (
              <Task key={task.id} index={i} {...task} />
            ))}
          </ul>
          <TasksController setTasks={setTasks} />
        </div>
        <h2 className="text-center mt-8 pb-3 text-light-theme-dark-grayish-blue">
          Drag and drop to reorder list
        </h2>
      </div>
    </div>
  );
};

export default App;
