import graphql from 'graphql-tag'

export default graphql`
    mutation createPlayer(
        $id: ID!
        $firstName: String!
        $lastName: String!
        $position: String!
        $maxBench: Int!
        $maxSquat: Int!
        $graduatingClass: String!
        
    ) {
        createPlayer(input: {
            id: $id, firstName: $firstName, lastName: $lastName, position: $position, 
            maxBench: $maxBench, maxSquat: $maxSquat, graduatingClass: $graduatingClass
        }) {
            id
            firstName
            lastName
            position
            maxBench
            maxSquat
            graduatingClass
        }
    }
`


