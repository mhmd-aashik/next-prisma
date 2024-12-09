import React from "react";

interface TaskCardProps {
  id: number;
  description: string;
  skill: string;
  status: string;
  employeeId: number;
  sDate: Date;
  dDate: Date;
}

const TasksCard = ({
  id,
  description,
  skill,
  sDate,
  employeeId,
  status,
  dDate,
}: TaskCardProps) => {
  const formattedScheduledDate = new Date(sDate).toLocaleString();
  const formattedDueDate = new Date(dDate).toLocaleString();

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-green-100 to-green-50 p-6 border border-green-300">
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-green-900">Task ID: {id}</h2>
        <p className="text-lg text-gray-700 mb-2">{description}</p>
      </div>

      {/* Skill Required */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          <strong>Skills Required:</strong> {skill.replace(";", ", ")}
        </p>
      </div>

      {/* Status Section */}
      <div className="mb-4">
        <p
          className={`text-sm font-bold ${
            status === "In Progress"
              ? "text-yellow-500"
              : status === "Completed"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          <strong>Status:</strong> {status}
        </p>
      </div>

      {/* Assigned Employee */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          <strong>Assigned Employee ID:</strong> {employeeId}
        </p>
      </div>

      {/* Scheduled and Due Dates */}
      <div className="bg-white p-4 rounded-md shadow-inner">
        <p className="text-sm text-gray-600">
          <strong>Scheduled Date:</strong> {formattedScheduledDate}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Due Date:</strong> {formattedDueDate}
        </p>
      </div>
    </div>
  );
};

export default TasksCard;
