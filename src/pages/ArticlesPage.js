import React from "react";
import { useSelector } from "react-redux";
import ArticleList from "../components/ArticleList";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  return (
    <div className="container mx-auto py-8">
      {/* Admin girişi varsa butonları göster */}
      {isSignedIn && (
        <div className="mb-4 text-right">
          <Link to="/admin/publish-article">
            <button className="bg-third text-white px-4 py-2 rounded hover:bg-secondary mr-2">
              Makale Ekle
            </button>
          </Link>
          <Link to="/admin/calisma-alani-ekle">
            <button className="bg-third text-white px-4 py-2 rounded hover:bg-secondary">
              Çalışma Alanı Ekle
            </button>
          </Link>
        </div>
      )}
      <ArticleList />
    </div>
  );
};

export default ArticlesPage;
