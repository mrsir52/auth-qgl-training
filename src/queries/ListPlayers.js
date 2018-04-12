import graphql from 'graphql-tag'

export default graphql`
    query listPlayers {
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
    }
`

