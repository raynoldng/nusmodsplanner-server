var expect = require("chai").expect;
var fetch = require('node-fetch');
var request = require("request");

function urlGenerator(numMods, compMods, optMods, options) {
  const compMods = compModuleCodes.length !== 0 ? compModuleCodes.join(',') : 'null';
  const optMods = optModuleCodes.length !== 0 ? optModuleCodes.join(',') : 'null';
  const opts = options || {};
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

  describe("API query", function() {
    it("should return a SMT-LIB query and module mapping", function() {
      var url = 'http://localhost:3001/api/2/5/CS1231,CS2100,CS2105,CS2107,GER1000/null/%7B%7D'
      fetch(url).then(function(data) {
        var response = JSON.parse(data.text())
        console.log(response);
        expect(response.length).to.equal(2);
      });
    });
  });

  // describe("Autobuilder", function() {
  //   it("should produce a valid timetable", function() {
      
  //   })
  // })

//   // describe("NUSMods timetable valid checker", function() {
//   //   it("checks if timetable is valid (no clashes)", function() {
//   //     candidateTimetable = ["GER1000_Tutorial_B6", "CS2107_Tutorial_6",
//   //       "CS2107_Lecture_1", "CS2105_Tutorial_3", "CS2105_Lecture_1",
//   //       "CS2100_Lecture_1", "CS2100_Tutorial_4", "CS2100_Laboratory_6",
//   //       "CS1231_Tutorial_9", "CS1231_Sectional Teaching_2"]
//   //     expect(modUtils.timetableValid(candidateTimetable)).to.equal(true);
//   //   })
//   // })
});