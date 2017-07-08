var expect = require("chai").expect;
var fetch = require('node-fetch');
var request = require("request");

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

describe("NUSModsPlanner Server", function() {
  it("API request returns 200", function() {
    var url = 'http://localhost:3001/api/2/5/CS1231,CS2100,CS2105,CS2107,GER1000/null/%7B%7D'
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
      var response = JSON.parse(data.text())
      console.log(response);
      expect(response.length).to.equal(2);
    });
  });

  describe("Autobuilder", function() {
    it("should produce a valid timetable", function() {
      var numMods = 4;
      var compMods = ['CS1231', 'GER1000', 'MA1100', 'MA1102R'];
      var optMods = [];
      var options = {}

      var url = urlGenerator(numMods, compMods, optMods, options);
      console.log(url);
      fetch(url).then(function(data) {
        var response = JSON.parse(data.text());
        var query = response[0];
        var moduleMapping = response[1];

        var result = boolectorUtils.solve(query);
        var outcome = result[0];
        var model = result[1];

        expect(outcome).to.equal('SAT');

        var timetable = boolectorUtils.slotsFromModel(model, compMods, optMods, numMods, options);
        
        expect(timetable.length > 0).to.equal(true);
        expect(modUtils.timetableValid(timetable)).to.equal(true);
      });
    });
  })
});