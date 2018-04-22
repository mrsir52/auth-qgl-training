import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Button} from 'mdbreact'
import './App.css';

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        return (
            <div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Training App</a>
                        </Navbar.Brand>
                        <Button
                            color="primary"
                            size="sm"
                            onClick={this.goTo.bind(this, 'home')}
                        >
                            Home
                        </Button>
                        {
                            !isAuthenticated() && (
                                <Button
                                    color='primary'
                                    size="sm"
                                    onClick={this.login.bind(this)}
                                >
                                    Log In
                                </Button>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <Button
                                    color='primary'
                                    size="sm"
                                    onClick={this.logout.bind(this)}
                                >
                                    Log Out
                                </Button>
                            )
                        }
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default App;
