import React from "react";
import bookImage from "../assets/images/books.png";
import teraziImage from "../assets/images/terazi.png";
import personImage from "../assets/images/AboutUsPerson.png";

function AboutUs() {
  return (
    <section>
      <div className="text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-fourth tracking-loose">
              Cindemir Hukuk Bürosu
            </h1>
            <h2 className="text-3xl text-fifth md:text-5xl leading-relaxed md:leading-snug mb-2">
              Güvenilir ve Profesyonel Hukuk Hizmetleri
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Cindemir Hukuk Bürosu olarak müvekkillerimize en kaliteli hukuki
              danışmanlık ve temsil hizmetlerini sunuyoruz. Güven,
              profesyonellik ve mükemmellik ilkeleriyle hareket ederek her zaman
              yanınızdayız.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-fifth text-fifth hover:text-black shadow hover:shadow-lg py-2 px-4 border border-fifth hover:border-transparent"
            >
              Daha Fazla Bilgi Edinin
            </a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 md:w-2/3 flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center md:hidden lg:flex">
                <img
                  className="max-h-48 lg:max-h-60  mb-4 lg:mb-0"
                  src={bookImage}
                  alt="Kitaplar"
                />
              </div>
              <div className="flex justify-center md:hidden lg:flex">
                <img
                  className="max-h-60  lg:max-h-72 mb-4 lg:mb-0"
                  src={personImage}
                  alt="Avukat"
                />
              </div>
              <div className="flex justify-center  lg:flex">
                <img
                  className="max-h-48 lg:max-h-60 mb-4 lg:mb-0"
                  src={teraziImage}
                  alt="Adalet Terazisi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
