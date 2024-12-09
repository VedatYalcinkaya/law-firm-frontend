import React from "react";
import image from "../assets/images/icra-ve-iflas-gorsel.jpg"

function IcraHukuku() {
  return (
    <section>
      <div className="text-fifth">
        <div className="container mx-auto flex flex-col lg:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-fourth tracking-loose">
              İcra Hukuku
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Borçların Tahsilatı ve Haciz İşlemleri
            </h2>
            <p className="text-sm md:text-base text-fifth mb-4">
              Cindemir Hukuk Bürosu olarak icra hukuku alanında borçlu ve alacaklıların haklarını koruma amacıyla profesyonel hizmet sunuyoruz. Haciz, tahsilat ve alacak takibi gibi konularda müvekkillerimize en etkili ve hızlı çözümleri sunmayı hedefliyoruz.
              <br /><br />
              İcra hukuku, borçluların borçlarını ödememesi durumunda, alacaklıların haklarını koruma amacıyla başvurulan hukuki yolları kapsar. Bu süreçte icra takibi, haciz, rehin ve iflas gibi çeşitli yöntemler kullanılır. Cindemir Hukuk Bürosu olarak, müvekkillerimizin alacaklarının tahsil edilmesi noktasında hukuki sürecin her aşamasında yanlarındayız. 
              <br /><br />
              Borçluların borçlarını yerine getirmemesi durumunda başlatılan icra takipleri, alacaklıların haklarını korumak için büyük önem taşır. Bu süreçte, icra müdürlükleri aracılığıyla borçlulara ödeme emirleri gönderilir ve borcun ödenmemesi halinde haciz işlemleri başlatılır. Haciz, borçlunun mal varlıklarına el konularak alacağın tahsil edilmesini sağlayan önemli bir işlemdir. 
              <br /><br />
              Cindemir Hukuk Bürosu olarak, alacaklı müvekkillerimizin haklarını korumak ve en hızlı şekilde sonuç almak adına icra ve haciz işlemlerini titizlikle yürütüyoruz. Borçlular açısından ise hukuki haklarını korumak ve olası mağduriyetleri önlemek amacıyla danışmanlık hizmeti sunmaktayız. 
              <br /><br />
              Ayrıca, rehin ve iflas süreçlerinde de müvekkillerimize rehberlik ediyoruz. Rehin, borçlunun borcuna karşılık belirli bir malını alacaklıya teminat olarak vermesi anlamına gelir. İflas ise borçlunun borçlarını ödeyememesi durumunda tüm mal varlığının tasfiyesi anlamına gelir ve bu süreçte de alacaklıların hakları korunmaya çalışılır. 
              <br /><br />
              İcra hukuku karmaşık ve teknik detaylar içeren bir alan olup, hukuki bilgi ve deneyim gerektirir. Cindemir Hukuk Bürosu olarak, uzman ekibimizle birlikte müvekkillerimize en uygun ve etkili çözümleri sunarak, haklarını en iyi şekilde savunmayı amaçlıyoruz.
            </p>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3 justify-center">
            <div className="items-center">
              <div className="flex justify-center">
                <img
                  className="object-cover rounded-xl"
                  src={image}
                  alt="Haciz İşlemleri"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IcraHukuku;
