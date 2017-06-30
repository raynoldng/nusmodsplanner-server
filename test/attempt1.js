/*

Attempted fix by storing two instances of boolector

call q1: SAT
call q2: UNSAT
call q1: stdin error

'; benchmark\n(set-info :status unknown)\n(set-logic QF_BV)\n(declare-fun b () (_ BitVec 16))\n(declare-fun a () (_ BitVec 16))\n(assert\n (let (($x31 (= a b)))\n(let (($x9 (bvsgt a b)))\n(and $x9 $x31))))\n(check-sat)\n'


*/

var fetch = require('node-fetch');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// get source code of boolector
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3001/static/boolector.js', false);
request.send(null);
boolector = request.responseText;

function createBoolector() {
	eval(boolector)
	return Module;
}

function solve(boolector, query) {
	var output = '';
	boolector.print = function (x) {
      output += x + '\n';
    };
    boolector.printErr = function (x) {
      output += x + '\n';
    };
    var solveString = boolector.cwrap('solve_string', 'string', ['string', 'number']);
    var result = solveString(query, 2)
    var outcome = [result, outcome];
    return outcome;
}

function solveQuery(query, bool1, bool2) {
	var outcome1 = solve(bool1, query);
	if(outcome1[0] == 'ERROR') {
		return solve(bool2, query);
	} else {
		return outcome1
	}
}

var bool1 = createBoolector();
var bool2 = createBoolector();

// init query
var BASE_URL = 'http://localhost:3001/api/'

var q1 = BASE_URL + '5/CS1010,CS1231,CS2105,ST2131/CS2020,MA1101R/%7B%22freeday%22%3Afalse%7D'
var q2 = BASE_URL + '5/CS1010,CS1231,CS2105,ST2131/CS2020,MA1101R/%7B%22freeday%22%3Atrue%7D'

function syncQuery(url) {
	var request = new XMLHttpRequest();
	request.open('GET', url, false);  // `false` makes the request synchronous
	request.send(null);


	if (request.status === 200) {
	  	// console.log(request.responseText);
	  	var data2 = JSON.parse(request.responseText)
		var smtlib2 = data2[0];
		var mapping = data2[1]; // no really needed
		var outcome = solveQuery(smtlib2, bool1, bool2);
		return outcome;
	}

}


console.log(syncQuery(q1)[0])
console.log(syncQuery(q2)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q2)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q2)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q2)[0])
console.log(syncQuery(q1)[0])


