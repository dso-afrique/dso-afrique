import { Briefcase, GraduationCap, Target, Heart, Users, Award } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            À Propos de DSO Afrique
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une agence digitale dédiée à la réussite des entrepreneurs africains
          </p>
        </div>

        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#0057ff] to-[#0046cc] rounded-2xl p-8 text-white h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-[#0057ff]" size={64} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Ayoub Zekhnine</h2>
                  <p className="text-xl text-blue-100">Fondateur & CEO</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mon Parcours
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Je suis <span className="font-semibold text-[#0057ff]">Ayoub Zekhnine</span>, fondateur de DSO Afrique.
                </p>
                <p>
                  Développeur full stack avec <span className="font-semibold">5 ans d'expérience</span> auprès de grandes entreprises européennes telles que <span className="font-semibold">BNP Paribas</span> et <span className="font-semibold">EDF</span>, j'ai acquis une expertise solide dans le développement de solutions digitales performantes et évolutives.
                </p>
                <p>
                  Ma mission ? Aider les entrepreneurs africains à réussir grâce au digital en leur offrant des services de qualité internationale à des tarifs accessibles.
                </p>
                <p>
                  Chez DSO Afrique, nous croyons que chaque entreprise mérite d'avoir accès aux meilleures technologies et stratégies digitales pour se développer et prospérer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Expertise & Compétences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-[#0057ff] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expérience Professionnelle
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5 ans en entreprises européennes</li>
                <li>• BNP Paribas - Solutions bancaires</li>
                <li>• EDF - Systèmes énergétiques</li>
                <li>• Projets internationaux complexes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-[#0057ff] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compétences Techniques
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Développement Full Stack</li>
                <li>• Architecture Cloud (AWS, Azure)</li>
                <li>• DevOps & CI/CD</li>
                <li>• Gestion de projets Agile</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-[#0057ff] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Marketing Digital
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Stratégies d'acquisition</li>
                <li>• Social Media Management</li>
                <li>• SEO & Content Marketing</li>
                <li>• Campagnes publicitaires</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-[#0057ff]" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies du marché.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#0057ff]" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                Votre succès est notre priorité. Nous nous investissons pleinement dans chaque projet pour garantir votre satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#0057ff]" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proximité</h3>
              <p className="text-gray-600 leading-relaxed">
                Une relation de confiance basée sur la transparence, la communication et un accompagnement personnalisé.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0057ff] to-[#0046cc] rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Vous avez un projet digital ? Parlons-en et voyons comment je peux vous aider à le concrétiser.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#0057ff] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
          >
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
}
