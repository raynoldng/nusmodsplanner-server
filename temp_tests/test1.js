/*

Purpose to recreate boolector fail condition

call q1: SAT
call q2: UNSAT
call q1: stdin error

'; benchmark\n(set-info :status unknown)\n(set-logic QF_BV)\n(declare-fun b () (_ BitVec 16))\n(declare-fun a () (_ BitVec 16))\n(assert\n (let (($x31 (= a b)))\n(let (($x9 (bvsgt a b)))\n(and $x9 $x31))))\n(check-sat)\n'


*/
// init boolector
// Module = require('../static/boolector')
// Object.freeze(Module)
var fetch = require('node-fetch');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var solveString = Module.cwrap('solve_string', 'string', ['string', 'number']);

// Call C from JavaScript
// var result = Module.ccall('int_sqrt', // name of C function
//   'number', // return type
//   ['number'], // argument types
//   [28]); // arguments
Module = require('../static/boolector');
Module.print = function (x) {
      output += x + '\n';
};
    
function solvePrint(query) {
	var output = '';
	var result = Module.ccall('solve_string','string',['string', 'number'],
		[query, 2]);
	return [result, output]
}

function solveFlush(query) {
	var Module = require('../static/boolector')
	Object.freeze(Module)
	var result = Module.ccall('solve_string','string',['string', 'number'],
		[query, 2]);
	var output = Module.printFlush();
	return [result, output]
}

solve = solvePrint;


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
		var outcome = solve(smtlib2);
		return outcome;
	}

}

console.log(syncQuery(q1)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q2)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q1)[0])
console.log(syncQuery(q2)[0])
console.log(syncQuery(q2)[0])
