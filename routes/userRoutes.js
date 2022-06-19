import express from 'express';

import { findUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/home', (req, res) => {
    res.json("User home page")
});

router.post('/register', registerUser)

router.get('/find/:userName', findUser);


export default router;