import UserModel from "../model/UserModel.js";
import mongoose from 'mongoose'

export const deleteUserById = async (_, id) => {
    try {
        if (!id) return false;
        const data = await UserModel.findByIdAndDelete(new mongoose.Types.ObjectId(id.id));
        if (!data) return false;
        return true;
    } catch (error) {
        console.log(error.message)
    }
}
export const newuser = async (_, { input: { title, description, completed = false } }) => {
    try {
        console.log({ title, description, completed })
        const data = await UserModel.create({ title, description, completed });
        return data;
    } catch (error) {
        console.log(error.message)
    }
}
export const updateUserById = async (_, { input: { id, title, description, completed = false } }) => {
    try {
        if (!id) return new Error('id is missing')
        const data = await UserModel.findByIdAndUpdate(id, { $set: { title, description, completed } });
        return data;
    } catch (error) {
        console.log(error.message)
    }
}