import {useEffect} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import {auth} from './firebase';
import {useStateValue} from './StateProvider'

import GeneralRoute from './Router/GeneralRoute';
import AdminRouter from './Router/AdminRouter';
import UserRouter from './Router/UserRouter';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';





function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("User is: ", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 

  return (
    <BrowserRouter>
      {/* <Header />    */}
      <Switch>        
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/user">
          <UserRouter />
        </Route>
        <Route path="/product">
          <GeneralRoute/>
        </Route>
        <Route path="/">    
          <Home />                  
        </Route>        
      </Switch>
      <Footer/>    
    </BrowserRouter>
  );
}

export default App;
