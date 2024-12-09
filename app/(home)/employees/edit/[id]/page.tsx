import EditEmployeeCard from "@/components/EditEmployeeCard";
import { getEmployeeById } from "@/lib/actions/employee.action";
import React from "react";

const EditEmployee = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const signledata = await getEmployeeById(Number(id));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { EmployeeID, Name, Position, SkillSet, AvailabilityStatus } =
    signledata;
  console.log(EmployeeID, Name, Position, SkillSet, AvailabilityStatus);

  console.log(EmployeeID);

  return (
    <div className="flex flex-col items-center justify-start mt-20 w-full h-screen">
      <div>
        <h1 className="text-3xl font-bold text-center">Create Employee</h1>
      </div>
      <EditEmployeeCard
        id={EmployeeID}
        name={Name}
        position={Position}
        skill={SkillSet!}
        status={AvailabilityStatus}
      />
    </div>
  );
};

export default EditEmployee;
