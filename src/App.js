import React from 'react';
import './App.css';
import Main from './Component/Main';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Gallery from './Component/Gallery';
import All from './Component/All';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Switch>
    <  Route exact path="/">
      <Main/>
      </Route>
      <Route path="/home">
      <Main/>
      </Route>
      <Route path="/Gallery">
      <Gallery/>
      </Route>
      <Route path="/All">
      <All/>
      </Route>
        </Switch>
 
    </BrowserRouter>
    </div>
  );
}

export default App;
