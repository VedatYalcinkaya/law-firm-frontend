import React from "react";
import image from "../assets/images/icra-ve-iflas-gorsel.jpg"

function CezaHukuku() {
  return (
    <section>
      <div className="text-fifth">
        <div className="container mx-auto flex flex-col lg:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-fourth tracking-loose">
              Ceza Hukuku
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Suçların Soruşturulması ve Savunma Hizmetleri
            </h2>
            <p className="text-sm md:text-base text-fifth mb-4">
              Demirci Hukuk Bürosu olarak ceza hukuku alanında, müvekkillerimizin haklarını savunmak ve adaletin yerini bulmasını sağlamak amacıyla profesyonel hizmet sunuyoruz. Ceza soruşturma ve kovuşturma süreçlerinde müvekkillerimizin yanında olarak, hukuki haklarını en iyi şekilde korumayı hedefliyoruz.
              <br /><br />
              Ceza hukuku, suç işleyen kişilerin cezalandırılması ve suç mağdurlarının haklarının korunması amacıyla uygulanan kuralları kapsar. Bu kapsamda suçların soruşturulması, kovuşturulması ve suçluların cezalandırılması süreçleri yer alır. Demirci Hukuk Bürosu olarak, müvekkillerimizin haklarının korunması ve adaletin sağlanması için bu süreçlerin her aşamasında titizlikle çalışıyoruz.
              <br /><br />
              Ceza soruşturma sürecinde, savcılık tarafından yürütülen hazırlık soruşturması sırasında müvekkillerimize hukuki destek sağlıyoruz. Gözaltı, tutuklama gibi özgürlüğü kısıtlayıcı işlemlerle karşılaşan müvekkillerimize gerekli hukuki savunmayı yaparak, haklarının korunmasına yardımcı oluyoruz. Ayrıca, ifade verme sürecinde ve soruşturmanın diğer aşamalarında müvekkillerimizin yanındayız.
              <br /><br />
              Ceza kovuşturma sürecinde ise, suç isnat edilen kişilerin mahkemede savunulması ve suçsuzluk karinesine uygun olarak haklarının korunması büyük önem taşır. Demirci Hukuk Bürosu olarak, müvekkillerimizin adil yargılanma hakkını savunarak, etkin bir savunma stratejisi oluşturuyoruz. Bunun yanında, mağdur olan tarafların da haklarını koruyarak, suçluların cezalandırılması için gerekli hukuki adımları atıyoruz.
              <br /><br />
              Ceza hukuku, kişilerin özgürlüğünü ve haklarını doğrudan etkileyen bir alan olduğu için uzmanlık ve deneyim gerektirir. Demirci Hukuk Bürosu olarak, suç isnat edilen veya mağdur durumda olan müvekkillerimize en iyi hizmeti sunarak, adaletin sağlanması ve hukuki süreçlerin doğru bir şekilde yürütülmesi adına çalışıyoruz. Uzman ekibimizle birlikte, her türlü ceza davasında müvekkillerimize profesyonel destek sunarak, haklarını en iyi şekilde savunmayı amaçlıyoruz.
            </p>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-1/3 justify-center">
            <div className="items-center">
              <div className="flex justify-center">
                <img
                  className="object-cover rounded-xl"
                  src={image}
                  alt="Ceza Hukuku"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CezaHukuku;
