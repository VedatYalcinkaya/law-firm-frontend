import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticleById } from "../store/slices/getArticleByIdSlice";

const ArticleDetails = () => {
  const { id } = useParams(); // Makale ID'sini URL'den alıyoruz
  const dispatch = useDispatch();
  
  // Redux store'dan makale bilgilerini çekiyoruz
  const { article, loading, error } = useSelector((state) => state.articleDetails);

  useEffect(() => {
    dispatch(getArticleById(id)); // Makale ID'sine göre veri çekiyoruz
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Makale yüklenmeden önce null kontrolü yapıyoruz
  if (!article) {
    return <div>Makale yükleniyor...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${article.imagePath})`,
        }}
        title={article.title}
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg- rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white bg-opacity-50 backdrop-blur-2xl relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{article.title}</h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <span className="text-indigo-600 font-medium">{article.author}</span> <br /> In
              <span className="text-xs text-indigo-600 font-medium">{article.category}</span>
            </p>
            <div
              className="text-base leading-8 my-5"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
