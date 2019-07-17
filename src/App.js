import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';
import SaraCard from './saraCard';
import TeresaCard from './teresaCard';
import PriscillaCard from './priscillaCard';
import Lydia from './lydia';

function App() {
  return (
    <div className='App'>
      <HashRouter>
           <Switch>
              <Route exact path="/sara" component={SaraCard}/>
              <Route exact path="/teri" component={TeresaCard}/>
              <Route exact path="/priscilla" component={PriscillaCard}/>
              <Route exact path="/lydia" component={Lydia}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
