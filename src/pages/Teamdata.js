import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
import { Card, } from 'mdbreact'
import "../css/style.css"

// items.sort(function (a, b) {
//     return a.value - b.value;
// })


class Teamdata extends Component {

    state = {players: [...this.props.players], sortedPlayers: []};


    render() {
        // const sort = this.state.players.sort((a, b) => a.firstName - b.firstName);

        const sortNames = (a, b) => {
            const aCompare = a.position.toLowerCase();
            const bCompare = b.position.toLowerCase();

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const position = () => {
            console.clear()
            let players = [...this.props.players].sort(sortNames)
            this.setState({players, show: true})
            console.log(players)
            setTimeout(() => {
                console.log("pos:", this.state.players)
            }, 1000)

        }

        // -----------------------------------------------------------------------------------


        const sortNames2 = (a, b) => {
            const aCompare = a.lastName.toLowerCase();
            const bCompare = b.lastName.toLowerCase();

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const lastName = () => {
            console.clear()
            let players = this.state.players.sort(sortNames2)
            this.setState({sortedPlayers: players})
            console.log(players)

        }

        //-------------------------------------------------------------------------------------

        const sortNames3 = (a, b) => {
            const aCompare = a.graduatingClass.toLowerCase();
            const bCompare = b.graduatingClass.toLowerCase();

            if (aCompare < bCompare) return -1;
            if (aCompare > bCompare) return 1;
            return 0;
        }


        const graduatingClass = () => {
            console.clear()
            let players = this.state.players.sort(sortNames3)
            this.setState({sortedPlayers: players})
            console.log(players)

        }

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
                <div className="container">
                <Card>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th onClick={() => {lastName()}}>Last Name</th>
                                        <th onClick={() => {position()}}>Position</th>
                                        <th onClick={() => {graduatingClass()}}>Graduating Class</th>
                                        <a href="/Playerprofile">
                                        <th><i className="fas fa-user"></i> <i className="far fa-edit"> <i className="fas fa-trash-alt"> </i></i></th>
                                        </a>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.players.map((player, index) => (
                                                <tr key={player.id}>
                                                    <td>{player.firstName}</td>
                                                    <td>{player.lastName}</td>
                                                    <td>{player.position}</td>
                                                    <td>{player.graduatingClass}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </table>

                            </div>


                            </div>

                            </div>
                </Card>
                </div>

            </div>
        )

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
)(Teamdata)