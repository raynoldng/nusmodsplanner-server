import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import PythonShell from 'python-shell';

let app = express(),
    port = process.env.PORT || 3000;
let router = express.Router();
app.server = http.createServer(app);

router.get('/', (req, res) => {
  res.json({message: 'Hooray! Welcome to our API!'});
});

router.get('/freeday/:numToTake/:compMods', (req, res) => {
  const data = {
    numToTake: req.params.numToTake,
    compMods: req.params.compMods.split(',')
  };

  console.log(data);

  // do somthing with the data
  dataHandler(data, (data) => {
    res.send(data);
  });

});
/*
  Sample test
  localhost:3000/api/freeday/4/CS1010,CS2020,CS2100,MA1102R,CS1231

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


// Handle data
let dataHandler = function(data, cb) {
  const options = {
    mode: 'text',
    args: JSON.stringify(data)
  };

  PythonShell.run('query.py', options, (err, results) => {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    /*
      now process the results, it will look like this:

      ["['CS2100_Laboratory_4', 'CS2100_Tutorial_7', 'CS2100_Lecture_1',
      'MA1101R_Laboratory_B08', 'MA1101R_Tutorial_T01', 'MA1101R_Lecture_SL1',
      'CS1231_Sectional Teaching_1', 'CS1231_Tutorial_4', 'CS2105_Lecture_1',
      'CS2105_Tutorial_8']"]
    */
    results = results[0];
    results.replace(/'/g, "");
    console.log(`New results string: ${results}`);
    console.log(results);
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
