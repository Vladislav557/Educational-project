import React, { FC } from 'react';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = () => (
  <div className={styles.ThemeSwitcher}>
    ThemeSwitcher Component
  </div>
);

export default ThemeSwitcher;
