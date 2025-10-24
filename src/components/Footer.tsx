import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#0057ff] mb-4">DSO Afrique</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agence digitale spécialisée dans le développement web & mobile et le marketing digital pour les entreprises africaines et européennes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@dsoafrique.com"
                className="flex items-center text-gray-400 hover:text-[#0057ff] transition-colors text-sm"
              >
                <Mail size={18} className="mr-3" />
                contact@dsoafrique.com
              </a>
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-[#0057ff] transition-colors text-sm"
              >
                <Phone size={18} className="mr-3" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#0057ff] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#0057ff] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#0057ff] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DSO Afrique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
