import { Calendar, Award, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MedicalTeamSection = () => {
    const { t } = useTranslation();

    const team = t('team.members', { returnObjects: true });

    return (
        <section className="py-24 bg-gray-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {t('team.title')} <span className="text-blue-600">{t('team.title_highlight')}</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('team.description')}
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group">
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl">
                                {/* Image Container */}
                                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={member.image}
                                        alt={member.name}
                                        className="relative z-10 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute -inset-2 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-600 font-medium mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {member.especialidad}
                                    </p>
                                    
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Award className="w-4 h-4 text-blue-500" />
                                        <span>{member.credentials}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-4 px-6 flex justify-around translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Link to="/equip">
                                        <button className="flex items-center gap-2 hover:text-blue-200">
                                            <Calendar className="w-4 h-4" />
                                            <span>{t('team.buttons.learn_more')}</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Banner */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white relative overflow-hidden rounded-2xl shadow-lg border border-blue-100">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 transform skew-x-12"></div>
                            <div className="relative px-8 py-12">
                                <div className="grid lg:grid-cols-3 gap-8 items-center">
                                    {/* Info Principal */}
                                    <div className="lg:col-span-2">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                            {t('team.banner.title')}
                                        </h3>
                                        <div className="space-y-4">
                                            <p className="text-lg text-gray-600">
                                                {t('team.banner.description')}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-5 h-5 text-blue-600" />
                                                    <span>{t('team.banner.features.quick_response')}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-5 h-5 text-blue-600" />
                                                    <span>{t('team.banner.features.personal_attention')}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Award className="w-5 h-5 text-blue-600" />
                                                    <span>{t('team.banner.features.expert_team')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Botón y Teléfono */}
                                    <div className="flex flex-col gap-4">
                                        <Link to="/contact"
                                            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md text-center">
                                            {t('team.banner.cta')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default MedicalTeamSection;