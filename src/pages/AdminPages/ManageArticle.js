import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../store/slices/getAllArticlesSlice";
import { deleteArticle } from "../../store/slices/deleteArticleSlice";
import { Link } from "react-router-dom";

const ManageArticles = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector(
    (state) => state.getAllArticles
  );

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  const handleDelete = (articleId) => {
    if (window.confirm("Bu makaleyi silmek istediğinize emin misiniz?")) {
      dispatch(deleteArticle(articleId));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-fifth">Makaleleri Yönet</h1>
      {loading && <p className="text-fifth">Yükleniyor...</p>}
      {error && <p className="text-red-500 text-fifth">Hata: {error}</p>}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-fifth">Başlık</th>
            <th className="border border-gray-300 p-2 text-fifth">Yazar</th>
            <th className="border border-gray-300 p-2 text-fifth">Kategori</th>
            <th className="border border-gray-300 p-2 text-fifth">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <td className="border border-gray-300 p-2 text-fifth">{article.title}</td>
              <td className="border border-gray-300 p-2 text-fifth">{article.author}</td>
              <td className="border border-gray-300 p-2 text-fifth">{article.category}</td>
              <td className="border border-gray-300 p-2 text-fifth">
                <Link
                  to={`/admin/edit-article/${article.id}`}
                  className="mr-2 p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Düzenle
                </Link>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageArticles;
