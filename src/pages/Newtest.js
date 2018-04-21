import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'
// import { Button, } from 'mdbreact'

// items.sort(function (a, b) {
//     return a.value - b.value;
// })



class Newtest extends Component {

    state = { players:[...this.props.players], sortedPlayers: []};



    render() {
        // const sort = this.state.players.sort((a, b) => a.firstName - b.firstName);

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
                <h1>This is from Newtest</h1>
                <button onClick={ ()=> {lastName()}}>Last Name</button>
                <button onClick={ ()=> {position()}}>Position</button>
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

// this.state.sortedPlayers.map((player, index) => (
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-8" >
//                     {/*<Card>*/}
//                     {/*<CardBody>*/}
//                     <table className="table" >
//                         <thead>
//                         <tr>
//                             <th>{player.id}</th>
//                             <th>{player.firstName}</th>
//                             <th>{player.lastName}</th>
//                             <th>{player.position}</th>
//                             <th>{player.graduatingClass}</th>
//                         </tr>
//
//                         </thead>
//                     </table>
//                     {/*</CardBody>*/}
//                     {/*</Card>*/}
//                 </div>
//
//             </div>
//
//         </div>
//     )
// )

// export default graphql(ListPlayers, {
//         options: {
//             fetchPolicy: 'cache-and-network'
//         },
//         props: props => ({
//             players: props.data.listPlayers ? props.data.listPlayers.items : []
//         })
//     }
// )(Newtest)