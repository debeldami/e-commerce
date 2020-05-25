import React from 'react';
import Homepage from './pages/homepage/homepage.comp';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import SignInOut from './pages/sign-in-up/sign-in-up.comp';
import { auth, createUserProfile } from "./components/firebase/firebase.util";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });
      }

      this.setState({ currentUser: userAuth })

    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInOut} />
      </Switch>
    </div>
  }
}

export default App;
