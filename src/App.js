import React from 'react';
import Homepage from './pages/homepage/homepage.comp';
import { Route, Switch, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.comp';
import Header from './components/header/header.comp';
import SignInOut from './pages/sign-in-up/sign-in-up.comp';
import { auth, createUserProfile } from "./components/firebase/firebase.util";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {


  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          );

        });
      }

      setCurrentUser(userAuth)

    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/shop" /> : <SignInOut />} />
      </Switch>
    </div>
  }
}

const mapPropsToState = ({ user }) => ({
  //destructure {user} from state = store.getState()
  currentUser: user.currentUser
});

const mapDispatchToState = (dispatch) => ({
  //dispatch === store.dispatch
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapPropsToState, mapDispatchToState)(App);
