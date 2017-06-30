var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');
var cors = require('cors');
var path = require('path');

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


router.get('/:numToTake/:compMods/:optMods/:options', (req, res) => {
  var numToTake = req.params.numToTake,
    compMods = req.params.compMods,
    optMods = req.params.optMods,
    options = req.params.options;

  // console.log('options:');
  // console.log(decodeURIComponent(options));

  const data = {
    numToTake: numToTake,
    compMods: (compMods == 'null') ? [] : compMods.split(','),
    optMods: (optMods == 'null') ? [] : optMods.split(','),
    options: (options == 'null') ? [] : JSON.parse(decodeURIComponent(options))
  };

  dataHandler(data, (data) => {
    parseAndSendRes(data, res);
  });

});

let parseAndSendRes = (data, res) => {
  var moduleMapping = JSON.parse(data[data.length - 1].replace(/u'(?=[^:]+')/g, "'"));
  var smtlib2 = '; benchmark\n' + data.slice(2, data.length - 2).join('\n') + '\n\n(exit)';
  res.send([smtlib2, moduleMapping]);
};

// Handle data
let dataHandler = function(data, cb) {
  const options = {
    mode: 'text',
    pythonPath: '/usr/bin/python2.7',
    args: JSON.stringify(data)
  };

  PythonShell.run('query.py', options, (err, results) => {
    if (err) throw err;

    if (cb) {
      cb(results);
    }
  });
};

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use(bodyParser());
app.use('/api', router);

// START THE SERVER
// ========================================================
app.listen(port);
console.log(`Listening to port ${port}`);
