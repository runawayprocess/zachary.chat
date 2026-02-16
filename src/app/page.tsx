import { SocialLinks } from '@/components/ui/SocialLinks';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.bio}>
          Hello! This is the webpage of Zachary Jones. I am trying to do whatever I can to ensure an egalitarian, democratic, and prosperous future.
        </p>

        <p className={styles.bio}>
          I am currently a MA student at CUNY Hunter College, where I am studying mathematics and economics, with a thesis on the political economy of exposure to automation. As a research and strategy contractor for{' '}
          <a href="https://www.themidasproject.com" target="_blank" rel="noopener noreferrer">the Midas Project</a>, I work on projects ensuring the frontier AI labs are held accountable and exposing their attempt to buy our elections. In the past, I have done economic and policy research for{' '}
          <a href="https://www.commongood.org" target="_blank" rel="noopener noreferrer">Common Good</a> and{' '}
          <a href="https://www.newconsensus.com" target="_blank" rel="noopener noreferrer">New Consensus</a>.
        </p>

        <p className={styles.bio}>
          As Co-Editor-in-Chief of{' '}
          <a href="https://onethousandmeans.com" target="_blank" rel="noopener noreferrer"><em>One Thousand Means</em></a>, I am building the ideological infrastructure for the Promethean left. My other writing can be found on{' '}
          <a href="http://generalobligations.com" target="_blank" rel="noopener noreferrer">my blog</a>.
        </p>

        <p className={styles.bio}>
          In my leisure time, I{' '}
          <a href="https://app.thestorygraph.com/profile/runawayprocess" target="_blank" rel="noopener noreferrer">read</a>,{' '}
          <a href="https://boardgamegeek.com/profile/zacharyjones03" target="_blank" rel="noopener noreferrer">play board games</a>, and <a href="https://www.sandeman.com/port-wine/" target="_blank" rel="noopener noreferrer">drink port</a>. My non-professional interests include history, especially of the{' '}
          <a href="https://encyclopedia.1914-1918-online.net" target="_blank" rel="noopener noreferrer">First World War</a>,{' '}
          <a href="https://www.putthison.com/crowley-vintage-hits-brooklyn-you-may-remember/" target="_blank" rel="noopener noreferrer">menswear</a>,{' '}
          <a href="https://press.princeton.edu/books/hardcover/9780691199511/steadfast-democrats" target="_blank" rel="noopener noreferrer">behavioral political science</a>, and{' '}
          <a href="https://open.spotify.com/album/4VgTw2LLWNMz1FIHkZuv5D" target="_blank" rel="noopener noreferrer">Midwest Emo</a>.
        </p>

        <p className={styles.bio}>
          <a href="https://www.linkedin.com/in/zachary-jones-3b022b229/" target="_blank" rel="noopener noreferrer">Schedule a meeting</a> with me if you would like to chat.
        </p>

        <p className={styles.bio}>
          I am a member of the{' '}
          <a href="https://socialists.nyc" target="_blank" rel="noopener noreferrer">Democratic Socialists of America</a>, and{' '}
          <a href="https://act.dsausa.org/donate/membership/" target="_blank" rel="noopener noreferrer">urge you to join</a>.
        </p>

        <p className={styles.bio}>
          I have taken the{' '}
          <a href="https://www.givingwhatwecan.org/pledge" target="_blank" rel="noopener noreferrer">Giving What We Can Pledge</a>, and{' '}
          <a href="https://www.givingwhatwecan.org/pledge/flow" target="_blank" rel="noopener noreferrer">urge you to do so as well</a>.
        </p>

        <SocialLinks />
      </div>
    </div>
  );
}
