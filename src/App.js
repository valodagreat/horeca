import React from 'react';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Pms from './components/PMS/Pms';
import MyGuest from './components/Guest/MyGuest';
import Menu from './components/Menu/Menu';
import Reseller from './components/Reseller/Reseller';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import Admin from './components/Admin/Admin';
import Logout from './components/Logout/Logout';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ForgotPage from './components/ForgotPassword/ForgotPage';
import Blogupdate from './components/Update/Blogupdate';
import Bigblogtemplate from './components/Blog/Blog Template/Bigblogtemplate';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
import UpdateDetails from './components/UpdateDetails/UpdateDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' render={(routeProps) => <Home root='Horeca Cloud' /> } />
          <Route exact path='/horecapms' render={(routeProps) => <Pms root='Horeca PMS' /> } />
          <Route exact path='/horecamyguest' render={(routeProps) => <MyGuest root='Horeca MyGuest' /> } />
          <Route exact path='/horecamymenu' render={(routeProps) => <Menu root='Horeca MyMenu'/> } />
          <Route exact path='/reseller' render={(routeProps) => <Reseller root='Reseller'/>} />
          <Route exact path='/blog' render={({match}) => <Blog root='Blog' match={match}/>} />
          <Route exact path='/contact' render={(routeProps) => <Contact root='Contact Us' />} />
          <Route exact path='/about' render={(routeProps) => <About root='About Us' />} />
          <Route exact path='/blog/login' render={(routeProps) => <ErrorBoundary><SignIn root='SignIn' /></ErrorBoundary>} />
          <Route exact path='/admin' render={(routeProps) => <ErrorBoundary><Admin root='Admin' /></ErrorBoundary>} />
          <Route exact path='/blog/logout' render={(routeProps) => <Logout root='logout' />} />
          <Route exact path='/admin/updatepassword' render={(routeProps) => <ErrorBoundary><UpdatePassword root='Update Password' /></ErrorBoundary>} />
          <Route exact path='/forgotpassword' render={(routeProps) => <ErrorBoundary><ForgotPassword root='reset password' /></ErrorBoundary>} />
          <Route exact path='/post-blog-content' render={(routeProps) => <ErrorBoundary><Blogupdate root='update blog' /></ErrorBoundary>} />
          <Route exact path='/blog/:id' render={({match}) => <Bigblogtemplate match={match}/>} />
          <Route exact path='/forgotpassword/:id' render={({match}) => <ErrorBoundary><ForgotPage match={match}/></ErrorBoundary>} />
          <Route exact path='/admin/updatedetails' render={({match}) => <ErrorBoundary><UpdateDetails match={match}/></ErrorBoundary>} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
