"use server";

import prisma from "@/prisma/db";

export const getAllMaintenanceSchedule = async () => {
  try {
    const getMaintenanceSchedule = await prisma.maintenanceSchedule.findMany(
      {}
    );
    return getMaintenanceSchedule;
  } catch (error) {
    console.log(error);
  }
};
