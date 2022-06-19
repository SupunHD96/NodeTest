import env from '../config/env.js';
import jwt from 'jsonwebtoken';

import userSchema from '../schemas/userSchema.js';

    const findUser = async (req, res) => {

        const queryResult = await userSchema.findOne({name: req.params.userName})
        
        if (queryResult == null) {
            res.json({error: "true"})
        } else {
            res.json({name: queryResult.name, age: queryResult.age, job: queryResult.job, error: "false"})
        }
    
    }

    const secretKey = env.jwt 

    const registerUser = async (req, res) => {

        try {
            const searchExisting = await userSchema.findOne({name: req.body.name})

            if (searchExisting != null) throw error

            await userSchema.create(req.body)
            const token = await jwt.sign({user: req.body.name, type: req.body.age}, secretKey,  { expiresIn: '20h' });  
            res.json({ message: req.body.name + " created", token: token, error: "false"});

        } catch(err) {
            res.json({error: "true"});
        }

    }

    const loginUser = async (req, res) => {
        try {
            const searchExisting = await userSchema.findOne({name: req.body.name, age: req.body.age})

            if (searchExisting == null) throw error

            res.json({ message: req.body.name + " has logged in!"})

        } catch(err) {
            res.json({error: "user not found"});
        }
    }

    

    const logResult = () => {
        res.json("A logging function");
    }



export {
    findUser,
    registerUser,
    loginUser,
    logResult
}