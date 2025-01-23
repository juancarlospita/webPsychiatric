import { GraduationCap, Award, Brain, Users, HeartPulse, Target, Stethoscope, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Equip = () => {
    const { t } = useTranslation();

    const valors = [
        {
            icon: <HeartPulse className="w-8 h-8 text-white" />,
            title: t('teams.values.commitment.title'),
            description: t('teams.values.commitment.description')
        },
        {
            icon: <Brain className="w-8 h-8 text-white" />,
            title: t('teams.values.experience.title'),
            description: t('teams.values.experience.description')
        },
        {
            icon: <Target className="w-8 h-8 text-white" />,
            title: t('teams.values.precision.title'),
            description: t('teams.values.precision.description')
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 mt-36">
            {/* Hero Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 transform skew-x-12"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('teams.hero.title')} <span className="text-blue-600">{t('teams.hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-12">
                            {t('teams.hero.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {valors.map((valor, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all">
                                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                                    {valor.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {valor.title}
                                </h3>
                                <p className="text-gray-600">
                                    {valor.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Director Médico Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
                        {t('teams.medicalDirector.title')} <span className="text-blue-600">{t('teams.medicalDirector.titleHighlight')}</span>
                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="lg:flex items-stretch">
                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-blue-600/90 transform -skew-x-6"></div>
                                <div className="relative h-full min-h-[500px]">
                                    <img
                                        src="./assets/xavierBatalla.jpeg"
                                        alt={t('teams.medicalDirector.imageAlt')}
                                        className="absolute inset-0 w-full h-full object-cover object-[50%_25%]"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-12">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Dr. Xavier Batalla Garangou</h2>
                                    <p className="text-xl text-blue-600 font-semibold">{t('teams.medicalDirector.role')}</p>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <GraduationCap className="w-5 h-5 text-blue-600" />
                                            {t('teams.medicalDirector.education.title')}
                                        </h3>
                                        <ul className="space-y-2 text-gray-600">
                                            {t('teams.medicalDirector.education.items', { returnObjects: true }).map((item, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <Stethoscope className="w-5 h-5 text-blue-600" />
                                                {t('teams.medicalDirector.specialties.neurology.title')}
                                            </h4>
                                            <ul className="space-y-2 text-gray-600">
                                                {t('teams.medicalDirector.specialties.neurology.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <Brain className="w-5 h-5 text-blue-600" />
                                                {t('teams.medicalDirector.specialties.psychiatry.title')}
                                            </h4>
                                            <ul className="space-y-2 text-gray-600">
                                                {t('teams.medicalDirector.specialties.psychiatry.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
                        {t('teams.specialists.title')} <span className="text-blue-600">{t('teams.specialists.titleHighlight')}</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Isabel Gómez-Ruiz */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                            <div className="md:flex">
                                <div className="md:w-2/5">
                                    <div className="relative h-full">
                                        <div className="absolute inset-0 bg-blue-600/90 transform -skew-x-6"></div>
                                        <img
                                            src="./assets/isabel_gomez.JPG"
                                            alt={t('teams.specialists.isabel.imageAlt')}
                                            className="relative h-full w-full"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('teams.specialists.isabel.name')}</h3>
                                    <p className="text-lg text-blue-600 font-semibold mb-4">{t('teams.specialists.isabel.role')}</p>

                                    <div className="space-y-4">
                                        <p className="text-gray-600">
                                            {t('teams.specialists.isabel.description')}
                                        </p>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900">{t('teams.specialists.isabel.career.title')}</h4>
                                            <ul className="space-y-2 text-gray-600">
                                                {t('teams.specialists.isabel.career.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maite Delsors */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                            <div className="md:flex">
                                <div className="md:w-2/5">
                                    <div className="relative h-full lg:w-60">
                                        <div className="absolute inset-0 bg-blue-600/90 transform -skew-x-6"></div>
                                        <img
                                            src="./assets/maite_delsors.JPG"
                                            alt={t('teams.specialists.maite.imageAlt')}
                                            className="relative h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('teams.specialists.maite.name')}</h3>
                                    <p className="text-lg text-blue-600 font-semibold mb-4">{t('teams.specialists.maite.role')}</p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900">{t('teams.specialists.maite.education.title')}</h4>
                                            <ul className="space-y-2 text-gray-600">
                                                {t('teams.specialists.maite.education.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-gray-900">{t('teams.specialists.maite.specialization.title')}</h4>
                                            <p className="text-gray-600">
                                                {t('teams.specialists.maite.specialization.description')}
                                            </p>
                                            <ul className="space-y-2 text-gray-600">
                                                {t('teams.specialists.maite.specialization.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('teams.experience.title')} <span className="text-blue-600">{t('teams.experience.titleHighlight')}</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            {t('teams.experience.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('teams.experience.cards.attention.title')}</h3>
                            <p className="text-gray-600">
                                {t('teams.experience.cards.attention.description')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <GraduationCap className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('teams.experience.cards.training.title')}</h3>
                            <p className="text-gray-600">
                                {t('teams.experience.cards.training.description')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('teams.experience.cards.excellence.title')}</h3>
                            <p className="text-gray-600">
                                {t('teams.experience.cards.excellence.description')}
                            </p>
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
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {t('teams.contact.title')}
                                    </h3>
                                    <div className="space-y-4">
                                        <p className="text-lg text-gray-600">
                                            {t('teams.contact.description')}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-blue-600" />
                                                <span>{t('teams.contact.features.quick')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-5 h-5 text-blue-600" />
                                                <span>{t('teams.contact.features.personal')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Award className="w-5 h-5 text-blue-600" />
                                                <span>{t('teams.contact.features.expert')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Link to="/contact"
                                        className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md text-center">
                                        {t('teams.contact.cta')}
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

export default Equip;