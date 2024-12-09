import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getArticleById } from "../store/slices/getArticleByIdSlice"; // Redux slice
import { updateArticle } from "../store/slices/updateArticleSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const EditArticle = () => {
  const { id } = useParams(); // URL'deki id parametresini al
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { article, loading, error } = useSelector((state) => state.articleDetails);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    author: "",
    category: "",
    isPublished: false,
    imagePath: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getArticleById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (article) {
      setFormData({
        id: article.id,
        title: article.title,
        content: article.content,
        author: article.author || "",
        category: article.category || "",
        isPublished: article.isPublished || false,
        imagePath: article.imagePath || "",
      });
    }
  }, [article]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateArticle(formData)).unwrap();
      toast.success("Makale başarıyla güncellendi!");
      navigate(`/makale/${id}`);
    } catch (err) {
      toast.error("Makale güncellenirken bir hata oluştu.");
    }
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p className="text-red-500">Hata: {error}</p>;

  return (
    <div className="max-w-lg mx-auto p-6 mt-32 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Makale Düzenle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Başlık</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">İçerik</label>
          <ReactQuill
            value={formData.content}
            onChange={handleContentChange}
            className="bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Yazar</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Kategori</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              className="mr-2"
            />
            Yayınla
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Resim Yolu</label>
          <input
            type="text"
            name="imagePath"
            value={formData.imagePath}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
