/*
  Warnings:

  - A unique constraint covering the columns `[EmployeeID]` on the table `Employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[MachineID]` on the table `Machinery` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[MaintenanceID]` on the table `MaintenanceSchedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ScheduleID]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[TaskID]` on the table `Tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Employees_EmployeeID_key" ON "Employees"("EmployeeID");

-- CreateIndex
CREATE UNIQUE INDEX "Machinery_MachineID_key" ON "Machinery"("MachineID");

-- CreateIndex
CREATE UNIQUE INDEX "MaintenanceSchedule_MaintenanceID_key" ON "MaintenanceSchedule"("MaintenanceID");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_ScheduleID_key" ON "Schedule"("ScheduleID");

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_TaskID_key" ON "Tasks"("TaskID");
