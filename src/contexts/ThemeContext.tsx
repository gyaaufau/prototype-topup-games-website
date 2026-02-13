import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'teal' | 'pink';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        return savedTheme || 'teal';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);

        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);

        // Update CSS variables based on theme
        const root = document.documentElement;
        if (theme === 'pink') {
            // Pink/Purple theme (matching main branch design)
            root.style.setProperty('--color-primary', '#ec4899');        // pink-500
            root.style.setProperty('--color-primary-hover', '#db2777');  // pink-600
            root.style.setProperty('--color-primary-light', '#f472b6');  // pink-400
            root.style.setProperty('--color-secondary', '#a855f7');      // purple-500
            root.style.setProperty('--color-bg-main', '#020617');        // slate-950
            root.style.setProperty('--color-bg-card', '#0f172a');        // slate-900
            root.style.setProperty('--color-bg-secondary', '#1e293b');   // slate-800
            root.style.setProperty('--color-border', '#334155');         // slate-700
            // RGB values
            root.style.setProperty('--color-primary-rgb', '236, 72, 153');
            root.style.setProperty('--color-bg-main-rgb', '2, 6, 23');
            root.style.setProperty('--color-bg-card-rgb', '15, 23, 42');
        } else {
            // Teal/Dark theme
            root.style.setProperty('--color-primary', '#5F9598');
            root.style.setProperty('--color-primary-hover', '#47878a');
            root.style.setProperty('--color-primary-light', '#75bdc3');
            root.style.setProperty('--color-secondary', '#1D546D');
            root.style.setProperty('--color-bg-main', '#061E29');
            root.style.setProperty('--color-bg-card', '#0a2838');
            root.style.setProperty('--color-bg-secondary', '#0f3447');
            root.style.setProperty('--color-border', '#1D546D');
            // RGB values
            root.style.setProperty('--color-primary-rgb', '95, 149, 152');
            root.style.setProperty('--color-bg-main-rgb', '6, 30, 41');
            root.style.setProperty('--color-bg-card-rgb', '10, 40, 56');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'teal' ? 'pink' : 'teal');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
