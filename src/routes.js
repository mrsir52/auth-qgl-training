import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './Notauthenticated';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Test from './pages/Test'
import Newtest from './pages/Newtest'
import Muttest from './pages/Muttest'
import Playerprofile from './pages/Playerprofile'
import Updateplayer from './pages/Updateplayer'
import Admin from './pages/Admin'


const auth = new Auth();
import TestMutation from './pages/TestMutation'

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export default () => (

        <Router history={history}>
            <div>
                <Route path="/" render={(props) => <App auth={auth} {...props} />}/>
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />}/>
                <Route path="/Playerprofile" render={(props) => <Playerprofile auth={auth} {...props} />}/>
                <Route path="/Newtest" render={(props) => <Newtest auth={auth} {...props} />}/>
                <Route path="/TestMutation" render={(props) => <TestMutation auth={auth} {...props} />}/>
                <Route path="/Muttest" render={(props) => <Muttest auth={auth} {...props} />}/>
                <Route path="/Updateplayer" render={(props) => <Updateplayer auth={auth} {...props} />}/>
                <Route path="/Admin" render={(props) => <Admin auth={auth} {...props} />}/>
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
        </Router>
    );
