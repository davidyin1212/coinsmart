import express from 'express';
import { bubble, merge } from './controller/sortController';

const PORT = 3000,
  app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/bubbleSort', bubble);
app.get('/mergeSort', merge);

app.listen(PORT);
