var vm = new Vue({
	el: 'html',
	data:{
		anime: anime,
		yearOption: getYearOption(),
		thisYear: getTime().year,
		thisSeason: getTime().season,
		seasonOption:[
			{text:"冬",value:"冬"},
			{text:"春",value:"春"},
			{text:"夏",value:"夏"},
			{text:"秋",value:"秋"}
		],
	}
});
function getYearOption() {
	var yearOption = [];
	for (var i = 0; i < anime.length; i++) {
		if (yearOption.indexOf(anime[i].year) == -1){ yearOption.push(anime[i].year); }
	}
	return yearOption;
}
function getTime() {
	var date = new Date();
	var time = new Object();
	var month = date.getMonth()+1;
	var season;
	switch(month){
		case 1: season = "冬";break;
		case 2: season = "冬";break;
		case 3: season = "冬";break;
		case 4: season = "春";break;
		case 5: season = "春";break;
		case 6: season = "春";break;
		case 7: season = "夏";break;
		case 8: season = "夏";break;
		case 9: season = "夏";break;
		case 10: season = "秋";break;
		case 11: season = "秋";break;
		case 12: season = "秋";break;
	}
	time.year = date.getFullYear();
	time.season = season;
	return time;
}
