import React, { FC } from 'react';
import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps extends Pick<
  LocalGithubUser,
  'repos' | 'followers' | 'following'
> { }

const UserStat: FC<UserStatProps> = ({ repos, followers, following }) => (
  <div className={styles.UserStat}>
    <div className={styles.info}>
      <div className={styles.infoTitle}>
        Repos
      </div>
      <div className={styles.infoNumber}>
        {repos}
      </div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>
        Followers
      </div>
      <div className={styles.infoNumber}>
        {followers}
      </div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>
        Following
      </div>
      <div className={styles.infoNumber}>
        {following}
      </div>
    </div>
  </div>
);

export default UserStat;
