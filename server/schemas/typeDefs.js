// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    }

    type Query {
        me: User
    }

    type Book {
        _id: ID
        bookId: String
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    input SavedBooksInput {
        _id: ID
        authors: String
        description: String
        image: String
        link: String
        title: String
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBooksInput): User
        removeBook(bookId: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

// const mutation = gql``;

// export the typeDefs
module.exports = typeDefs;