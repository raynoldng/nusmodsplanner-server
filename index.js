import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
let app = express(),
    port = process.env.PORT || 3000;
app.server = http.createServer(app);

// going to be lazy to all of the routes here
/*
  The goal now to support free day queries
*/

let router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'Hooray! Welcome to our API!'});
});

router.post('/', (req, res) => {
  res.json({message: 'Hooray! Welcome to our API!'});
});


// should be using get instead
router.get('/freeday/:mods', (req, res) => {
  const data = {
    mods: req.params.mods.split(','),
    options: req.params.options
  };
  res.send(data);
});
/*
  Sample test
  localhost:3000/api/freeday/CS1010,CS2020

  Output:
  {"mods":"CS1010,CS2020"}
*/

router.get('/freeday/:mods/:options', (req, res) => {
  console.log(req.params.options);
  const data = {
    mods: req.params.mods.split(','),
    options: JSON.parse(req.params.options)
  };
  res.send(data);
});

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use(bodyParser());
app.use('/api', router);

// START THE SERVER
// ========================================================
app.listen(port);
console.log(`Listening to port ${port}`);
