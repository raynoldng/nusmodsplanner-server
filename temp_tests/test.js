/*
Test case generation

Generate multiple queries at random to check that boolector works consistently without
failing

 */
// imports
// var modules = require('./modules.json'); // AY1718S1
var modules = ['CS1010', 'CS1231', 'CS2030', 'CS2040', 'CS2100', 'CS2103', 'CS2105', 'CS2106',
               'CS3230', 'MA1521', 'MA1101R', 'ST2334', 'LSM1301'];
var solver = require('./solver');

function urlParse(numMods, compMods, optMods, options) {
  url = 'http://localhost:3001/api/';
  var compModsStr = compMods.length > 0 ? compMods.join(',') : 'null';
  var optModsStr = optMods.length > 0 ? optMods.join(',') : 'null';
  var optionsStr = encodeURIComponent(JSON.stringify(options));

  return url + compModsStr + '/' + optModsStr + '/' + optionsStr;
}

// 1.1: no freedays
function genQuery1() {
  numMods = 5;
  var modsClone = modules.splice(0);

}
