const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const yelp = require('yelp-fusion');
const client = yelp.client("B2GXDeJD3HOru1tyBIjHg0prJ2jWASv38ark1Op_vu5shA6An9CezJ3QpqY3NG_Dcq1bOeGwyKKl0WSMNlv6EXCWRk6H7jMdvHFtY62uVKirMvw3p9q261WuYFxjYHYx");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});
// Get 30 restaurants near given adress
app.get('/restaurants', (req, res) => {
  client.search({
    limit: 30,
    term: "restaurants",
    latitude: 40.75250743922641,
    longitude: -73.9890980443308
  }).then(response => {
    console.log(response)
    res.send(response)
  }).catch(e => {
    console.log(e);
  });
});
// Get restaurant using id
app.get('/restaurant/:id', (req, res) => {
  client.business(req.params.id).then(response => {
    res.send(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
});
// listen on the port
app.listen(port);
