
import UserModel from '../model/UserModel.js';
import mongoose from 'mongoose';
export const getAllUserList = async () => {
    try {
        const data = await UserModel.find();
        console.log({ data })
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

export const getUserById = async (_, id) => {
    try {

        if (!id) return new Error('id is missing')
        const data = await UserModel.findOne({ _id: new mongoose.Types.ObjectId(id.id) });
        return data;
    } catch (error) {
        console.log(error.message)
    }
}


