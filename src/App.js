import React from 'react';
import './App.css';
import Main from './Component/Main';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Gallery from './Component/Gallery';
import Upload from './Component/Upload';
import Date from './Component/Date';


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
      <Route path="/Upload">
      <Upload/>
      </Route>
      <Route path="/date">
      <Date/>
      </Route>
        </Switch>
 
    </BrowserRouter>
    </div>
  );
}

export default App;
