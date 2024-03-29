import asyncHandler from 'express-async-handler';
import Furniture from '../models/furnitureModel.js';

// @route   POST /api/furniture
// @access  Private
const addProduct = asyncHandler(async () => {
    const { name, price, quantity } = req.body

    const furniture = {
        name,
        price,
        quantity
    }

})