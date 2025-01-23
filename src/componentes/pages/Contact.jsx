import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();

    const motivos = t('contacts.form.reason.options', { returnObjects: true });

    return (
        <div className="min-h-screen bg-gray-50 mt-40">
            {/* Hero Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('contacts.hero.title')} <span className="text-blue-600">{t('contacts.hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            {t('contacts.hero.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Información de contacto */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {t('contacts.info.phone.title')}
                            </h3>
                            <div className="space-y-2">
                                <p className="text-gray-600">{t('contacts.info.phone.tel')}: 93 439 89 89</p>
                                <p className="text-gray-600">{t('contacts.info.phone.fax')}: 93 430 19 75</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {t('contacts.info.email.title')}
                            </h3>
                            <p className="text-gray-600">info@diagnosticrapiddemencia.com</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {t('contacts.info.address.title')}
                            </h3>
                            <p className="text-gray-600">C/Rocafort 241-5è.3ª</p>
                            <p className="text-gray-600">08029 Barcelona</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa y Formulario */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mapa */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contacts.map.title')}</h3>
                            <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6461509646347!2d2.1472872!3d41.3835083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a27d58585c6b%3A0x7c5a6e8964c8c634!2sCarrer%20de%20Rocafort%2C%20241%2C%2008029%20Barcelona!5e0!3m2!1ses!2ses!4v1673891234567!5m2!1ses!2ses"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl"
                                    title={t('contacts.map.iframe')}
                                ></iframe>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contacts.form.title')}</h3>
                            <form className="space-y-6" action="https://formsubmit.co/juanpitalves@gmail.com" method="POST">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('contacts.form.name')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="nom"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('contacts.form.phone')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="tel"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contacts.form.email')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('contacts.form.reason.label')} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="reason"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    >
                                        <option value="">{t('contacts.form.reason.placeholder')}</option>
                                        {Object.entries(motivos).map(([key, value]) => (
                                            <option key={key} value={key}>{value}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" name="message">
                                        {t('contacts.form.message')} <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        required
                                        id="privacyPolicy"
                                        className="mt-1"
                                    />
                                    <label htmlFor="privacyPolicy" className="text-sm text-gray-700">
                                        {t('contacts.form.privacyPolicy')} <span className="text-red-500">*</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg"
                                >
                                    {t('contacts.form.submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};