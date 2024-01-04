export const Mutation = `
    type Mutation  {
        createuser(input : InputNewUser) : User
        deleteuser(id : ID!, ): Boolean,
        updateuser(input : InputForUpdate): User
    }
    input InputNewUser {
        title : String!
        description : String!
        completed : String
    }
    input InputForUpdate {
        id : ID!
        title : String!
        description : String!
        completed : String
    }
`;