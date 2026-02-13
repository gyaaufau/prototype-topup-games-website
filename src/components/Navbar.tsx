import { Link } from 'react-router-dom';
import { Search, Menu, X, Gamepad2 } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-[#061E29]/95 backdrop-blur-md border-b border-[#1D546D] sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="shrink-0 group">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-br from-[#5F9598] to-[#1D546D] p-2 rounded-lg group-hover:scale-110 transition-transform">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#5F9598] to-[#1D546D] bg-clip-text text-transparent">
                                GyaStore
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Search Bar */}
                    <div className="flex-1 max-w-md mx-4 hidden md:block">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search your favorite games..."
                                className="w-full bg-[#1D546D] text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#5F9598] focus:bg-[#0f3447] transition-all border border-[#0f3447] hover:border-[#1D546D]"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[#5F9598]" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Login Button - Desktop */}
                        <button className="hidden sm:flex items-center gap-2 bg-[#5F9598] hover:bg-[#47878a] text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#5F9598]/30 hover:scale-105">
                            <span>Login</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="sm:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search & Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    <div className="space-y-4">
                        {/* Mobile Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search games..."
                                className="w-full bg-[#1D546D] text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#5F9598] border border-[#0f3447]"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        </div>

                        {/* Mobile Login Button */}
                        <button className="w-full bg-[#5F9598] hover:bg-[#47878a] text-white font-bold py-3 rounded-xl transition-all duration-200">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
