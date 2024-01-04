import { getAllUserList, getUserById } from '../queries/user.js'
const queryResolvers = {
    Query: {
        getUser: getAllUserList,
        fetchUser: getUserById,

    }
}
export default queryResolvers;
