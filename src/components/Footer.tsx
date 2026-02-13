import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#061E29] border-t border-[#1D546D] mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">                    <Link to="/" className="inline-flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-[#5F9598] to-[#1D546D] p-2 rounded-lg group-hover:scale-110 transition-transform">
                            <Gamepad2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-black bg-gradient-to-r from-[#5F9598] to-[#1D546D] bg-clip-text text-transparent">
                            GyaStore
                        </span>
                    </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted platform for game top-up. Fast, secure, and reliable service 24/7.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">                        <a
                            href="#"
                            className="bg-[#1D546D] hover:bg-[#5F9598] text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-4 h-4" />
                        </a>
                            <a
                                href="#"
                                className="bg-[#1D546D] hover:bg-[#5F9598] text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="bg-[#1D546D] hover:bg-[#5F9598] text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="bg-[#1D546D] hover:bg-[#5F9598] text-slate-400 hover:text-white p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
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
                                <Link to="/" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
                                    All Games
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
                                    Promotions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
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
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
                                    How to Order
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">
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
                                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#5F9598]" />
                                <span>support@gyastore.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#5F9598]" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#5F9598]" />
                                <span>Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-[#1D546D]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-slate-400 text-sm text-center sm:text-left">
                            &copy; 2026 GyaStore. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                            <a href="#" className="text-slate-400 hover:text-[#75bdc3] transition-colors">
                                Privacy
                            </a>
                            <span className="text-slate-700">•</span>
                            <a href="#" className="text-slate-400 hover:text-[#75bdc3] transition-colors">
                                Terms
                            </a>
                            <span className="text-slate-700">•</span>
                            <a href="#" className="text-slate-400 hover:text-[#75bdc3] transition-colors">
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
