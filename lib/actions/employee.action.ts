"use server";

import prisma from "@/prisma/db";

export const getAllEmployee = async () => {
  const getEmployee = await prisma.employees.findMany({
    select: {
      EmployeeID: true,
      Name: true,
      Position: true,
      SkillSet: true,
      AvailabilityStatus: true,
    },
  });
  return getEmployee;
};
