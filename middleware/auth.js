import env from '../config/env.js';
import jwt from 'jsonwebtoken';

const secretKey = env.jwt 

const validateUser = async(req, res, next) => {
    
    try {
        if (req.body.name == "One") {
            next()
        } else throw error;
    } catch(err) {
        res.send({error: "authorization error"})
    }
}

export { validateUser };