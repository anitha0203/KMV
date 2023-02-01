import React from 'react';
import './App.css';
import Main from './Component/Main';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Gallery from './Component/Gallery';
import All from './Component/All';
import NoComponent from './Component/NoComponent';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <Main/>
      </Route>
      <Route path="/home">
      <Main/>
      </Route>
      <Route path="/Gallery">
      <Gallery/>
      </Route>
      <Route path="/Login">
      <All/>
      </Route>
      <Route path="*" component={NoComponent}/>
        </Switch>
 
    </BrowserRouter>
    </div>
  );
}

export default App;
