import EmployeesCard from "@/components/EmployeesCard";
import { getAllEmployee } from "@/lib/actions/employee.action";
import React from "react";

const Page = async () => {
  const employeeData = await getAllEmployee();

  console.log(employeeData, "employeeData");

  return (
    <div>
      <div className="px-2 py-5">
        <h1 className="text-3xl font-bold">All Employees</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {employeeData?.map((employee) => (
          <EmployeesCard
            key={employee.EmployeeID}
            id={employee.EmployeeID}
            name={employee.Name!}
            position={employee.Position}
            skills={employee.SkillSet!}
            available={employee.AvailabilityStatus!}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
