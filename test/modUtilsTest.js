var expect = require("chai").expect;
var modUtils = require("../utils/modUtils");

describe("Module Utilities", function() {
  describe("NUSMods API query", function() {
    it("returns a modules timetable", function() {
      var NUSModsCS1010 = [{"ClassNo":"1","LessonType":"Sectional Teaching","WeekText":"Every Week","DayText":"Monday","StartTime":"1000","EndTime":"1200","Venue":"LT15"},{"ClassNo":"2","LessonType":"Sectional Teaching","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1000","EndTime":"1200","Venue":"LT15"},{"ClassNo":"C02","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Monday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B110"},{"ClassNo":"C03","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Monday","StartTime":"1600","EndTime":"1800","Venue":"COM1-B110"},{"ClassNo":"C04","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B108"},{"ClassNo":"C05","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1600","EndTime":"1800","Venue":"COM1-B108"},{"ClassNo":"C06","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B110"},{"ClassNo":"C07","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1600","EndTime":"1800","Venue":"COM1-B110"},{"ClassNo":"C08","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B111"},{"ClassNo":"C09","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1600","EndTime":"1800","Venue":"COM1-B111"},{"ClassNo":"C1A","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Monday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B108"},{"ClassNo":"C1B","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Monday","StartTime":"1600","EndTime":"1800","Venue":"COM1-B108"},{"ClassNo":"T01","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Monday","StartTime":"1000","EndTime":"1200","Venue":"COM1-B110"},{"ClassNo":"T02","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Monday","StartTime":"1200","EndTime":"1400","Venue":"COM1-B110"},{"ClassNo":"T03","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1000","EndTime":"1200","Venue":"COM1-B110"},{"ClassNo":"T04","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Tuesday","StartTime":"1200","EndTime":"1400","Venue":"COM1-B110"},{"ClassNo":"T05","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Wednesday","StartTime":"1000","EndTime":"1200","Venue":"COM1-B110"},{"ClassNo":"T06","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Wednesday","StartTime":"1200","EndTime":"1400","Venue":"COM1-B110"},{"ClassNo":"T07","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Wednesday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B110"},{"ClassNo":"T08","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Wednesday","StartTime":"1000","EndTime":"1200","Venue":"COM1-B108"},{"ClassNo":"T09","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Wednesday","StartTime":"1200","EndTime":"1400","Venue":"COM1-B108"},{"ClassNo":"T10","LessonType":"Tutorial","WeekText":"Every Week","DayText":"Wednesday","StartTime":"1400","EndTime":"1600","Venue":"COM1-B108"}];
      var cs1010 = modUtils.query('CS1010');
      expect(JSON.stringify(cs1010)).to.equal(JSON.stringify(NUSModsCS1010));
    });
  });

  describe("NUSMods timetable valid checker", function() {
    it("True for valid timetable (no clash)", function() {
      candidateTimetable = ["MA1102R_Lecture_SL1", "MA1102R_Tutorial_T04", "MA1102R_Laboratory_B10", "GER1000_Tutorial_S05", "CS1231_Tutorial_18", "CS1231_Sectional Teaching_1", "MA1100_Tutorial_T06", "MA1100_Lecture_SL1"]
      expect(modUtils.timetableValid(candidateTimetable)).to.equal(true);
    })
    it("False if there is a clash", function() {
      candidateTimetable = ["MA1102R_Lecture_SL1", "MA1102R_Tutorial_T04", "MA1102R_Laboratory_B06", "CS1231_Tutorial_15", "CS1231_Sectional Teaching_2", "GER1000_Tutorial_S05", "MA1100_Tutorial_T06", "MA1100_Lecture_SL1"]
      expect(modUtils.timetableValid(candidateTimetable)).to.equal(false);
    })
  })
});