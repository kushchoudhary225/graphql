import mongoose from 'mongoose'

const dbConnect = async () => {
    try {

        await mongoose.connect('mongodb+srv://root:Root5600@cluster0.e4fzonr.mongodb.net/temp?');
        console.log('db connected...')
    } catch (error) {
        console.log(error)
    }


}

export default dbConnect