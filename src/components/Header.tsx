import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'À propos', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo et titre */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/logo.png" // 👉 remplace ce chemin par ton logo réel
              alt="Logo DSO Afrique"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-[#0057ff] hover:opacity-80 transition-opacity"
            >
              DSO Afrique
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#0057ff]'
                    : 'text-gray-700 hover:text-[#0057ff]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#0057ff] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0046cc] transition-colors"
            >
              Devis gratuit
            </button>
          </nav>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#0057ff] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-[#0057ff]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate('/contact');
                setIsMenuOpen(false);
              }}
              className="block w-full bg-[#0057ff] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#0046cc] transition-colors"
            >
              Devis gratuit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
