import React from 'react';

import Component from 'components/Container'
import './App.css';
import TheHeader from 'components/TheHeader';
import Search from 'components/Search';

function App() {
  return (
    <Component>
      <TheHeader />
      <Search hasError onSubmit={() => { }} />
    </Component>
  );
}

export default App;
