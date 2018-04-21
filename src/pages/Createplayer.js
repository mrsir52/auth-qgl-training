import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import Mutateplayer from '../mutations/Mutateplayer'
// import { Card, CardBody} from 'mdbreact'
import uuidV4 from 'uuid'
import "../css/style.css"


class Createplayer extends Component {

    state = {
        firstName: '',
        lastName: '',
        position: '',
        maxBench: '',
        maxSquat: '',
        graduatingClass: ''
    }


    onAdd = () => {
        console.log("from submit:", this.state);


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

    }

    render() {


        return (
            <div className="container">
                <section className="">
                    <div className="row">

                        <div className="col-lg-3"></div>
                        <div className="col-lg-5">
                            <br/>
                            <form onSubmit={ async e => {
                                e.preventDefault()
                                const response = await this.props.mutate({
                                    variables: {
                                        firstName: this.state.firstName,
                                        lastName: this.state.lastName,
                                        position: this.state.position,
                                        graduatingClass: this.state.graduatingClass,
                                        maxBench: this.state.maxBench,
                                        maxSquat: this.state.maxSquat,
                                        id: uuidV4()
                                    }
                                })
                                console.log(response)
                                        alert('Player Created')
                                        window.location.replace('/Teamdata')
                            }}>
                                <h1>Create Player</h1>
                                {/*<Card>*/}
                                    {/*<button color="primary">Create Player</button>*/}
                                    {/*<CardBody>*/}
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
                                            name="maxBench"
                                            placeholder="Max Bench"
                                            value={this.state.maxBench}
                                            onChange={e => this.setState({maxBench: e.target.value})}
                                        />
                                        <input
                                            type="number"
                                            name="maxSquat"
                                            placeholder="Max Squat"
                                            value={this.state.maxSquat}
                                            onChange={e => this.setState({maxSquat: e.target.value})}
                                        />

                                        <button type="submit">Add</button>
                                    {/*</CardBody>*/}
                                {/*</Card>*/}
                            </form>


                        </div>

                    </div>

                </section>
            </div>
        )

    }

}

export default graphql(Mutateplayer)(Createplayer)
// export default graphql(Mutateplayer, {
//     props: props => ({
//         onAdd: player => {
//             console.log('players: ', players)
//         }
//     })
// })(test)
