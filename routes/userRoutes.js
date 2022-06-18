import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("User home page")
});

export default router;