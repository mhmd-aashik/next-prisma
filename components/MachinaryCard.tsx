import React from "react";

interface MachinaryCardProps {
  id: number;
  type: string;
  status: string;
  maintenance: Date | null;
  predictive: boolean;
}

const MachinaryCard = ({
  id,
  type,
  status,
  maintenance,
  predictive,
}: MachinaryCardProps) => {
  const formattedDate = new Date(maintenance!).toLocaleDateString();

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-gray-100 to-gray-50 p-6 border border-gray-300">
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Machine Type: {type}
        </h2>
        <p className="text-lg text-gray-600">Machine ID: {id}</p>
      </div>

      {/* Maintenance Status */}
      <div className="mb-4">
        <p
          className={`text-sm font-bold ${
            status === "Needs Maintenance" ? "text-red-500" : "text-green-500"
          }`}
        >
          <strong>Maintenance Status:</strong> {status}
        </p>
      </div>

      {/* Last Maintenance Date */}
      <div className="mb-4 bg-white p-4 rounded-md shadow-inner">
        <p className="text-sm text-gray-600">
          <strong>Last Maintenance Date:</strong> {formattedDate}
        </p>
      </div>

      {/* Predictive Maintenance */}
      <div>
        <p
          className={`text-sm font-bold ${
            predictive ? "text-yellow-500" : "text-gray-500"
          }`}
        >
          {predictive
            ? "Predictive Maintenance Required"
            : "No Predictive Maintenance Required"}
        </p>
      </div>
    </div>
  );
};

export default MachinaryCard;
