import EditEmployeeCard from "@/components/EditEmployeeCard";
import { getEmployeeById } from "@/lib/actions/employee.action";
import React from "react";

const EditEmployee = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const signledata = await getEmployeeById(Number(id));

  console.log(signledata, "signledata");

  return (
    <div className="flex flex-col items-center justify-start mt-20 w-full h-screen">
      <div>
        <h1 className="text-3xl font-bold text-center">Create Employee</h1>
      </div>
      <EditEmployeeCard
        id={signledata?.EmployeeID as number}
        name={signledata?.Name as string}
        position={signledata?.Position as string}
        skill={signledata?.SkillSet as string}
        status={signledata?.AvailabilityStatus as boolean}
      />
    </div>
  );
};

export default EditEmployee;
