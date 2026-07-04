import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * The inline script in <head> sets `data-theme` on <html> before paint;
 * this island only reflects and toggles it. SSR assumes light (the design
 * default) and syncs on mount to avoid hydration mismatches.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (document.documentElement.dataset.theme === 'dark') setTheme('dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode etc. — theme just won't persist */
    }
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle colour theme">
      <span aria-hidden="true" className="theme-toggle-glyph">
        {theme === 'dark' ? '☀' : '☾'}
      </span>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
