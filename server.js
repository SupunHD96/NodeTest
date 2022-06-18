import express from 'express';
import 'dotenv/config';

import userRoutes from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js'

const app = express();

const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('This is a GET request')
});

app.use('/users', userRoutes);
app.use('/cart', cartRoutes);


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});