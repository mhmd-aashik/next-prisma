/*
  Warnings:

  - You are about to alter the column `Name` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `Position` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `SkillSet` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `Type` on the `Machinery` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `SkillRequired` on the `Tasks` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Made the column `Name` on table `Employees` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "MaintenanceSchedule" DROP CONSTRAINT "MaintenanceSchedule_MachineID_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_EmployeeID_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_TaskID_fkey";

-- AlterTable
ALTER TABLE "Employees" ALTER COLUMN "Name" SET NOT NULL,
ALTER COLUMN "Name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "Position" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "SkillSet" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "AvailabilityStatus" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Machinery" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Type" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "MaintenanceSchedule" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "SkillRequired" SET DATA TYPE VARCHAR(100);

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_MachineID_fkey" FOREIGN KEY ("MachineID") REFERENCES "Machinery"("MachineID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_EmployeeID_fkey" FOREIGN KEY ("EmployeeID") REFERENCES "Employees"("EmployeeID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_TaskID_fkey" FOREIGN KEY ("TaskID") REFERENCES "Tasks"("TaskID") ON DELETE CASCADE ON UPDATE CASCADE;
