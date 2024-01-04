import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone';
import { query } from './schema/query.js';
import dbConnect from './conn/conn.js';
import queryResolvers from './resolvers/query.js';
import { mutationResolvers } from './resolvers/mutation.js';
import { Mutation } from './schema/mutation.js';

const typeDefs = `
 ${query}
 ${Mutation}
`

const resolvers = {
    ...queryResolvers,
    ...mutationResolvers
}
dbConnect();
const server = new ApolloServer({
    typeDefs,
    resolvers
})
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`server is running at ${url}`)