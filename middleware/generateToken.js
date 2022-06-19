import env from '../config/env.js';
import jwt from 'jsonwebtoken';

const secretKey = env.jwt 

const generateToken = (user) => {
    const token = jwt.sign({user: user}, secretKey,  { expiresIn: '20h' });

    return token;
}

export default generateToken;