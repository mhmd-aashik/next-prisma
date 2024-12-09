export interface Employee {
  EmployeeID?: number;
  Name: string;
  Position: string;
  SkillSet?: string;
  AvailabilityStatus: boolean;
  Tasks?: Task[];
  Schedule?: Schedule[];
  path?: string;
}

export interface Machinery {
  MachineID: number;
  Type: string;
  MaintenanceStatus: string;
  LastMaintenanceDate?: Date;
  PredictiveMaintenanceRequired: boolean;
  MaintenanceSchedule?: MaintenanceSchedule[];
}

export interface Task {
  TaskID: number;
  TaskDescription?: string;
  AssignedEmployee?: Employee;
  AssignedEmployeeID?: number;
  SkillRequired?: string;
  Status: string;
  ScheduledDate?: Date;
  DueDate?: Date;
  Schedule?: Schedule[];
}

interface Schedule {
  ScheduleID: number;
  Employee: Employee;
  EmployeeID: number;
  Task: Task;
  TaskID: number;
  ScheduledStartTime: Date;
  ScheduledEndTime: Date;
}

export interface MaintenanceSchedule {
  MaintenanceID: number;
  Machine: Machinery;
  MachineID: number;
  ScheduledDate: Date;
  MaintenanceType: string;
  Status: string;
}
