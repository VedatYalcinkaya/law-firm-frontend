import client from "../assets/images/client.jpg"
import lawyer from "../assets/images/lawyer.jpg"


function DetailedAboutUs() {
    return (
        <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                {/* Title */}
                <h2 className="mb-8 text-3xl font-bold text-center text-fourth md:text-5xl lg:mb-14">
                    Cindemir Hukuk Bürosu
                </h2>
                <p className="mb-8 text-sm text-center text-fifth sm:text-base lg:mb-24">
                    Cindemir Hukuk Bürosu olarak, müvekkillerimize en üst düzeyde hukuki hizmet sunmayı ve adaletin sağlanmasına katkıda bulunmayı misyon edindik. Müvekkillerimizin ihtiyaçlarını gözeterek çözüm odaklı, etik ve şeffaf bir yaklaşım benimsiyoruz.
                </p>
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                    <img
                        src={lawyer}
                        alt=""
                        className="inline-block h-full w-full rounded-2xl object-cover"
                    />
                    <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
                        <h2 className="text-3xl font-bold text-fourth md:text-5xl">Misyonumuz</h2>
                        <p className="text-sm text-fifth sm:text-base">
                            Cindemir Hukuk Bürosu olarak, hukuki süreçlerde müvekkillerimize en iyi desteği sunmayı hedefliyoruz. Adil ve etkili çözümler üreterek, toplumda hukukun üstünlüğünü sağlamak ve müvekkillerimizin haklarını korumak için çalışıyoruz. 
                            <br />
                            <br />
                            Müvekkillerimizin çıkarlarını en ön planda tutarak, etik değerlere bağlı ve profesyonel bir yaklaşımla her zaman yanınızdayız. Uzman ekibimizle, hukuki meselelerinizi titizlikle ele alıyor ve size en uygun çözümleri sunuyoruz.
                            <br />
                            <br />
                            Cindemir Hukuk Bürosu, ticaret hukuku, aile hukuku, ceza hukuku, iş hukuku gibi farklı alanlarda geniş bir yelpazede hukuki hizmetler sunmaktadır. Müvekkillerimize hem bireysel hem de kurumsal olarak en iyi hizmeti vermek adına sürekli kendimizi geliştiriyor ve en güncel yasal düzenlemeleri takip ediyoruz.
                        </p>
                    </div>
                </div>
                <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
                        <h2 className="text-3xl font-bold text-fourth md:text-5xl">Vizyonumuz</h2>
                        <p className="text-sm text-fifth sm:text-base">
                            Cindemir Hukuk Bürosu olarak vizyonumuz, müvekkillerimizin haklarını en etkili şekilde savunarak, güvenilir ve saygın bir hukuk bürosu olmaktır. Hukuk sistemine olan inancı artırmak ve toplumsal adaletin sağlanmasına katkıda bulunmak en büyük hedeflerimizden biridir. 
                            <br />
                            <br />
                            Teknolojik yeniliklere uyum sağlayarak ve hukuk dünyasındaki gelişmeleri yakından takip ederek, müvekkillerimize en modern ve etkili çözümleri sunmayı amaçlıyoruz. Topluma değer katan, sorumluluk sahibi ve çözüm odaklı bir hukuk bürosu olarak her zaman yanınızdayız.
                        </p>
                    </div>
                    <img
                        src={client}
                        alt=""
                        className="inline-block h-full w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default DetailedAboutUs;