import ScheduleCard from "@/components/ScheduleCard";
import { getAllSchedules } from "@/lib/actions/schedule.actions";
import React from "react";

const Page = async () => {
  const results = await getAllSchedules();
  console.log(results, "resultsqw");

  return (
    <div>
      <div className="px-2 py-5">
        <h1 className="text-3xl font-bold">All Schedule</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {results?.map((schedule) => (
          <ScheduleCard
            key={schedule.ScheduleID}
            id={schedule.ScheduleID}
            eId={schedule.EmployeeID}
            tId={schedule.TaskID}
            sTime={schedule.ScheduledStartTime}
            eTime={schedule.ScheduledEndTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
