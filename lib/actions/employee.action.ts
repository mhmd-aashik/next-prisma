"use server";

import prisma from "@/prisma/db";

export const getAllEmployee = async () => {
  try {
    const getEmployee = await prisma.employees.findMany({});
    return getEmployee;
  } catch (error) {
    console.log(error);
  }
};
