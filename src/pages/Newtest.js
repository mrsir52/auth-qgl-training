import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
import { Table, Button, Card, CardBody } from 'mdbreact'
import { Badge } from 'react-bootstrap'



class Newtest extends Component {

    state = { players:[...this.props.players]};


    render() {
        console.log(this.state)

        return (
            <div>
                <h1>This is from Newtest</h1>
                <Button color="danger" onClick={() => this.setState({players:[...this.state.players.sortByName()]})}>Sort By Name</Button>

                {
                    this.state.players.map((player, index) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8" >
                                    {/*<Card>*/}
                                        {/*<CardBody>*/}
                                    <table className="table" >
                                        <thead>
                                        <tr>
                                            <th>{player.id}</th>
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
)(Newtest)
