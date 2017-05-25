import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import PythonShell from 'python-shell';

let app = express(),
    port = process.env.PORT || 3001;
let router = express.Router();
app.server = http.createServer(app);

router.get('/', (req, res) => {
  res.json({message: 'Hooray! Welcome to our API!'});
});

router.get('/freeday/:numToTake/:compMods', (req, res) => {
  var numToTake = req.params.numToTake,
      compMods = req.params.compMods,
      optMods = req.params.optMods;

  const data = {
    numToTake: numToTake,
    compMods: (compMods == 'null') ? [] : compMods.split(','),
    optMods: (optMods == 'null') ? [] : optMods.split(',')
  };

  console.log(data);

  // do somthing with the data
  dataHandler(data, (data) => {
    res.send(data.join('\n'));
  });

});

router.get('/freeday/:numToTake/:compMods/:optMods', (req, res) => {
  var numToTake = req.params.numToTake,
      compMods = req.params.compMods,
      optMods = req.params.optMods;

  const data = {
    numToTake: numToTake,
    compMods: (compMods == 'null') ? [] : compMods.split(','),
    optMods: (optMods == 'null') ? [] : optMods.split(',')
  };

  // do somthing with the data
  dataHandler(data, (data) => {
    res.send(data.join('\n'));
  });

});

router.get('/freeday/:mods/:options', (req, res) => {
  console.log(req.params.options);
  const data = {
    mods: req.params.mods.split(','),
    options: JSON.parse(req.params.options)
  };
  res.send(data);
});


// Handle data
let dataHandler = function(data, cb) {
  const options = {
    mode: 'text',
    args: JSON.stringify(data)
  };

  PythonShell.run('query.py', options, (err, results) => {
    if (err) throw err;

    if (cb) {
      cb(results);
    }
  });
}

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use(bodyParser());
app.use('/api', router);

// START THE SERVER
// ========================================================
app.listen(port);
console.log(`Listening to port ${port}`);
