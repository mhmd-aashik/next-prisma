"use server";

import prisma from "@/prisma/db";

export const getAllTasks = async () => {
  try {
    const getTasks = await prisma.tasks.findMany({});
    return getTasks;
  } catch (error) {
    console.log(error);
  }
};
