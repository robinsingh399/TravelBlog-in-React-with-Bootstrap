import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/home';
import Details from './components/pages/details';
import Contacts from './components/pages/contacts';
import News from './components/pages/news';
import PageNotFound from './components/pages/pageNotFound';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route  component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
    
    
  );
}

export default App;
