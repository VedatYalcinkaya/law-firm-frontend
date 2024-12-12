import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, resetEmailState } from "../store/slices/sendEmailSlice";
import mailIcon from "../assets/icons/message-mail-svgrepo-com.svg";

const ContactWithMap = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.sendEmail);

  // Form verilerini tutan state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Form input değişikliklerini dinleyen handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form gönderim handler'ı
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendEmail(formData));
  };

  // Gönderim sonrası mesaj temizleme
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    dispatch(resetEmailState());
  };

  return (
    <section className="mb-32">
      {/* Harita */}
      <div
        id="map"
        className="relative h-120 overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.9905413809186!2d29.130623767186172!3d40.98189506787419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf5577f613a7%3A0x5b59583e9e6b62d7!2sBrandium%20AVM!5e0!3m2!1sen!2sus!4v1728958494820!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen
          loading="lazy"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541.0432212088477!2d32.85888283033964!3d39.905527897125125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa15f225377%3A0xe116097ef2346500!2zUmVtemkgT8SfdXogQXLEsWssIFR1bnVzIENkIE5vOjcyLCAwNjY4MCDDh2Fua2F5YS9BbmthcmE!5e0!3m2!1str!2str!4v1733926261779!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: 10 }}
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-[50px] border border-gray-300">
          <div className="flex flex-wrap">
            {/* Form */}
            <div className="mb-12 w-full md:px-3 lg:w-5/12 lg:px-6">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ad Soyad"
                    required
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all"
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all"
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefon"
                    required
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all"
                  />
                </div>
                <div className="relative mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesaj"
                    required
                    rows="3"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  // className=" bg-fifth text-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                  className=" mb-6 w-full rounded px-6 pt-2.5 pb-2 bg-primary mr-auto hover:bg-fifth text-white hover:text-third rounded shadow hover:shadow-lg  border border-primary hover:border-transparent lg:mb-0"

                >
                  {loading ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>

              {/* Başarı veya Hata Mesajları */}
              {success && (
                <p className="text-green-500">
                  Mesaj başarıyla gönderildi!
                  <button onClick={handleReset} className="ml-2 text-blue-500">
                    Yeni mesaj
                  </button>
                </p>
              )}
              {error && <p className="text-red-500">Hata: {error}</p>}
            </div>

            {/* İletişim Bilgileri */}
            <div className="w-full lg:w-7/12">
              <div className="ml-6 grow">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block bg-fifth p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Adres</p>
                      <p className="text-sm text-neutral-500">
                        Küçükbakkalköy Mah. Dudullu Cad. <br /> 23-25D Brandium
                        Residence D:253
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block bg-fifth p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Telefon</p>
                      <p className="text-neutral-500">+90 545 310 74 69</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block bg-fifth p-4 text-primary">
                        <img src={mailIcon} alt="Mail Icon"/>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Mail</p>
                      <p className="text-neutral-500">av.cagatay@cindemirhukuk.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMap;
