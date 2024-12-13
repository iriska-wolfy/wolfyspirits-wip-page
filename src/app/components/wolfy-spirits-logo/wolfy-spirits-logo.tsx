import Image from 'next/image';
import logo from 'public/wolfy-spirits-logo.svg';

import styles from './styles.module.css';

export const WolfySpiritsLogo = () => {
  return (
    <Image
      src={logo}
      alt="Wolfy Spirits logo"
      priority={true}
      className={`${styles.container} ${styles.fadeIn}`}
      sizes="100vw"
    />
  );
};
