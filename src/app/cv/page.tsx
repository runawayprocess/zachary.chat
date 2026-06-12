import { Metadata } from 'next';
import { Accordion } from '@/components/ui/Accordion';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'CV | Zachary Jones',
  description: 'Curriculum Vitae of Zachary Jones - Career and Education',
};

export default function CVPage() {
  return (
    <div className={styles.cv}>
      <h1 className={styles.pageTitle}>Curriculum Vitae</h1>

      <Accordion title="Career" defaultOpen>
        <div className={styles.section}>
          <div className={styles.item}>
            <h3>Mentee</h3>
            <p className={styles.meta}>Supervised Program for Alignment Research | 2026</p>
            <ul>
              <li>Market-Based Compute Permits for Frontier AI Safety with Joel Christoph and Jonas Kgomo</li>
            </ul>
          </div>

          <div className={styles.item}>
            <h3>Research and Strategy Contractor</h3>
            <p className={styles.meta}>
              <a href="https://www.themidasproject.com" target="_blank" rel="noopener noreferrer">The Midas Project</a> | 2026
            </p>
            <ul>
              <li>Andreessen Horowitz is Shaping AI Policy - while investing in a bleak vision of the future [Research and Writing Support]</li>
            </ul>
          </div>

          <div className={styles.item}>
            <h3>Fellow</h3>
            <p className={styles.meta}>Alex Bores for Congress | 2026</p>
          </div>

          <div className={styles.item}>
            <h3>Intern</h3>
            <p className={styles.meta}>
              <a href="https://www.commongood.org" target="_blank" rel="noopener noreferrer">Common Good</a> | 2025-2026
            </p>
          </div>

          <div className={styles.item}>
            <h3>Research Fellow</h3>
            <p className={styles.meta}>
              <a href="https://www.newconsensus.com" target="_blank" rel="noopener noreferrer">New Consensus</a> | 2025
            </p>
          </div>

          <div className={styles.item}>
            <h3>Quote-Driven Markets Intern</h3>
            <p className={styles.meta}>
              <a href="https://www.cmegroup.com" target="_blank" rel="noopener noreferrer">CME Group</a> | 2023
            </p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Education">
        <div className={styles.section}>
          <div className={styles.item}>
            <h3>BlueDot AI Governance</h3>
            <p className={styles.meta}>
              <a href="https://aisafetyfundamentals.com/governance" target="_blank" rel="noopener noreferrer">AI Safety Fundamentals</a> | February 2026
            </p>
          </div>

          <div className={styles.item}>
            <h3>MA Economics</h3>
            <p className={styles.meta}>CUNY Hunter College | 2024-2026</p>
            <p>Thesis: Persistent Political and Labor Market Effects of Variation in the Organizational Survival of the Knights of Labor</p>
          </div>

          <div className={styles.item}>
            <h3>BA Mathematics</h3>
            <p className={styles.meta}>CUNY Hunter College | 2024-2026</p>
          </div>

          <div className={styles.item}>
            <p className={styles.meta}>Attended Fordham University | 2021-2024</p>
          </div>

          <div className={styles.item}>
            <h3>Coursework</h3>
            <p><strong>Economics [Graduate]:</strong> Linear Econometrics, Non-Linear Econometrics, Macroeconomics, Microeconomics, Techniques for Economic Analysis, Data Analytics and Research Methods, Law and Economics, Political Economy, Financial Economics, International Finance</p>
            <p><strong>Mathematics [Graduate]:</strong> Stochastic Methods in Finance, Advanced Concepts in Financial Markets, Advanced Probability Theory II, Mathematical Statistics</p>
            <p><strong>Mathematics [Undergraduate]:</strong> Linear Algebra, Mathematical Analysis I, Numerical Methods I, Differential Equations, Vector Analysis, Financial Mathematics, Combinatorics, Probability, Statistics</p>
          </div>

          <div className={styles.item}>
            <h3>Teaching Assistant</h3>
            <p>Techniques of Economic Analysis, Microeconomics, Macroeconomics</p>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
