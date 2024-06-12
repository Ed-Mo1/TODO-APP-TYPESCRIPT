import { useContext } from "react";
import { type Task, TasksContext } from "../context/Tasks";
import { HiXMark } from "react-icons/hi2";
import { MdOutlineDone, MdModeEditOutline } from "react-icons/md";
import { InpRoleContext } from "../context/InpRule";
const Task = ({ name, id, isCompleted, index }: Task & { index?: number }) => {
  const { delTask, updateIsCompleted } = useContext(TasksContext);
  const { setTaskDetails } = useContext(InpRoleContext);
  return (
    <li
      className={`py-4 group ${
        index == 0 && "rounded-t"
      } px-6 border-b flex justify-between items-center bg-light-theme-very-light-gray border-b-light-theme-light-grayish-blue dark:border-b-dark-theme-very-dark-grayish-blue dark:bg-dark-theme-very-dark-desaturated-blue`}
    >
      <div className="flex overflow-hidden flex-grow gap-4 items-center">
        <button
          onClick={() => updateIsCompleted(id)}
          className={`check-btn relative ${
            isCompleted ? "border-0" : ""
          } transition-all hover:border-t-bright-blue hover:border-l-bright-blue hover:border-r-[hsl(280_87%_65%)] hover:border-b-[hsl(280_87%_65%)] ${
            isCompleted ? "bg-check-background" : "bg-[transparent]"
          }`}
        >
          {isCompleted && (
            <div className="absolute w-full h-full inset-0 text-xl text-light-theme-very-light-gray flex items-center justify-center">
              <MdOutlineDone />
            </div>
          )}
        </button>
        <h3
          className={`text-xl max-md:text-lg overflow-hidden text-ellipsis ${
            isCompleted
              ? "text-light-theme-dark-grayish-blue  line-through"
              : "text-light-theme-very-dark-grayish-blue dark:text-dark-theme-light-grayish-blue-hover"
          }`}
        >
          {name}
        </h3>
      </div>

      <button
        className="text-2xl me-2 dark:text-light-theme-very-light-gray  scale-0 group-hover:scale-100 transition-all"
        onClick={() =>
          setTaskDetails({
            name,
            id,
          })
        }
      >
        <MdModeEditOutline />
      </button>

      <button
        className="text-2xl dark:text-light-theme-very-light-gray  scale-0 group-hover:scale-100 transition-all"
        onClick={() => delTask(id)}
      >
        <HiXMark />
      </button>
    </li>
  );
};

export default Task;
