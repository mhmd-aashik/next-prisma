"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { deleteMachinary } from "@/lib/actions/machinary.actions";
import Link from "next/link";

interface MachinaryCardProps {
  id: string;
  type: string;
  status?: string;
  maintenance: Date;
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

  const pathname = usePathname();

  async function deleteMachine() {
    try {
      await deleteMachinary({
        id,
        path: pathname,
      });

      console.log("Machine Deleted");
    } catch (error) {
      console.error(error);
    }
  }

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

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <Link
          href={`/machinary/edit/${id}`}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Edit
        </Link>
        <Button
          onClick={deleteMachine}
          className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default MachinaryCard;
