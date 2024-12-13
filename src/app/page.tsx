import { WolfySpiritsLogo } from './components/wolfy-spirits-logo';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <WolfySpiritsLogo />
      <h1 className={styles.header}>Coming soon</h1>
    </div>
  );
}
