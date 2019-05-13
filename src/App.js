import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import SaraCard from './saraCard';


function App() {
  return (
    <div className='App'>
      <HashRouter>
           <Switch>
              <Route exact path="/" component={SaraCard}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
