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
              Votre partenaire en Cloud, DevSecOps & Sécurité
              <span className="text-[#0057ff]"> DSO Afrique</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Architecture, automatisation, sécurité et formation aux technologies modernes.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center bg-[#0057ff] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0046cc] transition-all hover:shadow-lg hover:scale-105"
            >
              Contactez-nous
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
                Architecture & Cloud DevSecOps (Audit + Mise en place complète)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Architecture & Mise en Place de Systèmes Cloud Sécurisés, Construisez une infrastructure moderne, scalable et sécurisée.
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
                Formez vos équipes ou préparez-vous à devenir ingénieur DevSecOps.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Une formation complète et moderne pour maîtriser le DevSecOps, automatiser la chaîne de développement et renforcer la sécurité des environnements Cloud.
                
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Pourquoi choisir DSO Afrique ?
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Votre partenaire de confiance pour votre transformation digitale
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#0057ff]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                12 ans d'expérience auprès de grandes entreprises européennes
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#0057ff]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Communication claire et suivi régulier de vos projets
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#0057ff]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accompagnement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support personnalisé tout au long de votre projet
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#0057ff]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Solutions optimisées pour maximiser votre retour sur investissement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Témoignages Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0057ff] rounded-full flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Moussa  Mbaye</h4>
                  <p className="text-sm text-gray-600">Développeur</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "La formation DevSecOps de DSO Afrique m’a permis de comprendre enfin Docker, Kubernetes, la sécurité, et comment les entreprises construisent leurs pipelines.
                C’est très pratique, clair et orienté métier.
                      Grâce à cette formation, j’ai pu décrocher une mission DevOps en quelques semaines."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0057ff] rounded-full flex items-center justify-center text-white font-bold">
                  KD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Kofi Diallo</h4>
                  <p className="text-sm text-gray-600">Fondateur, Tech Startup</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Une équipe professionnelle et réactive. L'application développée dépasse nos attentes en termes de qualité et de performance."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0057ff] rounded-full flex items-center justify-center text-white font-bold">
                  SF
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sophie Fontaine</h4>
                  <p className="text-sm text-gray-600">Directrice Technique</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "Nous avons fait appel à DSO Afrique pour moderniser notre infrastructure et mettre en place un pipeline CI/CD sécurisé. Le résultat a dépassé nos attentes.
               une architecture Cloud propre, scalable et entièrement automatisée.
               Depuis, nos déploiements sont plus rapides, nos coûts mieux maîtrisés, et notre sécurité renforcée."
              </p>
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
