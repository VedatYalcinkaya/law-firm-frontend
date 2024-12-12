import React from "react";
import logo from "../assets/images/avukat-logo.png";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    // <!-- component -->
    <section>
      <div className="text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-fifth uppercase tracking-loose">HİZMET SÜRECİ</p>
            <p className="text-3xl md:text-4xl text-fifth leading-normal md:leading-relaxed mb-2">Cindemir Hukuk Bürosu Hizmet Süreci</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Cindemir Hukuk Bürosu olarak hizmetlerimizi adım adım takip ederek en doğru şekilde ilerlemenizi sağlıyoruz. Sürecin tüm aşamalarını öğrenmek için adımları takip edebilirsiniz.
            </p>
            <Link
              to="/iletisim"
              className="bg-transparent mr-auto hover:bg-fifth text-fifth hover:text-third rounded shadow hover:shadow-lg py-2 px-4 border border-fifth hover:border-transparent"
            >
              Şimdi Randevu Alın
            </Link>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-fifth absolute h-full"
                  style={{ right: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}
                ></div>
                <div
                  className="border-fifth absolute h-full"
                  style={{ left: "50%", border: "2px solid #FFC100", borderRadius: "1%" }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-fifth">Danışmanlık Başlangıcı</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Danışmanlık Randevusu</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      İlk adım olarak, hukuk danışmanlığı için bir randevu alarak sürecin başlangıcını oluşturun. Sizin için en uygun çözüm yollarını değerlendiriyoruz.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-fifth">Hukuki Süreç</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Hukuki İşlemlerin Yürütülmesi</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Sizin adınıza tüm hukuki işlemleri yürüterek haklarınızı en iyi şekilde savunuyoruz. Dosya takipleri ve diğer yasal süreçlerde sizinle birlikteyiz.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-fifth">Sonuçlandırma</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Dava ve Sonuç</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Dava sürecinin son aşamasında, en iyi sonuçları elde edebilmeniz için tüm imkanlarımızı kullanarak hukuki mücadelemizi sonuçlandırıyoruz.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-fifth">Başarı ve Geri Bildirim</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Başarı ve Geri Bildirim</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Süreç tamamlandığında, hukuki başarımızın ardından memnuniyetinizi sağlamak ve gelecek iş birlikleri için geri bildirimlerinizi almak bizim için önemlidir.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto h-48 -mt-8 md:-mt-8 "
                src={logo}
                alt="Cindemir Hukuk Bürosu Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;