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
            // Pink/Purple vibrant theme
            root.style.setProperty('--color-primary', '#ec4899');        // Hot pink
            root.style.setProperty('--color-primary-hover', '#db2777');  // Darker pink
            root.style.setProperty('--color-primary-light', '#f9a8d4');  // Light pink
            root.style.setProperty('--color-secondary', '#a855f7');      // Purple (lighter than before)
            root.style.setProperty('--color-bg-main', '#1a0b2e');        // Deep purple-black
            root.style.setProperty('--color-bg-card', '#2d1b4e');        // Dark purple
            root.style.setProperty('--color-bg-secondary', '#3d2b5e');   // Medium purple
            root.style.setProperty('--color-border', '#6d28d9');         // Vibrant purple border
            // RGB values
            root.style.setProperty('--color-primary-rgb', '236, 72, 153');
            root.style.setProperty('--color-bg-main-rgb', '26, 11, 46');
            root.style.setProperty('--color-bg-card-rgb', '45, 27, 78');
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
