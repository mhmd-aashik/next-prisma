"use server";
import prisma from "@/prisma/db";

export const getAllSchedules = async () => {
  try {
    const getSchedules = await prisma.schedule.findMany({});
    return getSchedules;
  } catch (error) {
    console.log(error);
  }
};
