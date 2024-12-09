"use server";

import prisma from "@/prisma/db";

export const getAllEmploeeCount = async () => {
  try {
    const getEmployee = await prisma.employees.findMany({
      select: {
        EmployeeID: true,
      },
    });
    return getEmployee.length;
  } catch (error) {
    console.log(error);
  }
};

export const getMachinaryCount = async () => {
  try {
    const getMachinary = await prisma.machinery.findMany({
      select: {
        MachineID: true,
      },
    });
    return getMachinary.length;
  } catch (error) {
    console.log(error);
  }
};

export const emploeeGraph = async () => {
  try {
    const getGraph = await prisma.employees.findMany({
      select: {
        createdAt: true,
      },
    });
    return getGraph;
  } catch (error) {
    console.log(error);
  }
};
