"use server";

import prisma from "@/prisma/db";

export const getAllMachinary = async () => {
  try {
    const getMachine = await prisma.machinery.findMany({});
    return getMachine;
  } catch (error) {
    console.log(error);
  }
};
