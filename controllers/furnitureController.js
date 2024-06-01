import asyncHandler from 'express-async-handler';
import Furniture from '../models/furnitureModel.js';

// @route   POST /api/furniture
// @access  Private
const addFurniture = asyncHandler(async () => {
    const { name, price, quantity } = req.body

    // Function to create a case-insensitive regex query
    const createRegexQuery = (input) => {
        const lowercaseInput = input.toLowerCase();
        return { $regex: new RegExp('^' + lowercaseInput + '$', 'i') };
    };

    const existingFurniture = await FurnitureModel.findOne({ name: createRegexQuery(name) });

    if (!existingFurniture) {

        const furniture = {
            name,
            price,
            quantity
        }

        Furniture.create(furniture)
    }

    else {
        return res.status(400).json({ message: "Furniture with this name already exists." });
    }

})
// @route   GET /api/furniture
// @access  Private
const getFurniture = asyncHandler(async () => {
    const furniture = Furniture.findByID({ id: req.params._id });

    if (furniture) {
        res.json(furniture)
    } else {
        res.status(401);
        throw new Error('Sorry, product not found.');
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

// @route   PUT /api/furniture
// @access  Private
const updateFurniture = asyncHandler(async (req, res) => {
    const furniture = await Furniture.findById(req.furniture._id);

    if (furniture) {
        furniture.name = req.body.name || furniture.name;
        furniture.price = req.body.price || furniture.price;
        furniture.quantity = req.body.quantity || furniture.quantity;


        const furniture = await Furniture.save();

        res.json({
            _id: furniture._id,
            name: furniture.name,
            email: furniture.email,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @route  DELETE / api/furniture/id
// @access Private
const deleteFurniture = asyncHandler(async (req, res) => {
    const furnitureID = req.params.id;

    if (furnitureID) {
        Furniture.deleteOne({ id: req.params._id })
    }
    else {
        res.status(404);
        throw new Error('Furniture not found');
    }
})

export {
    addFurniture,
    getFurniture,
    getListOfFurniture,
    updateFurniture,
    deleteFurniture
}