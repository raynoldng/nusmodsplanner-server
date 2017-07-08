var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var _ = require('lodash');

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

function parseOutput(output) {
  const outputArr = output.split('\n');
  const result = {
    result: outputArr[0],
  };
  for (let i = 1; i < outputArr.length; i += 1) {
    const line = outputArr[i].trim();

    const key = line.substring(0, line.lastIndexOf(' ')).replace(/\|/g, '');
    const value = line.substring(line.lastIndexOf(' '));
    result[key] = parseInt(value, 2);
  }
  return result;
}

function slotsFromModel(output, compModuleCodes, optModuleCodes, numMods, moduleMapping) {
	// copied from NUSMods
  const model = parseOutput(output);
  const modsList = [...compModuleCodes, ...optModuleCodes];
  // map indices to choosen mods
  const chosenMods = _.range(0, numMods).map((i) => {
    const a = model[`x_${i}`];
    // console.log(`x_${i} : ${a}`);
    return modsList[a];
  });

  const chosenModsLessons = Object.keys(model).filter((k) => {
    return chosenMods.reduce((acc, val) => {
      return acc || k.startsWith(val);
    }, false);
  });

  const timetable = chosenModsLessons.map((lesson) => {
    const lesson2 = lesson.split('_');
    const mod = lesson2[0];
    const lessonType = lesson2[1];
    const lessonTypeSlot = moduleMapping[mod][lessonType][model[`${mod}_${lessonType}`]];
    return `${mod}_${lessonType}_${lessonTypeSlot}`;
  });
  return timetable;
}


module.exports = { solve, slotsFromModel }