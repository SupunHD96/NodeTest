import express from 'express';

//import 'dotenv/config';
import env from './config/env.js'
import dbConnect from './config/db.js'

import userRoutes from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js'

const app = express();

const port = env.port;
const environment = env.environment;

dbConnect();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a GET request')
});

app.use('/users', userRoutes);
app.use('/cart', cartRoutes);


app.listen(port, () => {
  console.log(`Server running at ${port}, ${environment} environment`);
});