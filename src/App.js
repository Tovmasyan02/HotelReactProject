import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Navbar from './Components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
     <Navbar/>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
