// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
    _id: ID
    username: String
    email: String
    }

    type Book {
        _id: ID!
        authors: String
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook()
    }

    type Auth {
        token: ID!
        user: User
    }
    
    input SavedBooks {
        _id: ID
        authors: String
        description: String
        image: String
        link: String
        title: String
    }
`;

// const mutation = gql``;

// export the typeDefs
module.exports = typeDefs;