import React from "react";

interface TaskScheduleCardProps {
  id: number;
  eId: number;
  tId: number;
  sTime: Date;
  eTime: Date;
}

const TaskScheduleCard = ({
  id,
  eId,
  tId,
  sTime,
  eTime,
}: TaskScheduleCardProps) => {
  // Format dates for readability
  const formattedStartTime = new Date(sTime).toLocaleString();
  const formattedEndTime = new Date(eTime).toLocaleString();

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 to-blue-50 p-6 border border-blue-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          Schedule Details
        </h2>
        <p className="text-sm text-gray-500">Unique ID: {id}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-700">
          <strong>Employee ID:</strong> {eId}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Task ID:</strong> {tId}
        </p>
      </div>

      <div className="mb-4 bg-white p-4 rounded-md shadow-inner">
        <p className="text-sm text-gray-600 mb-2">
          <strong>Scheduled Start:</strong>
          <span className="ml-2 text-blue-800">{formattedStartTime}</span>
        </p>
        <p className="text-sm text-gray-600">
          <strong>Scheduled End:</strong>
          <span className="ml-2 text-blue-800">{formattedEndTime}</span>
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

export default TaskScheduleCard;
