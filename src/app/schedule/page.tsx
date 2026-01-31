import { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Schedule | Zachary Jones',
  description: 'Schedule a meeting with Zachary Jones',
};

export default function SchedulePage() {
  return (
    <div className={styles.schedule}>
      <h1 className={styles.pageTitle}>Schedule a Meeting</h1>
      <p className={styles.description}>
        Select a time that works for you below. I look forward to connecting.
      </p>
      <div className={styles.embedContainer}>
        {/*
          Replace the src URL with your Google Calendar Booking Page URL.
          To get your booking page URL:
          1. Go to Google Calendar
          2. Click the gear icon > Settings
          3. Find "Appointment schedules" on the left
          4. Create or select a schedule
          5. Copy the booking page URL
        */}
        <iframe
          src={siteConfig.calendarUrl}
          className={styles.iframe}
          title="Schedule a meeting"
          loading="lazy"
        />
      </div>
      <p className={styles.note}>
        If the calendar doesn&apos;t load, you can{' '}
        <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
          open it directly
        </a>
        .
      </p>
    </div>
  );
}
