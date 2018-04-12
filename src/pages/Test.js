import React, {Component} from 'react';
import {compose, graphql} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
import Createplayer from '../mutations/Createplayer'

const defaultState = {
    firstName: '',
    lastName: '',
    position: '',
    maxBench: '',
    maxSquat: '',
    graduatingClass: '',
}

class test extends Component {
    state = defaultState

    onChange = (key, value) => {
        this.setState({[key]: value})
    }

    addFirstName = () => {
        if (this.state.firstName === '') return
        const firstName = this.state.firstName
        firstName.push(this.state.firstName)
        this.setState({
            firstName: ''
        })
    }

    addLastName = () => {
        if (this.state.lastName === '') return
        const lastName = this.state.lastName
        lastName.push(this.state.lastName)
        this.setState({
            lastName: ''
        })
    }
    addPosition = () => {
        if (this.state.position === '') return
        const position = this.state.position
        position.push(this.state.position)
        this.setState({
            position: ''
        })
    }

    addMaxBench = () => {
        if (this.state.maxBench === '') return
        const maxBench = this.state.maxBench
        maxBench.push(this.state.maxBench)
        this.setState({
            maxBench: ''
        })
    }


    addMaxSquat = () => {
        if (this.state.maxSquat === '') return
        const maxSquat = this.state.maxSquat
        maxSquat.push(this.state.maxSquat)
        this.setState({
            maxSquat: ''
        })
    }

    addGraduatingClass = () => {
        if (this.state.graduatingClass === '') return
        const graduatingClass = this.state.graduatingClass
        graduatingClass.push(this.state.graduatingClass)
        this.setState({
            graduatingClass: ''
        })
    }


    render() {
        console.log('props: ', this.props)
        return (
            <div>
                Here is a list of players from the DynamoDB database
                <br/>
                <br/>
                {
                    this.props.players.map((players, index) => (
                        <div>
                            <p>{players.firstName}</p>

                        </div>
                    ))
                }
                <input
                    value={this.state.firstName}
                    placeholder='First Name'
                    onChange={evt => this.onChange('firstName', evt.target.value)}
                />
                <input
                    value={this.state.lastName}
                    placeholder='Last Name'
                    onChange={evt => this.onChange('lastName', evt.target.value)}
                />

                <input
                    value={this.state.position}
                    placeholder='Player Position'
                    onChange={evt => this.onChange('position', evt.target.value)}
                />
                <input
                    value={this.state.graduatingClass}
                    placeholder='Graduating Class'
                    onChange={evt => this.onChange('graduatingClass', evt.target.value)}
                />
                <input
                    value={this.state.maxBench}
                    placeholder='Max Bench'
                    onChange={evt => this.onChange('maxBench', evt.target.value)}
                />
                <input
                    value={this.state.maxSquat}
                    placeholder='Max Squat'
                    onChange={evt => this.onChange('maxSquat', evt.target.value)}
                />

                {/*<button onClick={this.}>*/}

                {/*</button>*/}
            </div>
        );

    }
}

export default compose(
    graphql(ListPlayers, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            players: props.data.listPlayers ? props.data.listPlayers.items : []
        })
    }),
    graphql(Createplayer, {
        props: props => ({
            // onAdd: player => {
            //     console.log('players: ', players)
            // }
        })
    })
)(test)
