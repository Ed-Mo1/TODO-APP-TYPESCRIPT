import { useContext, useEffect, useState } from "react";
import { Task, TasksContext } from "../context/Tasks";

const sect: string[] = ["all", "active", "completed"];
type ActiveSect = "all" | "active" | "completed";
const TasksController = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  const { tasks, clearCompleted } = useContext(TasksContext);
  const [activeSect, setActiveSect] = useState<ActiveSect>("all");

  useEffect(() => {
    if (activeSect === "all") {
      setTasks(tasks);
    } else if (activeSect === "active") {
      setTasks(tasks.filter((task) => !task.isCompleted));
    } else if (activeSect === "completed") {
      setTasks(tasks.filter((task) => task.isCompleted));
    }
  }, [activeSect, tasks]);
  return (
    <>
      <div className="py-8 px-6 duration-700 rounded-b dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray flex justify-between items-center">
        <h5 className="text-light-theme-dark-grayish-blue">
          {tasks.filter((task) => !task.isCompleted).length} items left
        </h5>
        <div className="flex gap-4 max-sm:hidden">
          {sect.map((sect) => (
            <button
              key={sect}
              onClick={() => setActiveSect(sect as ActiveSect)}
              className={`capitalize dark:hover:text-dark-theme-dark-grayish-blue hover:text-light-theme-very-dark-grayish-blue ${
                activeSect === sect
                  ? "text-bright-blue"
                  : "text-light-theme-dark-grayish-blue"
              }`}
            >
              {sect}
            </button>
          ))}
        </div>
        <button
          onClick={clearCompleted}
          className="text-light-theme-dark-grayish-blue hover:text-light-theme-very-dark-grayish-blue"
        >
          Clear Completed
        </button>
      </div>

      <div className="flex mt-5 rounded sm:hidden py-8 px-12 justify-between items-center dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray">
        {sect.map((sect) => (
          <button
            key={sect}
            onClick={() => setActiveSect(sect as ActiveSect)}
            className={`capitalize dark:hover:text-dark-theme-dark-grayish-blue hover:text-light-theme-very-dark-grayish-blue ${
              activeSect === sect
                ? "text-bright-blue"
                : "text-light-theme-dark-grayish-blue"
            }`}
          >
            {sect}
          </button>
        ))}
      </div>
    </>
  );
};

export default TasksController;
