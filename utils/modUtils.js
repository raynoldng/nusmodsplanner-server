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
	url = 'http://api.nusmods.com/2017-2018/1/modules/' + moduleCode + '/timetable.json'
	var request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.send(null);	
	return JSON.parse(request.responseText);
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

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function timetableValid2(timetable) {
	if (timetable.length === 0) {
		return false;
	}

	// Check that all lessons are covered
	// var mods = new Set();
	// timetable.forEach(function(lesson) {
	// 	mods.add(lesson.split('_')[0]);
	// });
	// console.log(mods);

	// var allLessonTypes = new Set();
	// for(let mod of mods) {
	// 	var modJSON = query(mod);

	// }

	// Check that all hours are unique

}

function timetableValid(timetable) {
	// map each lesson into list of hours
	hoursOfEachLesson = timetable.map(function(lesson) {
		var tokens = lesson.split('_');
		var moduleCode = tokens[0];
		var LessonType = tokens[1];
		var ClassNo = tokens[2];

		timetable = query(moduleCode);

		hours = timetable.filter(function(lesson) {
			return lesson.LessonType === LessonType 
			&& lesson.ClassNo === ClassNo;
		}).map(function(lesson) {
			return timetableHours(lesson);
		}).reduce(function(flat, toFlatten) {
			return flat.concat(toFlatten);
		}, []);

		return hours
	});

	blockedHours = new Set();
	validFlag = true;
	for (var i = 0; i < hoursOfEachLesson.length; i++) {
		var hours = hoursOfEachLesson[i];
		for (var j = 0; j < hours.length; j++) {
			var h = hours[j];
			if (blockedHours.has(h)) {
				validFlag = false;
				break;
			} else {
				blockedHours.add(h);
			}
		}
	}

	return validFlag;
}

module.exports = {
	query,
	timetableHours, 
	timetableValid
}
