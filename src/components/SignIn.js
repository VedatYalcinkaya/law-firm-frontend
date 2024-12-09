import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isSignedIn, postSignIn } from "../store/slices/signInSlice";
import authService from "../services/authService";
import tokenService from "../services/tokenService";
import { toast } from "react-toastify";

const SignIn = ({ closeSignInDrawer }) => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme yapacağız

  // Formik validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email gereklidir")
      .email("Geçerli bir email adresi girin"),
    password: Yup.string().required("Şifre gereklidir"),
  });

  // OnSubmit function for Formik
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      // Dispatch sign-in request to Redux store
      const response = await dispatch(postSignIn(values)).unwrap();
      // Authenticate and get JWT token
      const token = response.token;

      if (!token) {
        toast.error("Hatalı email veya şifre!");
        return;
      }

      // Token'i alıp kaydediyoruz
      tokenService.setToken(token);

      // Toast mesajı
      toast.success("Başarıyla giriş yapıldı!");

      // Redux state güncellemesi
      dispatch(isSignedIn(true));
      
      // Admin paneline yönlendirme
      navigate("/admin");

      // Form'u sıfırlama
      resetForm();
    } catch (error) {
      toast.error("Giriş sırasında bir hata oluştu");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Hoş geldiniz! 👋🏻
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Lütfen hesabınıza giriş yapın
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <Field
                name="email"
                type="text"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder="Şifre"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-green-700 rounded hover:bg-green-800"
            >
              Giriş Yap
            </button>

            <div className="flex justify-center mt-6">
              <a
                href="#"
                className="text-green-700 underline"
                onClick={closeSignInDrawer}
              >
                Hesabınız yok mu? Admin ile iletişime geçin
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
