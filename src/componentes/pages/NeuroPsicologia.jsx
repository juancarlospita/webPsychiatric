import { Brain, ScrollText, Activity, Workflow, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NeuroPsicologia = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-white"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {t('neuropsychology.hero.title')} <span className="text-blue-600">{t('neuropsychology.hero.titleHighlight')}</span>
              </h1>
              <div className="w-20 h-1 bg-blue-600"></div>
              <p className="text-lg text-gray-600">{t('neuropsychology.hero.description')}</p>
            </div>
            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/neuropsicologia.jpg"
                  alt={t('neuropsychology.images.hero')}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="lg:flex">
              <div className="lg:w-2/5 relative">
                <div className="absolute inset-0 bg-blue-600/10 transform rotate-3"></div>
                <div className="absolute inset-0 bg-blue-600/10 transform -rotate-3"></div>
                <div className="relative h-full">
                  <img
                    src="/assets/draIsabel.jpg"
                    alt={t('neuropsychology.specialist.imageAlt')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-3/5 p-12 lg:pl-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('neuropsychology.specialist.title')} <span className="text-blue-600">{t('neuropsychology.specialist.titleHighlight')}</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('neuropsychology.specialist.name')}</h3>
                <p className="text-lg text-blue-600 mb-6">{t('neuropsychology.specialist.role')}</p>
                <p className="text-gray-600 mb-8">{t('neuropsychology.specialist.description')}</p>
                <Link
                  to="/equip"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <span className="border-b-2 border-transparent group-hover:border-blue-600">
                    {t('neuropsychology.specialist.link')}
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('neuropsychology.warningSigns.title')} <span className="text-blue-600">{t('neuropsychology.warningSigns.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600">{t('neuropsychology.warningSigns.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t('neuropsychology.warningSigns.categories', { returnObjects: true })).map(([key, category]) => (
              <div key={key} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {key === 'cognition' && <Brain className="w-6 h-6 text-blue-600" />}
                  {key === 'behavior' && <Activity className="w-6 h-6 text-blue-600" />}
                  {key === 'daily' && <Workflow className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('neuropsychology.objectives.title')} <span className="text-blue-600">{t('neuropsychology.objectives.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600">{t('neuropsychology.objectives.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t('neuropsychology.objectives.types', { returnObjects: true })).map(([key, objective]) => (
              <div key={key} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {key === 'evaluation' && <ScrollText className="w-6 h-6 text-blue-600" />}
                  {key === 'rehabilitation' && <Brain className="w-6 h-6 text-blue-600" />}
                  {key === 'prevention' && <Activity className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 sm:px-12 lg:px-16">
              <div className="lg:flex items-center justify-between gap-12">
                <div className="mb-8 lg:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {t('neuropsychology.cta.title')}
                  </h2>
                  <p className="text-blue-100 text-lg max-w-2xl">
                    {t('neuropsychology.cta.description')}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 
                            rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    {t('neuropsychology.cta.button')}
                    <Calendar className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeuroPsicologia;