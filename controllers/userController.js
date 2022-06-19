import env from '../config/env.js';
import jwt from 'jsonwebtoken';

import userSchema from '../schemas/userSchema.js';

    const findUser = async (req, res) => {

        const queryResult = await userSchema.findOne(
            {
                name: req.params.userName
            }
        )
        
        if (queryResult == null) {
            res.json({error: "true"})
        } else {
            res.json({name: queryResult.name, age: queryResult.age, job: queryResult.job, error: "false"})
        }
    
    }

    const secretKey = env.jwt 

    const registerUser = async (req, res) => {
        const user = await req.body
        const token = await jwt.sign({user: req.body.name, type: req.body.type}, secretKey,  { expiresIn: '20h' });  
        res.json("Token: " + token);
    }

    

    const logResult = () => {
        res.json("A logging function");
    }



export {
    findUser,
    registerUser,
    logResult
}