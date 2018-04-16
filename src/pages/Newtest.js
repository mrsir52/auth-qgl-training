import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
import { Table, Button } from 'mdbreact'



class Newtest extends Component {

    // state = {
    //     firstName: '',
    //     lastName: '',
    //     position: '',
    //     maxBench: '',
    //     maxSquat: '',
    //     graduatingClass: ''
    // }
    // sort = this.props.players.sort();

    render() {
        console.log(this.props.players.sort);
        return (
            <div>
                <h1>This is from Newtest</h1>
                <Button color="danger" onClick={() => {this.sort()}}>Sort</Button>
                {
                    this.props.players.map((player, index) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8" >
                                    {/*<Card>*/}
                                    <table className="table" >
                                        <thead>
                                        <tr>
                                            <th>{player.id}</th>
                                            <th>{player.firstName}</th>
                                            <th>{player.lastName}</th>
                                            <th>{player.position}</th>
                                        </tr>

                                        </thead>
                                    </table>
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
