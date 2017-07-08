var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function createBoolector() {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:3001/static/boolector.js', false);
	request.send(null);
	boolector = request.responseText;
	eval(boolector);
	return Module;
}

function solve(query) {
	const newBoolector = createBoolector();
  return boolectorSolve(newBoolector, query);
}

function boolectorSolve(boolector, query) {
  let output = '';
  boolector.print = function (x) {
    output += x + '\n';
  };
  boolector.printErr = function (x) {
    output += x + '\n';
  };
  const solveString = boolector.cwrap('solve_string', 'string', ['string', 'number']);
  const result = solveString(query, 2);
  const outcome = [result, output];
  return outcome;
}

module.exports = { solve }