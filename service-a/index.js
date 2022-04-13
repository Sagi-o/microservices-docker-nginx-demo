import express from 'express';

const app = express();

app.listen(3000, () =>
  console.log('Service-a listening on internal port 3000...'),
);

app.get('/', (req, res) => {
    res.send('Hello from service-a!');
});
  