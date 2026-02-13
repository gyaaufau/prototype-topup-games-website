import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="border-t mt-auto"
            style={{
                backgroundColor: 'var(--color-bg-main)',
                borderColor: 'var(--color-border)'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center gap-2 group">
                            <div
                                className="p-2 rounded-lg group-hover:scale-110 transition-transform"
                                style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
                            >
                                <Gamepad2 className="w-5 h-5 text-white" />
                            </div>
                            <span
                                className="text-xl font-black bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}
                            >
                                GyaStore
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted platform for game top-up. Fast, secure, and reliable service 24/7.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                                style={{ backgroundColor: 'var(--color-secondary)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                                style={{ backgroundColor: 'var(--color-secondary)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                                style={{ backgroundColor: 'var(--color-secondary)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                                style={{ backgroundColor: 'var(--color-secondary)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
                                aria-label="Github"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    All Games
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    Promotions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    How to Order
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 transition-colors text-sm hover:text-[var(--color-primary-light)]">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                                <span>support@gyastore.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                                <span>Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-slate-400 text-sm text-center sm:text-left">
                            &copy; 2026 GyaStore. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                            <a
                                href="#"
                                className="text-slate-400 transition-colors"
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-light)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                Privacy
                            </a>
                            <span className="text-slate-700">•</span>
                            <a
                                href="#"
                                className="text-slate-400 transition-colors"
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-light)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                Terms
                            </a>
                            <span className="text-slate-700">•</span>
                            <a
                                href="#"
                                className="text-slate-400 transition-colors"
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-light)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                Help
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
