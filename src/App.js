import React from 'react';
import Homepage from './pages/homepage/homepage.comp';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp'

function App() {
  return <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  </div>
}

export default App;
