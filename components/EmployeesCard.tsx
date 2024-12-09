"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { deleteUser } from "@/lib/actions/employee.action";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface EmployeesCardProps {
  id: number;
  name: string;
  position: string;
  skills: string;
  available: boolean;
}

const EmployeesCard = ({
  name,
  id,
  position,
  skills,
  available,
}: EmployeesCardProps) => {
  const pathName = usePathname();

  async function handleDeleteEmployee() {
    try {
      await deleteUser({
        id,
        path: pathName,
      });
    } catch (error) {
      console.error(error);
    }
  }
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
      <div className="mb-4">
        <p
          className={`text-sm font-bold ${
            available ? "text-green-500" : "text-red-500"
          }`}
        >
          {available ? "Available" : "Not Available"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <Link
          href={`/employees/edit/${id}`}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Edit
        </Link>
        <Button
          onClick={handleDeleteEmployee}
          className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EmployeesCard;
