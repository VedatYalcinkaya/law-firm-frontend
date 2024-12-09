import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Paneli</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/admin/publish-article" className="block p-6 bg-blue-500 text-white rounded hover:bg-blue-600">
          Makale Ekle
        </Link>
        <Link to="/admin/manage-articles" className="block p-6 bg-green-500 text-white rounded hover:bg-green-600">
          Makaleleri Yönet
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
