import React, { useEffect, useState } from "react";
import logo from "../assets/images/avukat-logo.png";
import { Link } from "react-router-dom";

function Navbar2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  }, []);

  return (
    <div>
      <nav className="flex-no-wrap fixed top-0 z-20 flex w-full items-center justify-start bg-third bg-opacity-30 rounded-xl  backdrop-filter backdrop-blur-xl">
        <div className="flex justify-between items-center mx-auto max-w-full px-3 sm:px-6 lg:px-8">
          {/* Logo ve Başlık */}
          <div className="flex items-center space-x-4">
            <img
              className="custom-logo my-4 h-24"
              src={logo}
              alt="Demirci Hukuk Bürosu Logo"
            />
            <div className="flex flex-col text-center">
              <span className="text-2xl font-josefin font-bold text-fifth lg:me-28">
                Demirci Hukuk Bürosu
              </span>
            </div>
          </div>

          {/* Navigasyon Linkleri */}
          <div className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-8">
            <Link
              to="/"
              className="block text-xl text-center text-secondary font-josefin font-bold hover:text-fifth hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              className="block text-xl text-secondary font-josefin font-bold hover:text-fifth hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              Hakkımızda
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="block text-xl text-secondary font-josefin font-bold hover:text-fifth hover:scale-125 transition-transform duration-300 ease-in-out">
                Çalışma Alanlarımız
              </button>
              <div
                className={`absolute ${dropdownOpen ? "block" : "hidden"} bg-white shadow-lg rounded mt-0 w-48`}
              >
                <ul className="py-2">
                  <li>
                    <Link to="/icra-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      İcra Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/ceza-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      Ceza Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/aile-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      Aile Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ticaret-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      Ticaret Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/borclar-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      Borçlar Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/is-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      İş Hukuku
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/sozlesme-hukuku" className="block px-4 py-2 text-secondary hover:bg-gray-200">
                      Sözleşme Hukuku
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              to="/makaleler"
              className="block text-xl text-secondary font-josefin font-bold hover:text-fifth hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              Makaleler
            </Link>
            <Link
              to="/contact"
              className="block text-xl text-secondary font-josefin font-bold hover:text-fifth hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              İletişim
            </Link>
          </div>

          {/* Hamburger Menüsü */}
          <div className="flex flex-col items-end space-y-2">
            <button className="relative group navbar-burger lg:hidden">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-third ring-0 ring-gray-300 hover:scale-125 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden group-focus:-rotate-180">
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
                  <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobil Menü */}
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="custom-logo scale-50 mx-0"
                src={logo}
                alt="Demirci Hukuk Bürosu Logo"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/about"
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/services"
                >
                  Hizmetler
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/makaleler"
                >
                  Makaleler
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/contact"
                >
                  İletişim
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/appointment"
                >
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar2;