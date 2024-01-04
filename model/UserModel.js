import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true })

const UserModel = mongoose.models.user || new mongoose.model('user', userSchema);

export default UserModel;