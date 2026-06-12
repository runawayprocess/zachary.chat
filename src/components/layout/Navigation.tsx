'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/providers/ThemeProvider';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navigation.module.css';

const navItems = [
  { href: '/', label: 'Main' },
  { href: '/cv', label: 'CV' },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.tabsRow}>
        <div className={styles.tabs}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.tab} ${isActive(item.href) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={`${styles.fleuron} ${theme === 'dark' ? styles.rose : ''}`}>
          {theme === 'dark' ? '✿' : '❧'}
        </span>
        <span className={styles.dividerLine} />
      </div>
    </nav>
  );
}
