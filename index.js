import express from 'express';

import cors from 'cors';
import bodyparser from 'body-parser';
import Connection from './database/db.js';
import Router from './Routes/route.js';

const app = express();
app.use(cors())
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', Router);
const PORT = 6225;



app.listen(PORT, () => console.log(`Server is running  successfully on Port ${PORT}`));






Connection();