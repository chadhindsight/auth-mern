import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

import {
    addFurniture,
    getFurniture,
    getListOfFurniture,
    updateFurniture,
    deleteFurniture
} from '../controllers/furnitureController.js'

const router = express.Router();

// NB: all furniture routes should be protected
router.post('/', protect, addFurniture);

router.get('/:id', protect, getFurniture);

router.get('/', protect, getListOfFurniture);

router.patch('/:id', protect, updateFurniture);

// Delete
router.delete('/:id', protect, deleteFurniture);

export default router;