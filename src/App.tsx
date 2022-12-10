import React, { useState } from 'react';

import Component from 'components/Container'
import TheHeader from 'components/TheHeader';
import Search from 'components/Search';
import UserCard from 'components/UserCard';

import { defaultUser } from 'mock';

import { isGithubUser } from 'utils/typeguards';
import { extractUser } from 'utils/extractUser';

import { GithubError, GithubUser, LocalGithubUser } from 'types';

import './App.css';

const BASE_URL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const response = await fetch(`${BASE_URL}${username}`);
    const user = await response.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Component>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard {...user} />
      )}
    </Component>
  );
}

export default App;
