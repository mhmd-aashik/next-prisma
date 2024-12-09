import MaintenanceScheduleCard from "@/components/MaintenanceSchedule";
import { getAllMaintenanceSchedule } from "@/lib/actions/maintenance-schedule.action";
import React from "react";

const Page = async () => {
  const results = await getAllMaintenanceSchedule();
  console.log(results, "results");

  return (
    <div>
      <div className="px-2 py-5">
        <h1 className="text-3xl font-bold">All Maintenance Schedule</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {results?.map((mainSch) => (
          <MaintenanceScheduleCard
            key={mainSch.MaintenanceID}
            id={mainSch.MaintenanceID}
            machineId={mainSch.MachineID}
            scheduledDate={mainSch.ScheduledDate}
            maintenanceType={mainSch.MaintenanceType}
            status={mainSch.Status!}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
