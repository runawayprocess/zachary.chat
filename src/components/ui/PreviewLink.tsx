'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './PreviewLink.module.css';

interface PreviewLinkProps {
  href: string;
  children: ReactNode;
  previewImage?: string;
  previewAlt?: string;
  external?: boolean;
}

export function PreviewLink({
  href,
  children,
  previewImage,
  previewAlt = 'Link preview',
  external = false,
}: PreviewLinkProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!previewImage || !linkRef.current) return;

    // Delay showing preview for smoother UX
    timeoutRef.current = setTimeout(() => {
      if (!linkRef.current) return;

      const rect = linkRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      // Position above the link, centered horizontally
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + scrollY - 10,
      });
      setIsVisible(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const linkProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  const preview =
    mounted &&
    isVisible &&
    previewImage &&
    createPortal(
      <div
        className={styles.preview}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <Image
          src={previewImage}
          alt={previewAlt}
          width={280}
          height={180}
          className={styles.previewImage}
        />
      </div>,
      document.body
    );

  return (
    <>
      <a
        ref={linkRef}
        href={href}
        className={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...linkProps}
      >
        {children}
      </a>
      {preview}
    </>
  );
}
