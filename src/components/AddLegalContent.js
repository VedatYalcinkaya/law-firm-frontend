import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLegalContent } from "../store/slices/addLegalContentSlice"; // Redux slice oluşturmalısınız
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddLegalContent = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.addLegalContent); // Redux store'dan slice çekiyoruz

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    dispatch(postLegalContent(formData)); // Redux slice üzerinden POST işlemi
  };

  return (
    <div>
      <div className="max-w-lg mx-auto p-6 mt-32 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Hukuki İçerik Ekle</h2>
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
            <label className="block text-gray-700">Alt Başlık</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
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
            <label className="block text-gray-700">Resim URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
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
            Hukuki İçerik Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLegalContent;
