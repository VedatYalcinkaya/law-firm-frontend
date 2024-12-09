import React from "react";

const AdminPanel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Admin Paneli
        </h2>
        <p className="text-center text-gray-600">
          Hoş geldiniz, burası admin panelidir.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
