import asyncHandler from 'express-async-handler';
import Furniture from '../models/furnitureModel.js';

// @route   POST /api/furniture
// @access  Private
const addFurniture = asyncHandler(async (req, res) => {
    const { name, price, quantity } = req.body

    // Function to create a case-insensitive regex query
    const createRegexQuery = (input) => {
        const lowercaseInput = input.toLowerCase();
        return new RegExp('^' + lowercaseInput + '$', 'i');
    };


    const existingFurniture = await Furniture.findOne({ name: createRegexQuery(name) });

    if (!existingFurniture) {

        const furniture = {
            name,
            price,
            quantity
        }

        Furniture.create(furniture)
        res.status(200).json({ message: 'Item successfully added!' });
    }

    else {
        return res.status(400).json({ message: "Furniture with this name already exists." });
    }

})

// @route   GET /api/furniture/:id
// @access  Private
const getFurniture = asyncHandler(async (req, res) => {
    const furniture = await Furniture.findById(req.params.id);
    console.log(req.params.id)

    if (furniture) {
        res.json(furniture)
    } else {
        res.status(401);
        throw new Error('Sorry, product not found.');
    }
})

// @route   GET /api/furniture
// @access  Private
const getListOfFurniture = asyncHandler(async (req, res) => {
    const listOfFurniture = await Furniture.find({});

    if (listOfFurniture.length) {
        res.json(listOfFurniture);
    } else {
        res.status(404).json({ message: 'Sorry, our inventory is currently empty.' });
    }
});

// @route   PUT /api/furniture
// @access  Private
const updateFurniture = asyncHandler(async (req, res) => {
    const furniture = await Furniture.findById(req.params.id);

    if (furniture) {
        furniture.name = req.body.name || furniture.name;
        furniture.price = req.body.price || furniture.price;
        furniture.quantity = req.body.quantity || furniture.quantity;


        const updatedFurniture = await furniture.save();

        res.json({
            id: furniture._id,
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
    const furnitureID = req.params._id;

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