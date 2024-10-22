import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postArticle } from "../store/slices/addArticleSlice";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddArticle = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.addArticle);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    isPublished: false,
    imagePath: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postArticle(formData));
  };

  return (
    <div>
      <div className="max-w-lg mx-auto p-6 mt-32 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Makale Ekle</h2>
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
              required
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
          {loading && <p className="text-blue-500">Yükleniyor...</p>}
          {error && <p className="text-red-500">Hata: {error}</p>}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Makale Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
