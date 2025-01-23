import { Activity, Brain, Heart, Lightbulb, Stethoscope } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Header from "./Ui/Header";
import MedicalTeamSection from "./Ui/MedicalTeam";

export const Home = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
            title: t('services.neurology.title'),
            description: t('services.neurology.description'),
            conditions: t('services.neurology.conditions', { returnObjects: true }),
            isDark: false
        },
        {
            icon: <Activity className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
            title: t('services.psychiatry.title'),
            description: t('services.psychiatry.description'),
            conditions: t('services.psychiatry.conditions', { returnObjects: true }),
            isDark: true
        },
        {
            icon: <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8 text-white" />,
            title: t('services.cognitive.title'),
            description: t('services.cognitive.description'),
            conditions: t('services.cognitive.conditions', { returnObjects: true }),
            isDark: false
        }
    ];

    const treatments = [
        {
            icon: <Stethoscope className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
            title: t('treatments.evaluation.title'),
            description: t('treatments.evaluation.description')
        },
        {
            icon: <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
            title: t('treatments.cognitive.title'),
            description: t('treatments.cognitive.description')
        },
        {
            icon: <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />,
            title: t('treatments.lifestyle.title'),
            description: t('treatments.lifestyle.description')
        }
    ];

    const preventionTips = t('prevention.tips', { returnObjects: true });

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Header />
            
            {/* Services Section */}
            <section className="relative py-16 sm:py-24 bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-white"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                            {t('services.title')} <span className="text-blue-700">{t('services.title_highlight')}</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700">
                            {t('services.subtitle')}
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`rounded-xl shadow-lg p-6 sm:p-8 ${service.isDark ? 'bg-blue-50' : 'bg-white'}`}
                            >
                                <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-md ${
                                    service.isDark ? 'bg-blue-700' : 'bg-blue-600'
                                }`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${
                                    service.isDark ? 'text-blue-800' : 'text-gray-900'
                                }`}>
                                    {service.title}
                                </h3>
                                <p className={`mb-4 sm:mb-6 leading-relaxed ${
                                    service.isDark ? 'text-blue-900' : 'text-gray-700'
                                }`}>
                                    {service.description}
                                </p>
                                <div className="space-y-2 sm:space-y-3">
                                    {service.conditions.map((condition, idx) => (
                                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                                            <div className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${
                                                service.isDark ? 'bg-blue-700' : 'bg-blue-600'
                                            }`}></div>
                                            <span className={`text-sm sm:text-base ${
                                                service.isDark ? 'text-blue-900' : 'text-gray-800'
                                            }`}>{condition}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex gap-8 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                {t('diagnosis.title')} <span className="text-blue-600">{t('diagnosis.title_highlight')}</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600">
                                {t('diagnosis.description')}
                            </p>

                            {/* Prevention Tips */}
                            <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    {t('prevention.title')}
                                </h3>
                                <div className="space-y-2 sm:space-y-3">
                                    {preventionTips.map((tip, index) => (
                                        <div key={index} className="flex items-center gap-2 sm:gap-3">
                                            <div className="relative flex items-center justify-center">
                                                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-600 rounded-full"></div>
                                                <div className="absolute w-4 sm:w-5 h-4 sm:h-5 bg-blue-200 rounded-full opacity-50 animate-ping"></div>
                                            </div>
                                            <span className="text-sm sm:text-base text-gray-700 py-1.5 sm:py-2 px-3 sm:px-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm flex-grow">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:w-1/2 relative mt-8 lg:mt-0">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="./assets/leer.jpg"
                                    alt={t('diagnosis.images.medical_team')}
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Treatment Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24">
                        {treatments.map((treatment, index) => (
                            <div key={index} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                                <div className="bg-blue-50 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    {treatment.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                    {treatment.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {treatment.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prevention Section */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex gap-8 lg:gap-16 items-center">
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative mb-8 lg:mb-0 order-2 lg:order-1">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="./assets/ejercicio.jpg"
                                    alt={t('prevention.images.activities')}
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 space-y-4 sm:space-y-6 order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                {t('prevention.section_title')} <span className="text-blue-600">{t('prevention.section_title_highlight')}</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600">
                                {t('prevention.intro')}
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                {preventionTips.map((tip, index) => (
                                    <div key={index} className="relative flex items-center gap-2 sm:gap-3">
                                        <div className="relative flex items-center justify-center">
                                            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-600 rounded-full"></div>
                                            <div className="absolute w-4 sm:w-5 h-4 sm:h-5 bg-blue-200 rounded-full opacity-50 animate-ping"></div>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700">{tip}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base sm:text-lg text-gray-600 mt-6 sm:mt-8">
                                {t('prevention.conclusion')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <MedicalTeamSection />
        </div>
    );
};

export default Home;