import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLanguage, faHome, faBox, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = () => {
  const [translations, setTranslations] = useState({});
  const [locale, setLocale] = useState('en');
  const location = useLocation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const fetchTranslations = async () => {
      const response = await axios.get(`/translations/${locale}`);
      setTranslations(response.data.messages);
    };

    fetchTranslations();
  }, [locale]);

  const switchLanguage = (lang) => {
    setLocale(lang);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="lex items-center mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-gray-700 text-lg font-bold">Pharmacy Afajr</div>
        </div>

        <nav className="flex flex-wrap w-full md:w-auto justify-center md:justify-start space-x-4">
          <Link to="/" className={`nav-link ${isActiveRoute('/') ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500`}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link to="/products" className={`nav-link ${isActiveRoute('/products') ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500`}>
            <FontAwesomeIcon icon={faBox} className="mr-2" />
            Products
          </Link>
          <Link to="/about" className={`nav-link ${isActiveRoute('/about') ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500`}>
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            About Us
          </Link>
          <Link to="/contact" className={`nav-link ${isActiveRoute('/contact') ? 'text-blue-500' : 'text-gray-700'} hover:text-blue-500`}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="text-gray-500 text-lg md:text-xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            {showProfileMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg animate-fade-in">
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="text-gray-500 text-lg md:text-xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faLanguage} />
            </button>
            {showLanguageMenu && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg animate-fade-in">
                <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => switchLanguage('en')}>English</button>
                <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => switchLanguage('fr')}>French</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
