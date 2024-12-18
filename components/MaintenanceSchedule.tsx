import React from "react";

interface MaintenanceScheduleCardProps {
  id: number;
  machineId: string;
  scheduledDate: Date;
  maintenanceType: string;
  status: string;
}

const MaintenanceScheduleCard = ({
  id,
  machineId,
  scheduledDate,
  maintenanceType,
  status,
}: MaintenanceScheduleCardProps) => {
  const formattedDate = new Date(scheduledDate).toLocaleString();

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-red-100 to-red-50 p-6 border border-red-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-red-900 mb-2">
          Maintenance Details
        </h2>
        <p className="text-sm text-gray-500">ID: {id}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-700">
          <strong>Machine ID:</strong> {machineId}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Maintenance Type:</strong> {maintenanceType}
        </p>
      </div>

      <div className="mb-4 bg-white p-4 rounded-md shadow-inner">
        <p className="text-sm text-gray-600">
          <strong>Scheduled Date:</strong>
          <span className="ml-2 text-red-800">{formattedDate}</span>
        </p>
      </div>

      <div>
        <p
          className={`text-sm font-bold ${
            status === "Completed"
              ? "text-green-500"
              : status === "Cancelled"
              ? "text-red-500"
              : "text-yellow-500"
          }`}
        >
          {status}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MaintenanceScheduleCard;
