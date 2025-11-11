import {
  Code,
  Smartphone,
  ShoppingCart,
  Server,
  Megaphone,
  BarChart3,
  PenTool,
  Target,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions digitales complètes pour transformer votre entreprise et accélérer votre croissance
          </p>
        </div>

        {/* Bloc Développement Web & Mobile */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-[#0057ff] w-16 h-16 rounded-xl flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 ml-6">
                Développement Web & Mobile
              </h2>
            </div>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Nous créons des solutions digitales sur mesure, performantes et évolutives pour répondre à vos besoins spécifiques.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Code className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sites Vitrines
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sites web modernes et responsive pour présenter votre activité et convertir vos visiteurs en clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <ShoppingCart className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      E-commerce
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Boutiques en ligne complètes avec gestion des paiements, stocks et commandes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Smartphone className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Applications Mobiles
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Applications iOS et Android natives ou hybrides pour atteindre vos utilisateurs partout.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Server className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      APIs & Backend
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Solutions backend robustes et APIs RESTful pour alimenter vos applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">Technologies utilisées :</h4>
              <p className="text-gray-700">
                React, Vue.js, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker
              </p>
            </div>
          </div>
        </div>

        {/* Bloc Marketing Digital */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-[#0057ff] w-16 h-16 rounded-xl flex items-center justify-center">
                <Megaphone className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 ml-6">
                Marketing Digital (SMMA)
              </h2>
            </div>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Augmentez votre visibilité en ligne et générez des leads qualifiés grâce à nos stratégies marketing éprouvées.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Megaphone className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Gestion des Réseaux Sociaux
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Animation quotidienne de vos comptes Facebook, Instagram, LinkedIn et TikTok pour engager votre communauté.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <PenTool className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Création de Contenu
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Articles de blog, visuels, vidéos et infographies adaptés à votre audience et optimisés pour la conversion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Publicité Ciblée
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Campagnes publicitaires Facebook Ads, Google Ads et LinkedIn Ads optimisées pour maximiser votre ROI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BarChart3 className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Stratégie d'Acquisition
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Développement de stratégies complètes pour attirer, convertir et fidéliser vos clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">Nos résultats :</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#0057ff]">+250%</div>
                  <div className="text-sm text-gray-600">Engagement moyen</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0057ff]">+180%</div>
                  <div className="text-sm text-gray-600">Leads générés</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0057ff]">3.5x</div>
                  <div className="text-sm text-gray-600">ROI publicitaire</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#0057ff] rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Intéressé par nos services ?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Discutons de votre projet et découvrez comment nous pouvons vous aider à atteindre vos objectifs
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center bg-white text-[#0057ff] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
