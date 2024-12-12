import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getLegalContentById } from "../store/slices/getLegalContentByIdSlice"; // Redux slice
import { updateLegalContent } from "../store/slices/updateLegalContentSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const EditLegalContent = () => {
  const { id } = useParams(); // URL'deki id parametresini al
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { legalContent, loading, error } = useSelector((state) => state.legalContentDetails);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    subtitle: "",
    content: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getLegalContentById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (legalContent) {
      setFormData({
        id: legalContent.id,
        title: legalContent.title,
        subtitle: legalContent.subtitle || "",
        content: legalContent.content || "",
        imageUrl: legalContent.imageUrl || "",
      });
    }
  }, [legalContent]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateLegalContent(formData)).unwrap();
      toast.success("İçerik başarıyla güncellendi!");
      navigate(`/legal-content/${id}`);
    } catch (err) {
      toast.error("İçerik güncellenirken bir hata oluştu.");
    }
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p className="text-red-500">Hata: {error}</p>;

  return (
    <div className="max-w-lg mx-auto p-6 mt-32 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Hukuki İçerik Düzenle</h2>
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

export default EditLegalContent;
