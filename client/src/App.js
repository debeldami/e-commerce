import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header/header.comp';
import { connect } from 'react-redux';
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from './redux/user/user.action';
import { GlobalStyle } from "./global.styles"
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.comp'))
const ShopPage = lazy(() => import('./pages/shop/shop.comp'))
const Checkoutpage = lazy(() => import('./pages/checkout/checkout.comp'))
const SignInOut = lazy(() => import('./pages/sign-in-up/sign-in-up.comp'))

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkoutpage} />
          <Route path="/signin" render={() => currentUser ? <Redirect to="/shop" /> : <SignInOut />} />
        </Suspense>
      </ErrorBoundary>
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
