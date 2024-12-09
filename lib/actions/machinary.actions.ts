"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

export const getAllMachinary = async () => {
  try {
    const getMachine = await prisma.machinery.findMany({});
    return getMachine;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMachinary = async ({
  id,
  path,
}: {
  id: number;
  path: string;
}) => {
  try {
    await prisma.machinery.delete({
      where: { MachineID: id },
    });

    revalidatePath(path);
  } catch (error) {
    console.error(error);
  }
};
