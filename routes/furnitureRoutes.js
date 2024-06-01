import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

import {
    addFurniture,
    getFurniture,
    getListOfFurniture,
    updateFurniture,
    deleteFurniture
} from '../controllers/furnitureController'

const router = express.Router();

export default router;