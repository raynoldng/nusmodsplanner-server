var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');
var cors = require('cors');

let app = express(),
    port = process.env.PORT || 3001;
let router = express.Router();
app.server = http.createServer(app);

// enable CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// TODO decide if we need this
app.use(cors());

// add static assest directories
app.use("/static", express.static(__dirname + '/static'));
app.use("/build", express.static(__dirname + '/build'));

// ROUTES
// router.get('/', (req, res) => {
//   res.json({message: 'Hooray! Welcome to our API!'});
// });

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
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
    res.send('; benchmark\\n' + data.splice(2).join('\\n') + '\\n(exit)');
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
    res.send('; benchmark\\n' + data.splice(2).join('\\n') + '\\n(exit)');
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
