import { useState, createContext, useLayoutEffect } from "react";

export interface Task {
  name: string;
  isCompleted: boolean;
  id: number;
}

interface TasksContext {
  tasks: Task[];
  addTask: (name: string) => void;
  delTask: (id: number) => void;
  updateTask: (id: number, name: string) => void;
  updateIsCompleted: (id: number) => void;
  clearCompleted: () => void;
}

export const TasksContext = createContext<TasksContext>({
  tasks: [],
  addTask: () => {},
  delTask: () => {},
  updateTask: () => {},
  updateIsCompleted: () => {},
  clearCompleted: () => {},
});
const Tasks = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]") as Task[]
  );

  useLayoutEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (name: string): void => {
    setTasks((prev) => [...prev, { name, isCompleted: false, id: Date.now() }]);
  };

  const delTask = (id: number): void => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, name: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { id: Date.now(), name, isCompleted: false } : task
      )
    );
  };

  const updateIsCompleted = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  };
  return (
    <TasksContext.Provider
      value={{
        clearCompleted,
        updateIsCompleted,
        updateTask,
        tasks,
        addTask,
        delTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default Tasks;
