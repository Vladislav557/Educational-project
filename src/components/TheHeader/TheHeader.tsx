import React, { FC } from 'react';

import ThemeSwitcher from 'components/ThemeSwitcher';
import styles from './TheHeader.module.scss';

const TheHeader: FC = () => (
  <div className={styles.TheHeader}>
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);

export default TheHeader;
