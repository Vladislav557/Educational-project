import React, { FC } from 'react';
import styles from './TheHeader.module.scss';

interface TheHeaderProps {}

const TheHeader: FC<TheHeaderProps> = () => (
  <div className={styles.TheHeader}>
    TheHeader Component
  </div>
);

export default TheHeader;
