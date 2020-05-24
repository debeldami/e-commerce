import React from 'react';
import Homepage from './pages/homepage/homepage.comp';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import SignInOut from './pages/sign-in-up/sign-in-up.comp';
import { auth } from "./components/firebase/firebase.util";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return <div>
      <Route
        path='/'
        render={(props) => <Header {...props} currentUserState={this.state.currentUser} />}
      />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInOut} />
      </Switch>
    </div>
  }
}

export default App;
