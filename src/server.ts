import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript and Docker! I am Saransh');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
