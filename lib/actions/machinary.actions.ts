"use server";

import prisma from "@/prisma/db";
import { Machinery } from "@/types";
import { revalidatePath } from "next/cache";

export const getAllMachinary = async () => {
  try {
    const getMachine = await prisma.machinery.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    return getMachine;
  } catch (error) {
    console.log(error);
  }
};

export const createMachinary = async (machinary: Machinery) => {
  try {
    await prisma.machinery.create({
      data: {
        Type: machinary.Type,
        MaintenanceStatus: machinary.MaintenanceStatus,
        LastMaintenanceDate: machinary.LastMaintenanceDate?.toISOString(),
        PredictiveMaintenanceRequired: machinary.PredictiveMaintenanceRequired,
      },
    });
    revalidatePath(machinary.path!);
  } catch (error) {
    console.error(error);
  }
};

export const getMachinaryById = async (id: string) => {
  try {
    const getMachine = await prisma.machinery.findUnique({
      where: { MachineID: id },
      select: {
        MachineID: true,
        Type: true,
        MaintenanceStatus: true,
        LastMaintenanceDate: true,
        PredictiveMaintenanceRequired: true,
      },
    });
    return getMachine;
  } catch (error) {
    console.log(error);
  }
};

export const updateMachinary = async (machinary: Machinery) => {
  try {
    await prisma.machinery.update({
      where: { MachineID: machinary.MachineID },
      data: {
        Type: machinary.Type,
        MaintenanceStatus: machinary.MaintenanceStatus,
        LastMaintenanceDate: machinary.LastMaintenanceDate,
        PredictiveMaintenanceRequired: machinary.PredictiveMaintenanceRequired,
      },
    });
    revalidatePath(machinary.path!);
  } catch (error) {
    console.error(error);
  }
};

export const deleteMachinary = async ({
  id,
  path,
}: {
  id: string;
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
