var expect = require("chai").expect;
var fetch = require('node-fetch');
var request = require("request");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var boolectorUtils = require("../utils/boolectorUtils");
var modUtils = require("../utils/modUtils");

function urlGenerator(numMods, compMods, optMods, options) {
  const plannerBaseUrl = 'http://localhost:3001/api';
  const semester = 1;

  var compMods = compMods.length !== 0 ? compMods.join(',') : 'null';
  var optMods = optMods.length !== 0 ? optMods.join(',') : 'null';
  var opts = options || {};
  return `${plannerBaseUrl}/${semester}/${numMods}/${compMods}/${optMods}/${encodeURIComponent(JSON.stringify(opts))}`;
}

function generateTimetable(numMods, compMods, optMods, options) {
  var url = urlGenerator(numMods, compMods, optMods, options);
  var request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send(null);
  response = JSON.parse(request.responseText);

  var query = response[0];
  var moduleMapping = response[1];

  return boolectorUtils.timetableBuilder(query, moduleMapping, numMods, options);
}

describe("NUSModsPlanner Server", function() {
  it("API request returns 200", function() {
    var url = 'http://localhost:3001/api/2/5/CS1231,CS2100,CS2105,CS2107,GER1000/null/%7B%7D';
    request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
  });

  it("boolector request return 200", function() {
    var url = 'http://localhost:3001/static/boolector.js';
    request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
  });

  it("should return a SMT-LIB query and module mapping", function() {
    var url = 'http://localhost:3001/api/2/5/CS1231,CS2100,CS2105,CS2107,GER1000/null/%7B%7D'
    fetch(url).then(function(data) {
      var response = JSON.parse(data.text());
      // console.log(response);
      expect(response.length).to.equal(2);
    });
  });

  describe("Autobuilder", function() {
    it("should produce a valid timetable", function() {
      this.timeout(0);
      var numMods = 4;
      var compMods = ['CS1231', 'GER1000', 'MA1100', 'MA1102R'];
      var optMods = [];
      var options = {};

      const timetable = generateTimetable(numMods, compMods, optMods, options);
      expect(timetable.length > 0).to.equal(true);
      expect(modUtils.timetableValid(timetable)).to.equal(true);
    });

    it("produce valid timetable, was wrong", function() {
      this.timeout(0);
      var numMods = 5;
      var compMods = ['MA1101R','CS2105','MA1100','CS1010','MA1102R'];
      var optMods = ['CS1231'];
      var options = {};

      const timetable = generateTimetable(numMods, compMods, optMods, options);
      expect(timetable.length > 0).to.equal(true);
      expect(modUtils.timetableValid(timetable)).to.equal(true);
    });

    it("should not have lesson slots that are undefined", function() {
      this.timeout(0);
      const numMods = 4;
      const optMods = ['GEQ1000','MA1101R','GER1000','MA1100','CS1010','CS1231'];
      const compMods = [];
      const options = {freeday: true,
                       possibleFreedays: []};
      for (var i = 0; i < 3; i += 1) {
        const timetable = generateTimetable(numMods, compMods, optMods, options);
        timetable.forEach(function(lesson) {
          expect(lesson.includes('undefined')).to.equal(false);
        });
      }
    });
  });

});
