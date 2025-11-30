import {
  Server,
  ShieldCheck,
  Workflow,
  Cloud,
  GraduationCap,
  Layers,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions Cloud & DevSecOps pour moderniser votre entreprise, et formations professionnelles pour monter rapidement en compétence.
          </p>
        </div>

        {/* Service 1 : Cloud & DevSecOps */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            
            <div className="flex items-center mb-6">
              <div className="bg-[#0057ff] w-16 h-16 rounded-xl flex items-center justify-center">
                <Cloud className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 ml-6">
                Architecture Cloud & DevSecOps
              </h2>
            </div>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Nous construisons des systèmes Cloud modernes, sécurisés et automatisés selon les standards DevSecOps : performance, scalabilité et sécurité dès la conception.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Workflow className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Pipelines CI/CD
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mise en place de pipelines d’intégration et déploiement continus : test, build, déploiement automatisé.
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
                      Docker & Kubernetes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conteneurisation, orchestration, déploiement scalable et haute disponibilité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Layers className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Architecture Cloud Sécurisée
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Infrastructure Cloud (AWS / Azure), microservices, optimisation des coûts et performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <ShieldCheck className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      DevSecOps & Sécurité
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sécurité intégrée dans tout le cycle logiciel : scans, audits, tests automatisés, conformité.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Service 2 : Formation */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            
            <div className="flex items-center mb-6">
              <div className="bg-[#0057ff] w-16 h-16 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 ml-6">
                Formation DevSecOps & Sécurité Cloud
              </h2>
            </div>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              Une formation professionnelle et pratique pour maîtriser Docker, Kubernetes, la sécurité, le Cloud, les pipelines CI/CD et devenir ingénieur DevSecOps.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Lock className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sécurité & DevSecOps
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Apprenez à sécuriser les pipelines, les conteneurs, les applications et les environnements Cloud.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Workflow className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      CI/CD Professionnel
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Jenkins, GitHub Actions, GitLab CI : créez des pipelines de niveau entreprise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Cloud className="text-[#0057ff]" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cloud (AWS / Azure)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Déploiement, architecture, sécurité, gestion des coûts et environnements réels.
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
                      Docker & Kubernetes
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Maîtrisez les conteneurs, le clustering, les déploiements et l’orchestration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0057ff] rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Intéressé par nos services ?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Discutons de votre projet et voyez comment nous pouvons moderniser votre système ou vous former au DevSecOps.
          </p>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center bg-white text-[#0057ff] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
          >
            Contactez-nous
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
