import { useState } from "react";
import { Clock, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export const TestAD8 = () => {
    const { t } = useTranslation();
    const [respuestas, setRespuestas] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [testCompleted, setTestCompleted] = useState(false);

    const preguntas = t('testAD8.questions', { returnObjects: true });

    const manejarCambio = (item, valor) => {
        setRespuestas((prev) => ({
            ...prev,
            [item]: valor,
        }));
    };

    const puntuacionTotal = Object.values(respuestas).filter(
        (respuesta) => respuesta === "si"
    ).length;

    const reiniciarFormulario = () => {
        setRespuestas({});
        setTestCompleted(false);
        setShowForm(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const mostrarFormulario = () => {
        setShowForm(true);
        setTimeout(() => {
            const formElement = document.querySelector('.test-form-container');
            if (formElement) {
                const headerOffset = 150; // Aumentado para compensar el navbar
                window.scrollTo({
                    top: formElement.offsetTop - headerOffset,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    const opciones = [
        { label: t('testAD8.options.yes'), value: "si" },
        { label: t('testAD8.options.no'), value: "no_contesta" },
        { label: t('testAD8.options.unknown'), value: "no" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 mt-36">
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl mx-auto text-center mb-16 px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('testAD8.title')} <span className="text-blue-600">AD8</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            {t('testAD8.subtitle')}
                        </p>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-base md:text-lg text-gray-600">
                            {t('testAD8.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {t('testAD8.info.who.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('testAD8.info.who.description')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {t('testAD8.info.time.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('testAD8.info.time.description')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {t('testAD8.info.precision.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('testAD8.info.precision.description')}
                            </p>
                        </div>
                    </div>

                    {!showForm && (
                        <div className="text-center mt-16">
                            <button
                                onClick={mostrarFormulario}
                                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 shadow-lg"
                            >
                                {t('testAD8.buttons.start')}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {showForm && !testCompleted && (
                <section className="py-14 bg-gray-50">
                    <div className="test-form-container">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg relative">
                                <button 
                                    onClick={() => setShowForm(false)}
                                    className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600"
                                    aria-label="Cerrar test"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                {preguntas.map((pregunta, index) => (
                                    <div key={index} className="mb-6 md:mb-8 last:mb-0">
                                        <p className="text-base md:text-lg text-gray-900 font-medium mb-3 md:mb-4">{pregunta}</p>
                                        <div className="space-y-2 md:space-y-3">
                                            {opciones.map((option) => (
                                                <label
                                                    key={option.value}
                                                    className="flex items-center p-3 md:p-4 rounded-xl border border-gray-200 hover:bg-blue-50 cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`item${index}`}
                                                        value={option.value}
                                                        checked={respuestas[index] === option.value}
                                                        onChange={() => manejarCambio(index, option.value)}
                                                        className="w-4 h-4 accent-blue-600"
                                                    />
                                                    <span className="ml-3 text-gray-700">
                                                        {option.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-8 text-center">
                                    <button
                                        onClick={() => {
                                            const todasRespondidas = preguntas.every((_, index) => respuestas[index] !== undefined);
                                            if (todasRespondidas) {
                                                setTestCompleted(true);
                                                if (puntuacionTotal >= 4) {
                                                    const resultado = window.confirm(t('testAD8.recommendations.contact'));
                                                    if (resultado) {
                                                        setShowForm(false);
                                                        setTimeout(() => {
                                                            const contactSection = document.getElementById('contact-banner');
                                                            if (contactSection) {
                                                                window.scrollTo({
                                                                    top: contactSection.offsetTop - 100,
                                                                    behavior: 'smooth'
                                                                });
                                                            }
                                                        }, 100);
                                                    }
                                                }
                                            } else {
                                                alert(t('testAD8.alerts.answerAll'));
                                            }
                                        }}
                                        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 shadow-lg"
                                    >
                                        {t('testAD8.buttons.finish')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {testCompleted && (
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {t('testAD8.results.title')}
                            </h2>
                            <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8">
                                {puntuacionTotal}
                            </div>
                            <p className="text-gray-600 mb-8">
                                {puntuacionTotal >= 4
                                    ? t('testAD8.results.contact')
                                    : t('testAD8.results.normal')}
                            </p>
                            <button
                                onClick={reiniciarFormulario}
                                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 shadow-lg"
                            >
                                {t('testAD8.buttons.restart')}
                            </button>
                        </div>
                    </div>
                </section>
            )}

            <section id="contact-banner" className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white relative overflow-hidden rounded-2xl shadow-lg border border-blue-100">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50"></div>
                        <div className="relative px-8 py-12">
                            <div className="grid lg:grid-cols-3 gap-8 items-center">
                                <div className="lg:col-span-2">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {t('testAD8.contact.title')}
                                    </h3>
                                    <div className="space-y-4">
                                        <p className="text-lg text-gray-600">
                                            {t('testAD8.contact.description')}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-blue-600" />
                                                <span>{t('testAD8.contact.features.quick')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-5 h-5 text-blue-600" />
                                                <span>{t('testAD8.contact.features.personal')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Award className="w-5 h-5 text-blue-600" />
                                                <span>{t('testAD8.contact.features.expert')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Link to="/contact"
                                        className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 shadow-md text-center">
                                        {t('testAD8.contact.buttons.request')}
                                    </Link>
                                    <div className="text-center">
                                        <p className="text-gray-600 mb-1">{t('testAD8.contact.buttons.call')}</p>
                                        <p className="text-xl font-semibold text-blue-600">+34 93 439 89 89</p>
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

export default TestAD8;