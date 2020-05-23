import React from 'react';
import Homepage from './pages/homepage/homepage.comp';
import { Route } from 'react-router-dom'

function App() {
  return <div>
    <Route exact path="/" component={Homepage} />
  </div>
}

export default App;
