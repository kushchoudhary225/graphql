import { deleteUserById, newuser, updateUserById } from "../mutation/user.js";

export const mutationResolvers = {
    Mutation: {
        createuser: newuser,
        deleteuser: deleteUserById,
        updateuser: updateUserById
    }
}
