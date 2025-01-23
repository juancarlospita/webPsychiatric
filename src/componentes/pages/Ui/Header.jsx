import { ChevronRight, Brain, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <div className="relative min-h-screen pt-8 sm:pt-16">
                {/* Background Layout */}
                <div className="absolute inset-0">
                    <div className="grid grid-cols-12 h-full">
                        <div className="col-span-12 lg:col-span-7 bg-blue-600"></div>
                        <div className="hidden lg:block lg:col-span-5 relative">
                            <img
                                src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=2941&auto=format&fit=crop"
                                alt={t('header.images.medical_center')}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-600/50 to-blue-600"></div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Column */}
                            <div className="space-y-6 sm:space-y-8">
                                {/* Schedule Badge */}
                                <div className="inline-flex items-center gap-2 bg-white/90 px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs sm:text-sm font-medium text-blue-600 whitespace-nowrap">
                                        {t('header.flexible_schedule')}
                                    </span>
                                </div>

                                {/* Main Title */}
                                <div className="space-y-2 sm:space-y-3">
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
                                        <span>{t('header.title.team')}</span>{' '}
                                        <span className="whitespace-nowrap">{t('header.title.of')}</span>
                                        <br className="hidden sm:block" />
                                        <span>{t('header.title.neuropsychiatry')}</span>
                                    </h1>
                                    <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium">
                                        {t('header.title.cognitive_disorders')}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed">
                                    {t('header.description')}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <Link to="/contact" className="w-full sm:w-auto">
                                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-md">
                                            <span>{t('header.buttons.appointment')}</span>
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </Link>
                                    <Link to="/test-ad8" className="w-full sm:w-auto">
                                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 border border-blue-400">
                                            <Brain className="w-5 h-5" />
                                            <span>{t('header.buttons.test')}</span>
                                        </button>
                                    </Link>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-6 sm:gap-8 pt-4 sm:pt-6">
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-bold text-white">15+</p>
                                        <p className="text-xs sm:text-sm text-white/90">{t('header.stats.years')}</p>
                                    </div>
                                    <div className="w-px h-12 bg-white/20"></div>
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-bold text-white">5000+</p>
                                        <p className="text-xs sm:text-sm text-white/90">{t('header.stats.patients')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Doctor Image */}
                            <div className="relative hidden lg:block">
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <div className="aspect-[4/3]">
                                        <img
                                            src="/assets/xavierBatalla.jpeg"
                                            alt={t('header.images.consultation')}
                                            className="w-full h-full object-cover object-[50%_25%]"
                                        />
                                    </div>
                                </div>

                                {/* Floating Stats Card */}
                                <div className="absolute -right-4 lg:-right-8 bottom-12 bg-white p-4 sm:p-6 rounded-lg shadow-lg w-56 sm:w-64 border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-600">{t('header.stats.satisfaction.title')}</p>
                                            <p className="text-base sm:text-lg font-bold text-gray-900">{t('header.stats.satisfaction.value')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Skewed Section */}
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="relative h-24 sm:h-32">
                        <div className="absolute inset-0 bg-gray-50 transform -skew-y-3 origin-bottom-right shadow-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;