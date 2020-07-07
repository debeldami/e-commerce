import React, { useEffect } from 'react';
import Homepage from './pages/homepage/homepage.comp';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import SignInOut from './pages/sign-in-up/sign-in-up.comp';
import { connect } from 'react-redux';
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Checkoutpage from "./pages/checkout/checkout.comp";
import { checkUserSession } from './redux/user/user.action';
import { GlobalStyle } from "./global.styles"

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/checkout" component={Checkoutpage} />
      <Route path="/signin" render={() => currentUser ? <Redirect to="/shop" /> : <SignInOut />} />
    </Switch>
  </div>

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
