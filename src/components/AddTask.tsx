import React, { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/Tasks";
import { InpRoleContext } from "../context/InpRule";

const AddTask: React.FC = () => {
  const { addTask, updateTask } = useContext(TasksContext);
  const { taskDetails } = useContext(InpRoleContext);
  const [taskName, setTaskName] = useState<string>("");
  const [role, setRole] = useState<"add" | "edit">("add");

  useEffect(() => {
    if (taskDetails.id) {
      setTaskName(taskDetails.name as string);
      setRole("edit");
    }
  }, [taskDetails.id as number]);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();
    if (role === "add") {
      if (trimmedTaskName) {
        addTask(trimmedTaskName);
        setTaskName("");
      }
    } else {
      if (trimmedTaskName && taskDetails.id) {
        updateTask(taskDetails.id, trimmedTaskName);
        setRole("add");
        setTaskName("");
      }
    }
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="shadow-lg flex items-center gap-4 rounded px-6 bg-light-theme-very-light-gray dark:text-light-theme-very-light-gray dark:bg-dark-theme-very-dark-desaturated-blue "
    >
      <button className="check-btn"/>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Create a new todo..."
        className="w-full text-xl max-md:text-lg border-none bg-[transparent] outline-none py-4 "
        name="task_name"
      />
    </form>
  );
};

export default AddTask;
