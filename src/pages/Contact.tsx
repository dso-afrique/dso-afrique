import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    profession: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Envoi en cours...');
    setSubmitStatus('idle');

    try {
      await axios.post(
        'https://dso-afrique-server.onrender.com/api/contact',
        formData
      );

      setStatus('✅ Message envoyé avec succès !');
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        profession: '',
        message: '',
      });

      setTimeout(() => {
        navigate('/thank-you');
      }, 500);
    } catch (error) {
      console.error(error);
      setStatus('❌ Une erreur est survenue.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discutons de votre projet et recevez un devis gratuit personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Colonne gauche : vidéo + formulaire */}
          <div>
            {/* ✅ Bloc vidéo ajouté ici */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Regardez cette vidéo avant de remplir le formulaire
              </h2>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_uRd-zfwkXI"
            title="Présentation de la formation DevSecOps & Cloud"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              />
            </div>
              <p className="mt-4 text-gray-700 text-sm">
                Dans cette vidéo, je vous explique l’architecture DevSecOps, ce que vous allez apprendre
                dans la formation et comment je peux accompagner votre entreprise sur le Cloud et la sécurité.
              </p>
            </div>

            {/* Bloc formulaire */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057ff] focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057ff] focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Numéro de téléphone avec l’indicatif du pays *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057ff] focus:border-transparent transition-all"
                    placeholder="+212 6 12 34 56 78"
                  />
                </div>

                <div>
                  <label
                    htmlFor="profession"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Votre profession *
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057ff] focus:border-transparent transition-all"
                    placeholder="Votre profession"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057ff] focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0057ff] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#0046cc] transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>

                {status && (
                  <div className="text-sm text-gray-600">{status}</div>
                )}

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Merci ! Votre message a été envoyé avec succès.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Colonne de droite inchangée */}
          <div>
            <div className="bg-gradient-to-br from-[#0057ff] to-[#0046cc] rounded-2xl p-8 text-white mb-8 h-full">
              <h2 className="text-2xl font-bold mb-8">
                Informations de contact
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:theafricancode1@gmail.com"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      theafricancode1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/33123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      +33 7 46 57 42 60
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-blue-100">
                      Paris, France / Marrakech, Maroc
                      <br />
                      Services disponibles en Afrique et Europe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Disponibilité</h3>
                    <p className="text-blue-100">
                      Lundi - Vendredi : 9h00 - 18h00
                      <br />
                      Réponse sous 24h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white border-opacity-20">
                <h3 className="font-semibold text-lg mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    Devis gratuit sous 48h
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    Accompagnement personnalisé
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    Tarifs transparents
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">✓</span>
                    Support après livraison
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
