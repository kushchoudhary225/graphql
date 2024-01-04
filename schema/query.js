
export const query = `
    type Query  {
        getUser : [User]
        fetchUser(id : ID!) : User
    }
    type User {
        id: ID!
        title : String!
        description : String!
        completed : String!
        createdAt : String!
    }
`;