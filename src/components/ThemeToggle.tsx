import { useTheme } from '../contexts/ThemeContext';
import { Palette } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold text-sm hover:scale-105"
            style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
            }}
            title={`Switch to ${theme === 'teal' ? 'Pink' : 'Teal'} theme`}
        >
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">
                {theme === 'teal' ? 'Teal' : 'Pink'}
            </span>

            {/* Toggle indicator */}
            <div className="relative w-10 h-5 bg-white/20 rounded-full ml-2">
                <div
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${theme === 'pink' ? 'translate-x-5' : 'translate-x-0'
                        }`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;
