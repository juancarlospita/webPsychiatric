import { Brain, AlertCircle, Activity, Workflow, Calendar, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Neurologia = () => {
  const { t } = useTranslation();

  const signesAlarma = t('neurology.alarmSigns.items', { returnObjects: true });

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
                {t('neurology.hero.title')} <span className="text-blue-600">{t('neurology.hero.titleHighlight')}</span>
              </h1>
              <div className="w-20 h-1 bg-blue-600"></div>
              <p className="text-lg text-gray-600">{t('neurology.hero.description1')}</p>
              <p className="text-lg text-gray-600">{t('neurology.hero.description2')}</p>
            </div>
            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2940&q=80"
                  alt={t('neurology.images.hero')}
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
                    src="/assets/drXavierBatalla.jpg"
                    alt={t('neurology.specialist.imageAlt')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-3/5 p-12 lg:pl-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t('neurology.specialist.title')} <span className="text-blue-600">{t('neurology.specialist.titleHighlight')}</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('neurology.specialist.name')}</h3>
                <p className="text-lg text-blue-600 mb-6">{t('neurology.specialist.role')}</p>
                <p className="text-gray-600 mb-8">{t('neurology.specialist.description')}</p>
                <Link
                  to="/equip"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <span className="border-b-2 border-transparent group-hover:border-blue-600">
                    {t('neurology.specialist.link')}
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

      {/* Información General */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('neurology.causes.title')} <span className="text-blue-600">{t('neurology.causes.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">{t('neurology.causes.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('neurology.causes.vascular.title')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {t('neurology.causes.vascular.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('neurology.causes.degenerative.title')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {t('neurology.causes.degenerative.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('neurology.causes.others.title')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {t('neurology.causes.others.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Test AD8 Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 sm:px-12 lg:px-16">
              <div className="lg:flex items-center justify-between gap-12">
                <div className="mb-8 lg:mb-0">
                  <h2 className="text-3xl font-bold text-white mb-4">{t('neurology.testAD8.title')}</h2>
                  <p className="text-blue-100 text-lg max-w-2xl">{t('neurology.testAD8.description')}</p>
                </div>
                <div className="flex justify-center">
                  <Link to="/test-ad8"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-medium 
                    hover:bg-blue-50 transition-colors shadow-lg">
                    {t('neurology.testAD8.button')}
                    <Calendar className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signos de Alarma */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('neurology.alarmSigns.title')} <span className="text-blue-600">{t('neurology.alarmSigns.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600">{t('neurology.alarmSigns.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signesAlarma.map((signo, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-900">{signo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnóstico y Tratamiento */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Diagnóstico */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('neurology.diagnosis.title')} <span className="text-blue-600">{t('neurology.diagnosis.titleHighlight')}</span>
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <ul className="space-y-4">
                  {t('neurology.diagnosis.steps', { returnObjects: true }).map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tratamiento */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('neurology.treatment.title')} <span className="text-blue-600">{t('neurology.treatment.titleHighlight')}</span>
              </h2>
              <div className="space-y-6">
                {Object.entries(t('neurology.treatment.options', { returnObjects: true })).map(([key, option]) => (
                  <div key={key} className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white relative overflow-hidden rounded-2xl shadow-lg border border-blue-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 transform skew-x-12"></div>
            <div className="relative px-8 py-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('neurology.contact.title')}</h3>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600">{t('neurology.contact.description')}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span>{t('neurology.contact.features.quick')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>{t('neurology.contact.features.personal')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span>{t('neurology.contact.features.expert')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Link  to="/contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md text-center">
                    {t('neurology.contact.cta')}
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

export default Neurologia;