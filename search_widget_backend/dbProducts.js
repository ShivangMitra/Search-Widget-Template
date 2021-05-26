import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    availability: String,
})

//collection
export default mongoose.model('products', productSchema)