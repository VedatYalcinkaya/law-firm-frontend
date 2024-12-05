import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();

  // Kullanıcının yetkilerini store'dan alıyoruz
  const credential = useSelector(state => state.getUserByEmail.data?.authorities);

  // Kullanıcı yetkilerini kontrol etmek için useEffect kullanıyoruz
  useEffect(() => {
    if (!credential || credential.includes("ROLE_USER")) {
      navigate("/");
    }
  }, [credential, navigate]);

  // Eğer kullanıcı ADMIN yetkisine sahipse çocuk bileşenleri render ediyoruz
  if (credential?.includes("ROLE_ADMIN")) {
    return <>{children}</>;
  }

  // Eğer kullanıcı yetkisine sahip değilse hiçbir şey döndürmemesi gerektiği için null döndürüyoruz
  return null;
};

export default AdminRoute;
