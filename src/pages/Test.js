import React, {Component} from 'react';
import { graphql} from 'react-apollo';
// import gql from 'graphql-tag'
import Createplayer from '../mutations/Mutateplayer'
import {Card, CardBody, Input, Button} from 'mdbreact'

// const defaultState = {
//     firstName: '',
//     lastName: '',
//     position: '',
//     maxBench: '',
//     maxSquat: '',
//     graduatingClass: ''
// };

class test extends Component {

    state = {
        firstName: '',
        lastName: '',
        position: '',
        maxBench: '',
        maxSquat: '',
        graduatingClass: ''
    }

    // onChange = (key, value) => {
    //     this.setState({[key]: value})
    // }

    // addFirstName = () => {
    //     if (this.state.firstName === '') return
    //     const firstName = this.state.firstName
    //     firstName.push(this.state.firstName)
    //     this.setState({
    //         firstName: ''
    //     })
    // }
    //
    //
    // addLastName = () => {
    //     if (this.state.lastName === '') return
    //     const lastName = this.state.lastName
    //     lastName.push(this.state.lastName)
    //     this.setState({
    //         lastName: ''
    //     })
    // }
    // addPosition = () => {
    //     if (this.state.position === '') return
    //     const position = this.state.position
    //     position.push(this.state.position)
    //     this.setState({
    //         position: ''
    //     })
    // }
    //
    // addMaxBench = () => {
    //     if (this.state.maxBench === '') return
    //     const maxBench = this.state.maxBench
    //     maxBench.push(this.state.maxBench)
    //     this.setState({
    //         maxBench: ''
    //     })
    // }
    //
    //
    // addMaxSquat = () => {
    //     if (this.state.maxSquat === '') return
    //     const maxSquat = this.state.maxSquat
    //     maxSquat.push(this.state.maxSquat)
    //     this.setState({
    //         maxSquat: ''
    //     })
    // }
    //
    // addGraduatingClass = () => {
    //     if (this.state.graduatingClass === '') return
    //     const graduatingClass = this.state.graduatingClass
    //     graduatingClass.push(this.state.graduatingClass)
    //     this.setState({
    //         graduatingClass: ''
    //     })
    // }
    onSubmit(e) {
        e.preventDefault()

        this.props.mutate({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                position: this.state.position,
                graduatingClass: this.state.graduatingClass,
                maxBench: this.state.maxBench,
                maxSquat: this.state.maxSquat
            }
        })
        console.log(this.props);
    }

    render() {
        const {firstName, lastName, position, graduatingClass, maxBench, maxSquat} = this.state;
        // const { createPlayerMutation } = this.props

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

                <section>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <CardBody className="player-form">
                            <Card>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={e => this.setState({firstName: e.target.value})}
                                />
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={e => this.setState({lastName: e.target.value})}
                                />
                                <Input
                                    type="text"
                                    name="position"
                                    placeholder="position"
                                    value={position}
                                    onChange={e => this.setState({position: e.target.value})}
                                />
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={graduatingClass}
                                    onChange={e => this.setState({graduatingClass: e.target.value})}
                                />
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={maxBench}
                                    onChange={e => this.setState({maxBench: e.target.value})}
                                />
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={maxSquat}
                                    onChange={e => this.setState({maxSquat: e.target.value})}
                                />
                            </Card>
                        </CardBody>
                        <Button type="submit">Add Player</Button>
                    </form>

                </section>

                {/*<input*/}
                {/*value={this.state.firstName}*/}
                {/*placeholder='First Name'*/}
                {/*onChange={evt => this.onChange('firstName', evt.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*value={this.state.lastName}*/}
                {/*placeholder='Last Name'*/}
                {/*onChange={evt => this.onChange('lastName', evt.target.value)}*/}
                {/*/>*/}

                {/*<input*/}
                {/*value={this.state.position}*/}
                {/*placeholder='Player Position'*/}
                {/*onChange={evt => this.onChange('position', evt.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*value={this.state.graduatingClass}*/}
                {/*placeholder='Graduating Class'*/}
                {/*onChange={evt => this.onChange('graduatingClass', evt.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*value={this.state.maxBench}*/}
                {/*placeholder='Max Bench'*/}
                {/*onChange={evt => this.onChange('maxBench', evt.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*value={this.state.maxSquat}*/}
                {/*placeholder='Max Squat'*/}
                {/*onChange={evt => this.onChange('maxSquat', evt.target.value)}*/}
                {/*/>*/}

                {/*/!*<button onClick={this.}>*!/*/}

                {/*/!*</button>*!/*/}
            </div>
        );

    }
}

// const createPlayerMutation = gql`
//     mutation createPlayer(
//     $id: ID!
//     $firstName: String!
//     $lastName: String!
//     $position: String!
//     $maxBench: Int!
//     $maxSquat: Int!
//     $graduatingClass: String!
//
//     ) {
//         createPlayer(input: {
//             id: $id, firstName: $firstName, lastName: $lastName, position: $position,
//             maxBench: $maxBench, maxSquat: $maxSquat, graduatingClass: $graduatingClass
//         }) {
//             id
//             firstName
//             lastName
//             position
//             maxBench
//             maxSquat
//             graduatingClass
//         }
//     }`;



export default graphql(Createplayer)(test)

// export default compose(
//     graphql(ListPlayers, {
//         options: {
//             fetchPolicy: 'cache-and-network'
//         },
//         props: props => ({
//             players: props.data.listPlayers ? props.data.listPlayers.items : []
//         })
//     }),
//     graphql(Createplayer, {
//         props: props => ({
//             onAdd: player => {
//                 console.log('players: ', players)
//             }
//         })
//     })
// )(test)
