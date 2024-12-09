import EmployeesCard from "@/components/EmployeesCard";
import { getAllEmployee } from "@/lib/actions/employee.action";
import Link from "next/link";
import React from "react";

export const revalidate = 0;
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

const Page = async () => {
  const employeeData = await getAllEmployee();

  return (
    <div>
      <div className="px-2 py-5 flex justify-between max-w-7xl items-center">
        <h1 className="text-3xl font-bold">All Employees</h1>
        <Link
          href="/create-employee"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Create Employee
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {employeeData?.map((employee) => (
          <EmployeesCard
            key={employee.EmployeeID}
            id={Number(employee.EmployeeID)}
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
