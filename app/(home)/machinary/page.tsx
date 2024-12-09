import MachinaryCard from "@/components/MachinaryCard";
import { getAllMachinary } from "@/lib/actions/machinary.actions";
import React from "react";

const Page = async () => {
  const results = await getAllMachinary();

  console.log(results, "results");

  return (
    <div>
      <div className="px-2 py-5">
        <h1 className="text-3xl font-bold">All Employees</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {results?.map((machine) => (
          <MachinaryCard
            key={machine.MachineID}
            id={machine.MachineID}
            type={machine.Type}
            status={machine.MaintenanceStatus}
            maintenance={machine.LastMaintenanceDate}
            predictive={machine.PredictiveMaintenanceRequired}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
