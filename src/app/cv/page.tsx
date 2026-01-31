import { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'CV | Zachary Jones',
  description: 'Curriculum Vitae of Zachary Jones - Portfolio, Coursework, and Career',
};

export default function CVPage() {
  return (
    <div className={styles.cv}>
      <h1 className={styles.pageTitle}>Curriculum Vitae</h1>

      <Accordion title="Portfolio" defaultOpen>
        <div className={styles.section}>
          <div className={styles.item}>
            <h3>Project Name</h3>
            <p className={styles.meta}>2024 - Present</p>
            <p>
              Description of the project and your role. What technologies did you use?
              What was the impact or outcome?
            </p>
          </div>

          <div className={styles.item}>
            <h3>Another Project</h3>
            <p className={styles.meta}>2023</p>
            <p>
              Brief description of this project. Include links if relevant.
            </p>
          </div>

          {/* Add more portfolio items as needed */}
        </div>
      </Accordion>

      <Accordion title="Coursework">
        <div className={styles.section}>
          <div className={styles.item}>
            <h3>Course or Certification Name</h3>
            <p className={styles.meta}>Institution, Year</p>
            <p>Brief description or key learnings from this course.</p>
          </div>

          <div className={styles.item}>
            <h3>Another Course</h3>
            <p className={styles.meta}>Institution, Year</p>
            <p>What did you learn? Any notable projects or achievements?</p>
          </div>

          {/* Add more coursework items as needed */}
        </div>
      </Accordion>

      <Accordion title="Career">
        <div className={styles.section}>
          <div className={styles.item}>
            <h3>Job Title</h3>
            <p className={styles.meta}>Company Name | 2022 - Present</p>
            <ul>
              <li>Key achievement or responsibility</li>
              <li>Another accomplishment with measurable impact</li>
              <li>Skills developed or technologies used</li>
            </ul>
          </div>

          <div className={styles.item}>
            <h3>Previous Role</h3>
            <p className={styles.meta}>Previous Company | 2020 - 2022</p>
            <ul>
              <li>Description of your work and impact</li>
              <li>Notable projects or achievements</li>
            </ul>
          </div>

          {/* Add more career items as needed */}
        </div>
      </Accordion>
    </div>
  );
}
