-- AlterTable
ALTER TABLE "Employees" ALTER COLUMN "Name" SET DATA TYPE TEXT,
ALTER COLUMN "Position" SET DATA TYPE TEXT,
ALTER COLUMN "SkillSet" SET DATA TYPE TEXT,
ALTER COLUMN "AvailabilityStatus" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Machinery" ALTER COLUMN "Type" SET DATA TYPE TEXT,
ALTER COLUMN "MaintenanceStatus" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "MaintenanceSchedule" ALTER COLUMN "MaintenanceType" SET DATA TYPE TEXT,
ALTER COLUMN "Status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "SkillRequired" SET DATA TYPE TEXT,
ALTER COLUMN "Status" SET DATA TYPE TEXT;