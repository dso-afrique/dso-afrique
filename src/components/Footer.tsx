import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
                <img
      src="/images/logo.png" // 👉 remplace ce chemin par ton logo réel
      alt="Logo DSO Afrique"
      className="w-20 h-20 rounded-full object-cover"
    />
    <br/>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert en Cloud, DevSecOps et sécurité applicative, nous accompagnons les entreprises dans leur transformation 
              technologique et formons les talents africains aux compétences IT modernes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:theafricancode1@gmail.com"
                className="flex items-center text-gray-400 hover:text-[#0057ff] transition-colors text-sm"
              >
                <Mail size={18} className="mr-3" />
                theafricancode1@gmail.com
              </a>
              <a
                href="https://wa.me/33746574260"
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
                href="https://www.facebook.com/profile.php?id=100093037361469"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#0057ff] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/dso_afrique"
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
