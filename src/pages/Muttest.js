import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import Createplayer from '../mutations/Createplayer'
import {Input, Button} from 'mdbreact'
import uuidV4 from 'uuid'


class Muttest extends Component {

    state = {
        firstName: '',
        lastName: '',
        position: '',
        maxBench: '',
        maxSquat: '',
        graduatingClass: ''
    }


    onSubmit(e) {
        e.preventDefault()
        debugger
        this.props.mutate({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                position: this.state.position,
                graduatingClass: this.state.graduatingClass,
                maxBench: this.state.maxBench,
                maxSquat: this.state.maxSquat,
                id: uuidV4
            }
        })
        console.log(this.props);
    }

    render() {

        return (
            <div>
                <h1>This is from Muttest</h1>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={e => this.setState({firstName: e.target.value})}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={e => this.setState({lastName: e.target.value})}
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={this.state.position}
                        onChange={e => this.setState({position: e.target.value})}
                    />
                    <input
                        type="text"
                        name="graduatingClass"
                        placeholder="Class Of"
                        value={this.state.graduatingClass}
                        onChange={e => this.setState({graduatingClass: e.target.value})}
                    />
                    <input
                        type="number"
                        name="maxSquat"
                        placeholder="Max Squat"
                        value={this.state.maxSquat}
                        onChange={e => this.setState({maxSquat: e.target.value})}
                    />
                    <Button type="submit">Add</Button>
                </form>

            </div>
        )

    }

}

export default graphql(Createplayer)(Muttest)
// graphql(Createplayer, {
//     props: props => ({
//         onAdd: player => props.mutate ({
//             variables: player
//         })
//     })
// }(Muttest))