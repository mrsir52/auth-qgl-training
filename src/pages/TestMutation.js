import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'

import {Card, CardBody, Input, Button} from 'mdbreact'



class TestMutation extends Component {

    state = {
        firstName: '',
        lastName: '',
        position: '',
        maxBench: '',
        maxSquat: '',
        graduatingClass: ''
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Add Player</h1>
                <p>
                    To add a player to the Database click on the <strong>Add Player</strong> button
                </p>
                <p>{this.props.firstName}</p>
                <p>this is playerlist</p>

                <form>
                <CardBody className="player-form">
                    <Card>
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={e => this.setState({firstName: e.target.value})}
                        />
                        <Input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={e => this.setState({lastName: e.target.value})}
                        />
                        <Input
                            type="text"
                            name="position"
                            placeholder="position"
                            value={this.state.position}
                            onChange={e => this.setState({position: e.target.value})}
                        />
                        <Input
                            type="text"
                            name="Class Of"
                            placeholder="First Name"
                            value={this.state.graduatingClass}
                            onChange={e => this.setState({graduatingClass: e.target.value})}
                        />
                        <Input
                            type="number"
                            name="Max Bench"
                            placeholder="First Name"
                            value={this.state.maxBench}
                            onChange={e => this.setState({maxBench: e.target.value})}
                        />
                        <Input
                            type="number"
                            name="Max Squat"
                            placeholder="First Name"
                            value={this.state.maxSquat}
                            onChange={e => this.setState({maxSquat: e.target.value})}
                        />
                    </Card>
                </CardBody>
                <Button onClick={() => this._createPlayer()}>Add player</Button>
            </form>
    </div>
    )

    }

    _createPlayer = async () => {
        console.log(this.state)
        // const{ firstName, lastName, position, maxBench, maxSquat, graduatingClass} = this.state
        await this.props.mutate({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                position: this.state.position,
                graduatingClass: this.state.graduatingClass,
                maxBench: this.state.maxBench,
                maxSquat: this.state.maxSquat
            }
        })
    }
}

const MUTATION = gql`
    mutation createPlayer {
        createPlayer(input: {
            
            firstName: ""
            lastName: ""
            position: ""
            maxBench: ""
            maxSquat: ""
            graduatingClass: ""
        })
    }
`
export default graphql(MUTATION)(TestMutation)