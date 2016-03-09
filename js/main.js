var date = new Date();
new Vue({
	el: 'body',
	data:{
		anime: anime,
		yearOption: getYearOption(),
		thisYear: date.getFullYear(),
		thisSeason: getSeason(),
		seasonOption:[
			{text:"春",value:1},
			{text:"夏",value:2},
			{text:"秋",value:3},
			{text:"冬",value:4}
		]
	}
})
function getYearOption() {
	var yearOption = [];
	for (var i = 0; i < anime.length; i++) {
		if (yearOption.indexOf(anime[i].year) == -1){ yearOption.push(anime[i].year); }
	}
	return yearOption;
}
function getSeason() {
	var month = date.getMonth()+1;
	var season;
	switch(month){
		case 1: season = 4;break;
		case 2: season = 4;break;
		case 3: season = 4;break;
		case 4: season = 1;break;
		case 5: season = 1;break;
		case 6: season = 1;break;
		case 7: season = 2;break;
		case 8: season = 2;break;
		case 9: season = 2;break;
		case 10: season = 3;break;
		case 11: season = 3;break;
		case 12: season = 3;break;
	}
	return season;
}
