'use client';

import { useState, ReactNode } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className={styles.title}>{title}</h2>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
          <ChevronIcon />
        </span>
      </button>
      <div
        className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}
