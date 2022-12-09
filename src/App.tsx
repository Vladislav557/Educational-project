import React from 'react';

import Component from 'components/Container'
import TheHeader from 'components/TheHeader';
import Search from 'components/Search';
import UserCard from 'components/UserCard';

import { defaultUser } from 'mock';

import './App.css';

function App() {
  return (
    <Component>
      <TheHeader />
      <Search hasError onSubmit={() => { }} />
      <UserCard {...defaultUser} />
    </Component>
  );
}

export default App;
