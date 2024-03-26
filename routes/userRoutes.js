import express from 'express';
const router = express.Router();

// "api/users" is already connected to this file so we only need '/auth'
router.post('/auth');

export default router;