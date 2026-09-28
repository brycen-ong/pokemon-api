import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 5500;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/info', (req: Request, res: Response) => {
  res.send('Returning Info');
});

app.get('/pokemon', (req: Request, res: Response) => {
  const pokemon = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
  ];

  res.json(pokemon);
});

app.listen(port, () => {
  console.log('The server is running at localhost:5500');
});