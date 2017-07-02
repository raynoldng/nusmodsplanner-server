var expect = require("chai").expect;
var modUtils = require("../utils/modUtils");

describe("Module Utilities", function() {
  describe("NUSMods API query", function() {
    it("returns a modules timetable", function() {
      var NUSModsCS1010 = [{"ClassNo":"1","LessonType":"Sectional Teaching","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1200","EndTime":"1500","Venue":"COM1-B109"},{"ClassNo":"1","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Friday","StartTime":"1000","EndTime":"1200","Venue":"COM1-B108"},{"ClassNo":"2","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Friday","StartTime":"1200","EndTime":"1400","Venue":"COM1-B108"},{"ClassNo":"3","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Friday","StartTime":"1400","EndTime":"1600","Venue":"COM1-0120"}]
      var cs1010 = modUtils.query('CS1010');
      expect(JSON.stringify(cs1010)).to.equal(JSON.stringify(NUSModsCS1010));
    });
  });

  describe("NUSMods timetable valid checker", function() {
    it("checks if timetable is valid (no clashes)", function() {
      candidateTimetable = ["GER1000_Tutorial_B6", "CS2107_Tutorial_6",
        "CS2107_Lecture_1", "CS2105_Tutorial_3", "CS2105_Lecture_1",
        "CS2100_Lecture_1", "CS2100_Tutorial_4", "CS2100_Laboratory_6",
        "CS1231_Tutorial_9", "CS1231_Sectional Teaching_2"]
      expect(modUtils.timetableValid(candidateTimetable)).to.equal(true);
    })
  })
});