import React, { useState } from "react";

type TaskDetails = {
  name: string | null;
  id: number | null;
};
type UpdateTask = {
  taskDetails: TaskDetails;
  setTaskDetails: React.Dispatch<React.SetStateAction<TaskDetails>>;
};

export const InpRoleContext = React.createContext<UpdateTask>({
  taskDetails: {
    name: null,
    id: null,
  },
  setTaskDetails: () => {},
});
const InpRule = ({ children }: { children: React.ReactNode }) => {
  const [taskDetails, setTaskDetails] = useState<TaskDetails>({
    name: null,
    id: null,
  });
  return (
    <InpRoleContext.Provider value={{ taskDetails, setTaskDetails }}>
      {children}
    </InpRoleContext.Provider>
  );
};

export default InpRule;
