import Image from "next/image";
import React from "react";

interface EmployeesCardProps {
  id: number;
  name: string;
  position: string;
  skills: string;
  available: boolean;
}

const EmployeesCard = ({
  name,
  position,
  skills,
  available,
}: EmployeesCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 to-blue-50 p-6 border border-blue-300">
      {/* Avatar and Name */}
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/3090/3090108.png"
          alt="Avatar"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-900">{name}</h2>
          <p className="text-lg text-gray-700">{position}</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          <strong>Skills:</strong> {skills}
        </p>
      </div>

      {/* Availability Status */}
      <div>
        <p
          className={`text-sm font-bold ${
            available ? "text-green-500" : "text-red-500"
          }`}
        >
          {available ? "Available" : "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default EmployeesCard;
