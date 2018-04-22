import React, {Component} from 'react';
import { Card } from 'mdbreact';
// import { graphql } from 'react-apollo';
// import ListPlayers from '../queries/ListPlayers'

import "../css/style.css"


class Admin extends Component {

    render() {

        return (
            <div>
                <div className="container">
                    <br/>
                    <div className="row">
                        <div className="col-lg-3">
                            <Card>
                                <a href="/Teamdata">
                                <h2>Team Data</h2>
                                </a>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                        <br/>
                        <div className="col-lg-3">
                            <Card>
                                <a href="/Createplayer">
                                <h2>Create Player</h2>
                                </a>
                                <a href="/Updateplayer">
                                <h2>Update Player</h2>
                                </a>
                                <a href="/Deleteplayer">
                                <h2>Delete Player</h2>
                                </a>

                            </Card>
                        </div>
                        <br/>
                        <div className="col-lg-3">
                            <Card>
                                <h2>Graduating Class Data</h2>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                        <div className="col-lg-3">
                            <Card>
                                <h2>Workouts</h2>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <section className="container">

                    <Card>
                        <table className="table" >
                            <thead>
                            <tr>
                                <th>Total Weight Lifted</th>
                                <th>Players &gt; 40 days lifting</th>
                                <th>Players &lt; 20 days lifting</th>
                            </tr>

                            </thead>
                        </table>
                    </Card>
                </section>
                <br/>
                <br/>


            </div>
        );
    }
}

export default Admin