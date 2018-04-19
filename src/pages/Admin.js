import React, {Component} from 'react';
import {Button, Card, CardBody, Badge} from 'mdbreact';
import { graphql } from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'

import "../css/style.css"


class Admin extends Component {

    state = { players:[...this.props.players], sortedPlayers: []};

    render() {

        const sortNames = (a, b) => {
            const aCompare = a.position.toLowerCase();
            const bCompare = b.position.toLowerCase();

            if(aCompare < bCompare) return -1;
            if(aCompare > bCompare) return 1;
            return 0;
        }


        const position = () => {
            console.clear()
            let players = [...this.props.players].sort(sortNames)
            this.setState({ players, show: true })
            console.log(players)
            setTimeout( () => { console.log("pos:", this.state.players ) }, 1000)

        }

        // -----------------------------------------------------------------------------------


        const sortNames2 = (a, b) => {
            const aCompare = a.lastName.toLowerCase();
            const bCompare = b.lastName.toLowerCase();

            if(aCompare < bCompare) return -1;
            if(aCompare > bCompare) return 1;
            return 0;
        }


        const lastName = () => {
            console.clear()
            let players = this.state.players.sort(sortNames2)
            this.setState({ sortedPlayers: players })
            console.log(players)

        }

        //-------------------------------------------------------------------------------------

        const sortNames3 = (a, b) => {
            const aCompare = a.graduatingClass.toLowerCase();
            const bCompare = b.graduatingClass.toLowerCase();

            if(aCompare < bCompare) return -1;
            if(aCompare > bCompare) return 1;
            return 0;
        }


        const graduatingClass = () => {
            console.clear()
            let players = this.state.players.sort(sortNames3)
            this.setState({ sortedPlayers: players })
            console.log(players)

        }

        return (
            <div>
                <div className="container">
                    <br/>
                    <div className="row">
                        <div className="col-lg-3">
                            <Card>
                                <h2>Team Data</h2>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </Card>
                        </div>
                        <br/>
                        <div className="col-lg-3">
                            <Card>
                                <h2>Position Data</h2>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
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

                <section>

                    <button onClick={ ()=> {position()}}>Position</button>
                    <button onClick={ ()=> {lastName()}}>Last Name</button>
                    <button onClick={ ()=> {graduatingClass()}}>Graduating Class</button>

                    {

                        this.state.players.map((player, index) => (
                                <div className="container" key={player.id}>
                                    <div className="row">
                                        <div className="col-lg-8" >
                                            {/*<Card>*/}
                                            {/*<CardBody>*/}
                                            <table className="table" >
                                                <thead>
                                                <tr>
                                                    <th>{player.firstName}</th>
                                                    <th>{player.lastName}</th>
                                                    <th>{player.position}</th>
                                                    <th>{player.graduatingClass}</th>
                                                </tr>

                                                </thead>
                                            </table>
                                            {/*</CardBody>*/}
                                            {/*</Card>*/}
                                        </div>

                                    </div>

                                </div>
                            )
                        )
                    }

                </section>
            </div>
        );
    }
}

export default graphql(ListPlayers, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            players: props.data.listPlayers ? props.data.listPlayers.items : []
        })
    }
)(Admin)