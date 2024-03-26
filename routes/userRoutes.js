import express from 'express';
import { authUser } from '../controllers/userController.js';
const router = express.Router();

// "api/users" is already connected to this file so we only need '/auth'
router.post('/auth', authUser);

export default router;