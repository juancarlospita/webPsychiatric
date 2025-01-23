import { CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 transform skew-x-12"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {t('contact.title')} <span className="text-blue-600">{t('contact.title_highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('contact.phone.title')}</h3>
                                    <p className="text-gray-600">{t('contact.phone.value')}</p>
                                    <p className="text-sm text-gray-500 mt-1">{t('contact.phone.description')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('contact.email.title')}</h3>
                                    <p className="text-gray-600">{t('contact.email.value')}</p>
                                    <p className="text-sm text-gray-500 mt-1">{t('contact.email.description')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('contact.location.title')}</h3>
                                    <p className="text-gray-600">{t('contact.location.address')}</p>
                                    <p className="text-gray-600">{t('contact.location.city')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('contact.schedule.title')}</h3>
                                    <p className="text-gray-600">{t('contact.schedule.days')}</p>
                                    <p className="text-gray-600">{t('contact.schedule.hours')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.cta.title')}</h3>
                        <div className="space-y-6">
                            <p className="text-gray-600">
                                {t('contact.cta.description')}
                            </p>
                            <div className="space-y-4">
                                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    <CalendarDays className="w-5 h-5" />
                                    {t('contact.cta.appointment')}
                                </button>
                                <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    {t('contact.cta.call')}
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 text-center mt-4">
                                {t('contact.cta.additional')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;