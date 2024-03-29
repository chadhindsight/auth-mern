import mongoose from 'mongoose';

const FurnitureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
}, {
    timestamps: true
})

const Furniture = mongoose.model('Furniture', FurnitureSchema)

export default Furniture