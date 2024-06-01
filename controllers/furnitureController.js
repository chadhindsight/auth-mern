import asyncHandler from 'express-async-handler';
import Furniture from '../models/furnitureModel.js';

// @route   POST /api/furniture
// @access  Private
const addFurniture = asyncHandler(async () => {
    const { name, price, quantity } = req.body

    const furniture = {
        name,
        price,
        quantity
    }

})

// @route   GET /api/furniture
// @access  Private
const getListOfFurniture = asyncHandler(async () => {
    const furnitureList = Furniture.find({});

    if (furnitureList) {
        res.json(furnitureList)
    } else {
        res.status(401);
        throw new Error('Sorry, our inventory is currently empty.');
    }
})

// @route   PUT /api/users/profile
// @access  Private
const updateFurniture = asyncHandler(async (req, res) => {
    const furniture = await Furniture.findById(req.furniture._id);

    if (furniture) {
        furniture.name = req.body.name || furniture.name;
        furniture.price = req.body.price || furniture.price;
        furniture.quantity = req.body.quantity || furniture.quantity;


        const Furniture = await furniture.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

export {
    addFurniture,
    getListOfFurniture,
    updateFurniture
}