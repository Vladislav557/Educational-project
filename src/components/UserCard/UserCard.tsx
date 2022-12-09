import React, { FC } from 'react';

import UserStat from 'components/UserStat';
import { UserStatProps } from 'components/UserStat/UserStat';

import styles from './UserCard.module.scss';

interface UserCardProps extends UserStatProps { }

const UserCard: FC<UserCardProps> = (props) => (
  <div className={styles.UserCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);

export default UserCard;
