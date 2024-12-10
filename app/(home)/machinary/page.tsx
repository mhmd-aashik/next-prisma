import MachinaryCard from "@/components/MachinaryCard";
import { getAllMachinary } from "@/lib/actions/machinary.actions";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const results = await getAllMachinary();

  return (
    <div>
      <div className="px-2 py-5 flex justify-between max-w-7xl items-center">
        <h1 className="text-3xl font-bold">All Machinary</h1>
        <Link
          href="/create-machine"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Create Machinary
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {results?.map((machine) => (
          <MachinaryCard
            key={machine.MachineID}
            id={machine.MachineID}
            type={machine.Type}
            status={machine.MaintenanceStatus}
            maintenance={machine.LastMaintenanceDate!}
            predictive={machine.PredictiveMaintenanceRequired}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
