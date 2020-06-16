import React from 'react';
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

class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession()
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkoutpage} />
        <Route path="/signin" render={() => this.props.currentUser ? <Redirect to="/shop" /> : <SignInOut />} />
      </Switch>
    </div>
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
