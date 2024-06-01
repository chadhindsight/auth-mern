import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';

const router = express.Router();

// "api/users" is already connected to this file so we only need '/auth'
router.post('/auth', authUser);
router.post('/', registerUser);
router.post("/logout", logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
