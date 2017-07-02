/*
Module timetable utility functions, for testing
Here is how a module timetable looks like:
[ { ClassNo: '1',
    LessonType: 'Sectional Teaching',
    WeekText: 'Every Week',
    DayText: 'Tuesday',
    StartTime: '1200',
    EndTime: '1500',
    Venue: 'COM1-B109' }, ...
]

*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var _ = require('lodash');

function query(moduleCode) {
	url = 'http://api.nusmods.com/2016-2017/2/modules/' + moduleCode + '/timetable.json'
}

function timetableHours(lessonSlot) {
	/* Sample lesson slot
	{ ClassNo: '1',
	    LessonType: 'Sectional Teaching',
	    WeekText: 'Every Week',
	    DayText: 'Tuesday',
	    StartTime: '1200',
	    EndTime: '1500',
	    Venue: 'COM1-B109' }
	*/
	weekdays = {"Monday": 0, "Tuesday": 1, "Wednesday": 2, "Thursday": 3, "Friday": 4};
	offset = weekdays[lessonSlot.DayText] * 24;
	oddWeekHours = _.range(lessonSlot.StartTime / 100, lessonSlot.EndTime / 100)
		.map(function(t) { return t + offset; });
	evenWeekHours = oddWeekHours.map(function(t) { return t + 120; });
	if (lessonSlot.WeekText === 'Odd Week') {
		return oddWeekHours;
	} else if (lessonSlot.WeekText === 'Even Week') {
		return evenWeekHours;
	} else { // 'Every Week'
		return oddWeekHours.concat(evenWeekHours);
	}
}

function timetableValid(timetable) {
	// map each lesson into list of hours
	hoursOfEachLesson = timetable.map(function(lesson) {
		var tokens = lesson.split('_');
		var moduleCode = tokens[0];
		var LessonType = tokens[1];
		var ClassNo = tokens[2];

		timetable = query(moduleCode);
		selectedLesson = timetable.filter(function(lesson) {
			return lesson.ClassNo == ClassNo;
		})[0];

		return timetableHours(selectedLesson);
	});

	blockedHours = new Set();

	hoursOfEachLesson.forEach(function(hours) {
		hours.forEach(function(h) {
			if (blockedHours.has(h)) {
				return false;
			} else {
				blockedHours.add(h);
			}
		});
	});

	return true;
}

module.exports = {
	query,
	timetableHours, 
	timetableValid
}
