import logo from "../assets/images/avukat-logo.png";

function Footer() {
    return (
        <div className="flex items-end w-full">
            <footer className="w-full text-fifth bg-third body-font z-10">
                <div className="container flex flex-col flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row">
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-secondary title-font md:justify-start">
                            <img src={logo} alt="Demirci Hukuk Bürosu Logo" className="w-24 h-24" />
                        </a>
                        <p className="mt-2 text-sm text-secondary">Demirci Hukuk Bürosu</p>
                        <div className="mt-4">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                <a className="text-secondary cursor-pointer hover:text-fifth">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-secondary cursor-pointer hover:text-fifth">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-secondary cursor-pointer hover:text-fifth">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-secondary cursor-pointer hover:text-fifth">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-secondary uppercase title-font">Hakkımızda</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Hukuk Bürosu</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Hizmetlerimiz</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Ekibimiz</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-secondary uppercase title-font">Platform</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Kullanım Koşulları</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Gizlilik Politikası</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Ücretler ve Fiyatlandırma</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-secondary uppercase title-font">İletişim</h2>
                            <nav className="mb-10 list-none">
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Mesaj Gönder</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">Teklif Alın</a>
                                </li>
                                <li className="mt-3">
                                    <a className="text-fifth cursor-pointer hover:text-secondary">+90 555 555 5555</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-third capitalize xl:text-center">© 2024 Demirci Hukuk Bürosu. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;