import { Link } from 'react-router-dom';
import { Search, Menu, X, Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <nav
            className="backdrop-blur-md border-b sticky top-0 z-50 shadow-lg"
            style={{
                backgroundColor: 'rgba(var(--color-bg-main-rgb, 6, 30, 41), 0.95)',
                borderColor: 'var(--color-border)'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="shrink-0 group">
                        <div className="flex items-center gap-2">
                            <div
                                className="p-2 rounded-lg group-hover:scale-110 transition-transform"
                                style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
                            >
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <span
                                className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent"
                                style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}
                            >
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
                                className="w-full text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 transition-all border"
                                style={{
                                    backgroundColor: 'var(--color-secondary)',
                                    borderColor: 'var(--color-bg-secondary)'
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                    e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-bg-secondary)';
                                    e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                                }}
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-[var(--color-primary)]" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Login Button - Desktop */}
                        <button
                            className="hidden sm:flex items-center gap-2 text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg hover:scale-105"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                        >
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
                                className="w-full text-white placeholder-slate-400 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 border"
                                style={{
                                    backgroundColor: 'var(--color-secondary)',
                                    borderColor: 'var(--color-bg-secondary)'
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-bg-secondary)'}
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        </div>

                        {/* Mobile Login Button */}
                        <button
                            className="w-full text-white font-bold py-3 rounded-xl transition-all duration-200"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
