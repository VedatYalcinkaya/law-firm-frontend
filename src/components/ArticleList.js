import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticles } from "../store/slices/getAllArticlesSlice";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector(
    (state) => state.getAllArticles
  );

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {articles &&
            articles.map((article) => (
              <div key={article.id} className="p-4 md:w-1/3">
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <Link to={`/makale/${article.id}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={article.imagePath || "https://via.placeholder.com/150"}
                    alt={article.title}
                  />
                </Link>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {article.category || "CATEGORY"}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                      {article.title}
                    </h1>
                    <p
                      className="leading-relaxed mb-3"
                      dangerouslySetInnerHTML={{
                        __html: article.content.substring(0, 100),
                      }}
                    />
                    <div className="flex items-center flex-wrap ">
                      <Link to={`/makale/${article.id}`}>
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg">
                          Devamını Gör
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;
