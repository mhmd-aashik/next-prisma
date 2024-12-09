import TasksCard from "@/components/TasksCard";
import { getAllTasks } from "@/lib/actions/task.actions";
import React from "react";

const Page = async () => {
  const results = await getAllTasks();
  console.log(results, "results");

  return (
    <div>
      <div className="px-2 py-5">
        <h1 className="text-3xl font-bold">All Tasks</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {results?.map((task) => (
          <TasksCard
            key={task.TaskID}
            id={task.TaskID}
            description={task.TaskDescription!}
            employeeId={task.AssignedEmployeeID!}
            skill={task.SkillRequired!}
            status={task.Status}
            sDate={task.ScheduledDate!}
            dDate={task.DueDate!}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
