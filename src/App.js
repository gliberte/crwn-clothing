import React,{useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'

import HomePage from "./pages/homepages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

function App({setCurrentUser}) {

  useEffect(()=>{
    let unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      if(user){
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
        
      }
      setCurrentUser(user)

    })
    return function unsubscribe() {
      unsubscribeFromAuth()
    }

   
    
  },[])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}
const mapDispatchToProps = {setCurrentUser}

export default connect(null,mapDispatchToProps)(App);
