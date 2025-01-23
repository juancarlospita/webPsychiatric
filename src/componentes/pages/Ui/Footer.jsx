import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FooterWithLogo() {
    return (
        <footer className="bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <img 
                            src="./assets/logoWhite.png" 
                            alt="Diagnostic Logo" 
                            className="h-16"
                        />
                        <p className="text-blue-100/80 text-sm">
                            Equipo especializado en el diagnóstico y tratamiento de trastornos neurológicos y psiquiátricos.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contacto</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-blue-100/80">
                                <Phone className="w-4 h-4 text-blue-300" />
                                <span>+34 93 439 89 89</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-100/80">
                                <Mail className="w-4 h-4 text-blue-300" />
                                <span>info@diagnosticrapiddemencia.com</span>
                            </div>
                            <div className="flex items-start gap-2 text-blue-100/80">
                                <MapPin className="w-4 h-4 text-blue-300 mt-1" />
                                <span>C/Rocafort 241-5è.3ª<br />08029 Barcelona</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Enlaces de interés</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/assets/aviso_legal_diagnostic.pdf" className="text-blue-100/80 hover:text-blue-200 transition-colors">
                                    Aviso legal
                                </a>
                            </li>
                            <li>
                                <Link to="/contact" className="text-blue-100/80 hover:text-blue-200 transition-colors">
                                    Solicitar cita
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-blue-800 mt-12 pt-8">
                    <p className="text-center text-blue-100/80 text-sm">
                        © {new Date().getFullYear()} Equip De Diagnostic Rapid De La Demencia. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterWithLogo;