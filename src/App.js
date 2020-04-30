import React,{useState,useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

function App() {
  const [currentUser,setCurrentUser] = useState(null)
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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
