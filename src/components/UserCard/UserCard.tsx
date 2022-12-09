import React, { FC } from 'react';
import styles from './UserCard.module.scss';

interface UserCardProps {}

const UserCard: FC<UserCardProps> = () => (
  <div className={styles.UserCard}>
    UserCard Component
  </div>
);

export default UserCard;
