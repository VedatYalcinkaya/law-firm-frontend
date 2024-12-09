import logo from "../assets/images/avukat-logo.png";

function Footer() {
    return (
        <footer className="w-full text-fifth bg-third body-font z-10 relative">
            <div className="container px-5 py-12 mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start">
                {/* Logo ve Bilgi */}
                <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                    <a className="flex items-center justify-center md:justify-start">
                        <img src={logo} alt="Cindemir Hukuk Bürosu Logo" className="w-20 h-20" />
                    </a>
                    <p className="mt-4 text-sm text-secondary">Cindemir Hukuk Bürosu</p>
                    <div className="mt-4 flex justify-center md:justify-start">
                        <a className="text-secondary cursor-pointer hover:text-fifth mx-2">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="text-secondary cursor-pointer hover:text-fifth mx-2">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="text-secondary cursor-pointer hover:text-fifth mx-2">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="text-secondary cursor-pointer hover:text-fifth mx-2">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Hakkımızda Bölümü */}
                <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-secondary uppercase title-font">Hakkımızda</h2>
                    <nav className="list-none">
                        <li className="mt-3">
                            <a className="text-fifth cursor-pointer hover:text-secondary">Hukuk Bürosu</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-fifth cursor-pointer hover:text-secondary">Hizmetlerimiz</a>
                        </li>
                    </nav>
                </div>

                {/* İletişim Bölümü */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-secondary uppercase title-font">İletişim</h2>
                    <nav className="list-none">
                        <li className="mt-3">
                            <a className="text-fifth cursor-pointer hover:text-secondary">Mesaj Gönder</a>
                        </li>
                        <li className="mt-3">
                            <a className="text-fifth cursor-pointer hover:text-secondary">+90 555 555 5555</a>
                        </li>
                    </nav>
                </div>
            </div>

            {/* Alt Kısım Telif Hakkı */}
            <div className="bg-secondary py-4">
                <div className="container mx-auto px-5">
                    <p className="text-sm text-third capitalize text-center">
                        © 2024 Cindemir Hukuk Bürosu. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
