import express from 'express';

const app = express();

app.get('/games', (req, resp) => {
  return resp.json([]);
});

app.post('/ads', (req, resp) => {
  return resp.status(201).json([]);
});

app.get('/games/:id/ads', (req, resp) => {
  //const gameId = request.params.id
  return resp.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" },
  ]);
});

app.get('/ads/:id/discord', (req, resp) => {
  //const adId = request.params.id
  return resp.json([]);
});

app.listen(3333);