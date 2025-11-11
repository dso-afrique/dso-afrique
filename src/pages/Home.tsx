import { Code, Megaphone, Award, Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Développez votre présence digitale avec{' '}
              <span className="text-[#0057ff]">DSO Afrique</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Agence de développement et de marketing digital
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center bg-[#0057ff] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0046cc] transition-all hover:shadow-lg hover:scale-105"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Des solutions digitales complètes pour accompagner votre croissance
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-[#0057ff] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Développement Web & Mobile
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sites vitrines, e-commerce, applications sur mesure et APIs. Nous créons des solutions digitales performantes et évolutives adaptées à vos besoins.
              </p>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center text-[#0057ff] font-semibold hover:underline"
              >
                En savoir plus
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-[#0057ff] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Megaphone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Marketing Digital (SMMA)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gestion des réseaux sociaux, publicité ciblée et création de contenu. Augmentez votre visibilité et convertissez vos prospects en clients.
              </p>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center text-[#0057ff] font-semibold hover:underline"
              >
                En savoir plus
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0057ff] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Discutons de vos besoins et recevez un devis personnalisé gratuit
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-[#0057ff] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
          >
            Contactez-nous maintenant
          </button>
        </div>
      </section>
    </div>
  );
}
