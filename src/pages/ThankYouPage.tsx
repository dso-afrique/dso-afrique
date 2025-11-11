import { CheckCircle } from "lucide-react";
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export default function ThankYouPage() {
  
    useEffect(() => {
    // 🔥 Envoi de l'événement "Lead" à Meta Pixel
    ReactPixel.track('Lead');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* LOGO */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <img
          src="/assets/dso-logo.png"
          alt="DSO Afrique"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-2xl font-bold text-blue-700">DSO-Afrique</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Merci pour votre inscription !
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Nous avons bien reçu vos informations. <br />
          Notre équipe vous contactera très prochainement pour finaliser les
          prochaines étapes.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Retour à l’accueil
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} DSO-Afrique — Tous droits réservés.
      </footer>
    </div>
  );
}
