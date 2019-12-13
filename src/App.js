import React from 'react';
import './App.css';


import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Staff from './pages/Staff';


function App() {
  return (
    <React.Fragment>
  <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/staff' component={Staff} />
      <Route component={Error} />
    </Switch>
    <Footer></Footer>
    </React.Fragment>
    );
  // {/* </>; */}
}

export default App;
