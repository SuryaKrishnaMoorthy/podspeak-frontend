import gql from 'graphql-tag'

export default gql` mutation login($email: String, $password: String) {
    login(email: $email, password: $password){
        token
        id
        first_name
        avatar
        error
    }
}`

