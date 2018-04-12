import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import ListPlayers from '../queries/ListPlayers'

class test extends Component {
    render() {
        console.log('props: ', this.props)
        return (
            <div>

            </div>
        );

    }
}

export default graphql(ListPlayers, {
    options: {
        fetchPolicy: 'cache-and-network'
    },
    props: props => ({
        players: props.data.listPlayers ? props.data.listPlayers.items : []
    })
})(test);
