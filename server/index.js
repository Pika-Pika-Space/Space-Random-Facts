import express from 'express';
const app = express();
const port = 8080;

app.use(express.json());

app.use('/hello', (req, res) => {
  console.log('world');
  return res.status(200).send('world');
})

app.use('*', (req, rs) => res.status(404).send('404 - This planet is in another galaxy!'));