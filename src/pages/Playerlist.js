import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Playerlist extends Component {

    render() {
        return(
            <div>
                Playerlist
            </div>
        )
    }
}

const query = gql`
    listPlayers {
        items {
            id
            firstName
            lastName
            graduatingClass
            position
            maxBench
        }
    }
`

export default graphql(query)(Playerlist)