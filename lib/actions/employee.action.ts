"use server";

import prisma from "@/prisma/db";
import { Employee } from "@/types";
import { revalidatePath } from "next/cache";

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

export const getEmployeeById = async (id: number) => {
  try {
    const getEmployee = await prisma.employees.findUnique({
      where: {
        EmployeeID: Number(id),
      },
      select: {
        EmployeeID: true,
        Name: true,
        Position: true,
        SkillSet: true,
        AvailabilityStatus: true,
      },
    });

    return getEmployee;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (emploee: Employee) => {
  try {
    await prisma.employees.create({
      data: {
        Name: emploee.Name,
        Position: emploee.Position,
        SkillSet: emploee.SkillSet,
        AvailabilityStatus: emploee.AvailabilityStatus,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (employee: Employee) => {
  try {
    await prisma.employees.update({
      where: { EmployeeID: employee.EmployeeID },
      data: {
        Name: employee.Name,
        Position: employee.Position,
        SkillSet: employee.SkillSet,
        AvailabilityStatus: employee.AvailabilityStatus,
      },
    });
    revalidatePath(employee.path!);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async ({
  id,
  path,
}: {
  id: number;
  path: string;
}) => {
  try {
    await prisma.employees.delete({
      where: { EmployeeID: id },
    });

    revalidatePath(path);
  } catch (error) {
    console.error(error);
  }
};
