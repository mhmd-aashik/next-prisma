-- CreateTable
CREATE TABLE "Employees" (
    "EmployeeID" SERIAL NOT NULL,
    "Name" TEXT,
    "Position" TEXT NOT NULL,
    "SkillSet" TEXT,
    "AvailabilityStatus" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("EmployeeID")
);

-- CreateTable
CREATE TABLE "Machinery" (
    "MachineID" SERIAL NOT NULL,
    "Type" TEXT NOT NULL,
    "MaintenanceStatus" VARCHAR(20) NOT NULL,
    "LastMaintenanceDate" TIMESTAMP(3),
    "PredictiveMaintenanceRequired" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Machinery_pkey" PRIMARY KEY ("MachineID")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "TaskID" SERIAL NOT NULL,
    "TaskDescription" TEXT,
    "AssignedEmployeeID" INTEGER,
    "SkillRequired" TEXT,
    "Status" VARCHAR(20) NOT NULL,
    "ScheduledDate" TIMESTAMP(3),
    "DueDate" TIMESTAMP(3),

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("TaskID")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "ScheduleID" SERIAL NOT NULL,
    "EmployeeID" INTEGER NOT NULL,
    "TaskID" INTEGER NOT NULL,
    "ScheduledStartTime" TIMESTAMP(3) NOT NULL,
    "ScheduledEndTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("ScheduleID")
);

-- CreateTable
CREATE TABLE "MaintenanceSchedule" (
    "MaintenanceID" SERIAL NOT NULL,
    "MachineID" INTEGER NOT NULL,
    "ScheduledDate" TIMESTAMP(3) NOT NULL,
    "MaintenanceType" VARCHAR(20) NOT NULL,
    "Status" VARCHAR(20) NOT NULL,

    CONSTRAINT "MaintenanceSchedule_pkey" PRIMARY KEY ("MaintenanceID")
);

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_AssignedEmployeeID_fkey" FOREIGN KEY ("AssignedEmployeeID") REFERENCES "Employees"("EmployeeID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_EmployeeID_fkey" FOREIGN KEY ("EmployeeID") REFERENCES "Employees"("EmployeeID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_TaskID_fkey" FOREIGN KEY ("TaskID") REFERENCES "Tasks"("TaskID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceSchedule" ADD CONSTRAINT "MaintenanceSchedule_MachineID_fkey" FOREIGN KEY ("MachineID") REFERENCES "Machinery"("MachineID") ON DELETE RESTRICT ON UPDATE CASCADE;
