// import { ChartEmp } from "@/components/ChartEmp";
import { ChartEmp } from "@/components/ChartEmp";
import EmployeeCount from "@/components/EmployeeCount";
import {
  emploeeGraph,
  getAllEmploeeCount,
  getMachinaryCount,
  totalAllTask,
} from "@/lib/actions/counts.actions";

export default async function Page() {
  const emploeeCount = await getAllEmploeeCount();
  const machineCount = await getMachinaryCount();
  const taskCount = await totalAllTask();

  const empGraph = await emploeeGraph();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <EmployeeCount
          name="Employees"
          title="Total Employees"
          countData={emploeeCount!}
        />
        <EmployeeCount
          name="Machinaries"
          title="Total Machinaries"
          countData={machineCount!}
        />
        <EmployeeCount
          name="Tasks"
          title="Total Tasks"
          countData={taskCount!}
        />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <ChartEmp empGraph={empGraph!} />
      </div>
    </div>
  );
}
