import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getLegalContentById } from "../store/slices/getLegalContentByIdSlice";
import { deleteLegalContent } from "../store/slices/deleteLegalContentSlice"; // Silme slice'ı
import { toast } from "react-toastify";

const LegalContentDetails = () => {
  const { id } = useParams(); // URL'deki ID'yi al
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { legalContent, loading, error } = useSelector(
    (state) => state.legalContentDetails
  );
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  useEffect(() => {
    // LegalContent'ı API'den çek
    dispatch(getLegalContentById(id));
  }, [dispatch, id]);

  const handleEdit = (id) => {
    navigate(`/admin/calisma-alani-duzenle/${id}`); // EditLegalContentPage'e yönlendir
  };

  // const handleDelete= async (id) => {
  //   try {
  //     await dispatch(deleteLegalContent(id)).unwrap();
  //     toast.success("Çalışma alanı başarıyla silindi!");
  //     navigate("/calisma-alanlari"); // Silindikten sonra listeye yönlendir
  //   } catch (err) {
  //     toast.error("Silme işlemi sırasında bir hata oluştu.");
  //   }
  // };

  const handleDelete = (id) => {
    if (window.confirm("Bu çalışma alanı yazısını silmek istediğinize emin misiniz?")) {
      dispatch(deleteLegalContent(id));
      toast.success("Çalışma alanı başarıyla silindi!");
      navigate("/");
    }
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="mt-10">
      <div
        className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style={{ height: "24em" }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={legalContent?.imageUrl || "https://via.placeholder.com/800x600"}
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          alt={legalContent?.title || "Placeholder"}
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <a
            href="#"
            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >
            {legalContent?.subtitle || "Kategori"}
          </a>
          <h2 className="bg-white bg-opacity-50 backdrop-blur-2xl rounded p-2 text-4xl font-semibold text-third leading-tight">
            {legalContent?.title || "Başlık"}
          </h2>
        </div>

        {/* Düzenle ve Sil butonları */}
        {isSignedIn && (
          <div className="absolute top-4 left-4 z-30 flex space-x-2">
            <button
              onClick={() => handleEdit(legalContent?.id)}
              className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
            >
              Düzenle
            </button>
            <button
              onClick={() => handleDelete(legalContent?.id)}
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
            >
              Sil
            </button>
          </div>
        )}
      </div>

      <div className="bg-white bg-opacity-50 backdrop-blur-2xl p-5 px-4 lg:px-0 mt-12 text-black max-w-screen-md mx-auto text-lg leading-relaxed">
        <p
          className="pb-6 p-10"
          dangerouslySetInnerHTML={{ __html: legalContent?.content }}
        ></p>
      </div>
    </main>
  );
};

export default LegalContentDetails;
