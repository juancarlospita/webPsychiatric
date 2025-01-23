import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Users, Clock, ArrowRight, Phone, Mail, MapPin, Calendar} from 'lucide-react';
import { Link } from 'react-router-dom';

const Centre = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const specialties = [
        {
            icon: <Brain className="w-8 h-8 text-white" />,
            title: t('centre.specialties.diagnostic.title'),
            description: t('centre.specialties.diagnostic.description')
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: t('centre.specialties.team.title'),
            description: t('centre.specialties.team.description')
        },
        {
            icon: <Clock className="w-8 h-8 text-white" />,
            title: t('centre.specialties.attention.title'),
            description: t('centre.specialties.attention.description')
        }
    ];

    const images = [
        {
            url: "./assets/consultorio1.jpg",
            alt: t('centre.facilities.images.consultation.alt'),
            title: t('centre.facilities.images.consultation.title')
        },
        {
            url: "./assets/consultorio2.jpg",
            alt: t('centre.facilities.images.evaluation.alt'),
            title: t('centre.facilities.images.evaluation.title')
        },
        {
            url: "./assets/consultorio3.jpg",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        },
        {
            url: "./assets/consultorio4.jpg",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        },
        {
            url: "./assets/consultorio5.jpg",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        },
        {
            url: "./assets/consultorio6.jpg",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        },
        {
            url: "./assets/consultorio7.jpeg",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        },
        {
            url: "./assets/consultorio8.JPG",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        },
        {
            url: "./assets/consultorio9.JPG",
            alt: t('centre.facilities.images.therapy.alt'),
            title: t('centre.facilities.images.therapy.title')
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-44 pb-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-white"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="lg:flex items-center gap-16">
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                {t('centre.header.title')} <span className="text-blue-600">{t('centre.header.titleHighlight')}</span>
                            </h1>
                            <div className="w-20 h-1 bg-blue-600"></div>
                            <p className="text-lg text-gray-600">
                                {t('centre.header.description')}
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="./assets/consultorio6.jpg"
                                    alt={t('centre.header.imageAlt')}
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex gap-16 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-900 text-center lg:text-left">
                                {t('centre.about.title')}
                            </h1>
                            <p className="text-lg text-gray-600 mt-4">
                                {t('centre.about.description1')}
                            </p>
                            <p className="text-lg text-gray-600">
                                {t('centre.about.description2')}
                            </p>
                            <p className="text-lg text-gray-600">
                                {t('centre.about.description3')}
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
                            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3"
                                    alt={t('centre.about.image_alt')}
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-24">
                        {specialties.map((specialty, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    {specialty.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                                    {specialty.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {specialty.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                        {t('centre.ourSpecialties.title')} <span className="text-blue-600">{t('centre.ourSpecialties.titleHighlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
                        {t('centre.ourSpecialties.description')}
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Neurologia */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {t('centre.ourSpecialties.neurology.title')}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {t('centre.ourSpecialties.neurology.description')}
                            </p>
                            <ul className="space-y-4">
                                {t('centre.ourSpecialties.neurology.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Psiquiatria */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {t('centre.ourSpecialties.psychiatry.title')}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {t('centre.ourSpecialties.psychiatry.description')}
                            </p>
                            <ul className="space-y-4">
                                {t('centre.ourSpecialties.psychiatry.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Neuropsicologia */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {t('centre.ourSpecialties.neuropsychology.title')}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {t('centre.ourSpecialties.neuropsychology.description')}
                            </p>
                            <ul className="space-y-4">
                                {t('centre.ourSpecialties.neuropsychology.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Psicologia */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {t('centre.ourSpecialties.psychology.title')}
                            </h3>
                            <p className="text-gray-600 mb-6 text-center">
                                {t('centre.ourSpecialties.psychology.description')}
                            </p>
                            <ul className="space-y-4">
                                {t('centre.ourSpecialties.psychology.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                        {t('centre.facilities.title')} <span className="text-blue-600">{t('centre.facilities.titleHighlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
                        {t('centre.facilities.description')}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {t('centre.facilities.spaces.title')}
                            </h3>
                            <ul className="space-y-4">
                                {t('centre.facilities.spaces.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {t('centre.facilities.amenities.title')}
                            </h3>
                            <ul className="space-y-4">
                                {t('centre.facilities.amenities.items', { returnObjects: true }).map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <ArrowRight className="w-5 h-5 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative mt-16">
                        <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
                        <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <div className="relative h-[550px]">
                                <img
                                    src={images[currentSlide].url}
                                    alt={images[currentSlide].alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-white text-2xl font-bold text-center">
                                        {images[currentSlide].title}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            aria-label={t('centre.facilities.carousel.previous')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            aria-label={t('centre.facilities.carousel.next')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                                        }`}
                                    aria-label={t('centre.facilities.carousel.goToSlide', { number: index + 1 })}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact and Location Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                        {t('centre.contact.title')} <span className="text-blue-600">{t('centre.contact.titleHighlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
                        {t('centre.contact.description')}
                    </p>
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t('centre.contact.contactUs')}</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <Phone className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{t('centre.contact.phone.title')}</p>
                                            <p className="text-gray-600">{t('centre.contact.phone.number')}</p>
                                            <p className="text-gray-600">{t('centre.contact.phone.fax')}</p>
                                            <p className="text-sm text-gray-500 mt-1">{t('centre.contact.phone.schedule')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <Mail className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{t('centre.contact.email.title')}</p>
                                            <p className="text-gray-600">{t('centre.contact.email.address')}</p>
                                            <p className="text-sm text-gray-500 mt-1">{t('centre.contact.email.response')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <MapPin className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{t('centre.contact.address.title')}</p>
                                            <p className="text-gray-600">{t('centre.contact.address.street')}</p>
                                            <p className="text-gray-600">{t('centre.contact.address.city')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <Clock className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{t('centre.contact.schedule.title')}</p>
                                            <p className="text-gray-600">{t('centre.contact.schedule.days')}</p>
                                            <p className="text-gray-600">{t('centre.contact.schedule.hours')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Link to="/contact">
                                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors w-full flex items-center justify-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            {t('centre.contact.requestAppointment')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-3">
                            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                                <div className="relative rounded-xl overflow-hidden mb-6">
                                    <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
                                    <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
                                    <div className="relative rounded-xl overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6461509646347!2d2.1472872!3d41.3835083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a27d58585c6b%3A0x7c5a6e8964c8c634!2sCarrer%20de%20Rocafort%2C%20241%2C%2008029%20Barcelona!5e0!3m2!1ses!2ses!4v1673891234567!5m2!1ses!2ses"
                                            width="100%"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={t('centre.location.mapTitle')}
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xl font-bold text-gray-900 text-center">{t('centre.location.howToArrive')}</h4>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">M</span>
                                                <span>
                                                    <strong className="block text-gray-900">{t('centre.location.metro.title')}</strong>
                                                    {t('centre.location.metro.lines')}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">B</span>
                                                <span>
                                                    <strong className="block text-gray-900">{t('centre.location.bus.title')}</strong>
                                                    {t('centre.location.bus.lines')}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-xl">
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">P</span>
                                                <span>
                                                    <strong className="block text-gray-900">{t('centre.location.parking.title')}</strong>
                                                    {t('centre.location.parking.description')}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Centre;