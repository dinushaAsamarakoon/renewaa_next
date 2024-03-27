import Link from "next/link";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100">
      <div className="space-y-4 space-x-2">
        <Link href="/admin/addproject">
          <button className="px-8 py-5 text-5xl text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none">
            Add Project
          </button>
        </Link>
        <Link href="/admin/addadmin">
          <button className="px-8 py-5 text-5xl text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none">
            Add Admin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
