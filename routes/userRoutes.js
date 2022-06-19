import express from 'express';

import { findUser, registerUser, loginUser } from '../controllers/userController.js';
import { validateUser } from '../middleware/auth.js'

const router = express.Router();

router.get('/home', (req, res) => {
    res.json("User home page")
});

router.post('/register', registerUser)
router.post('/login', validateUser, loginUser)
router.get('/find/:userName', findUser);


export default router;