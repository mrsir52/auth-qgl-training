import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import Mutateplayer from '../mutations/Mutateplayer'
import {Input, Button, Card, CardBody} from 'mdbreact'
import uuidV4 from 'uuid'
import "../css/style.css"


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
            <div className="container">
                <section className="">
                    <div className="row">

                        <div className="col-lg-3"></div>
                        <div className="col-lg-5">
                            <br/>
                            <form>
                                <Card>
                                    <Button color="primary">Update Player</Button>
                                    <CardBody>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            label="First Name"
                                            value={this.state.firstName}
                                            onChange={e => this.setState({firstName: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            name="lastName"
                                            label="Last Name"
                                            value={this.state.lastName}
                                            onChange={e => this.setState({lastName: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            name="position"
                                            label="Position"
                                            value={this.state.position}
                                            onChange={e => this.setState({position: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            name="graduatingClass"
                                            label="Class Of"
                                            value={this.state.graduatingClass}
                                            onChange={e => this.setState({graduatingClass: e.target.value})}
                                        />
                                        <Input
                                            type="number"
                                            name="maxBench"
                                            label="Max Bench"
                                            value={this.state.maxBench}
                                            onChange={e => this.setState({maxBench: e.target.value})}
                                        />
                                        <Input
                                            type="number"
                                            name="maxSquat"
                                            label="Max Squat"
                                            value={this.state.maxSquat}
                                            onChange={e => this.setState({maxSquat: e.target.value})}
                                        />

                                        <Button type="submit" color="success">Add</Button>
                                    </CardBody>
                                </Card>
                            </form>


                        </div>

                    </div>

                </section>
            </div>
        )

    }

}

export default graphql(Mutateplayer)(Muttest)
// graphql(Createplayer, {
//     props: props => ({
//         onAdd: player => props.mutate ({
//             variables: player
//         })
//     })
