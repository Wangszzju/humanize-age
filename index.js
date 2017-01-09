
const BeforeBirth = {
	en: 'Before birth',
	ja: '出生前'
};
const aDay = 60 * 60 * 24 * 1000;

module.exports = {
	getHumanizedAge(birthday, date, _lang = 'en'){
		const lang = _lang.substr(0, 2);
		if (date < birthday){
			return BeforeBirth[lang];
		}
		var age = this.difference(birthday, date);
		if(age.y == 0 && age.m == 0){
			return this.day(age.d, lang);
		}else if(age.y == 0){
			return this.month_day(age.m, age.d, lang);
		}else if(age.y < 15){
			return this.year_month(age.y, age.m, lang);
		}else{
			return this.year(age.y, lang);
		}
	},
	nMonthAfter(date, n){
		if(n == 0) return date;
		const y = date.getFullYear();
		const m = date.getMonth();
		var d = date.getDate();
		const lastDay = this.numberOfDays(y, m + n);
		if(d > lastDay) d = lastDay + 1;
		return new Date(Date.UTC(y + parseInt(n / 12), m + n % 12, d));
	},
	oneMonthAfter(date){
		// 2000-10-01 -> return 2000-11-01
		// 2000-01-30 -> return 2000-03-01
		// 2000-12-05 -> return 2001-01-05
		return this.nMonthAfter(date, 1);
	},
	nYearAfter(date, n){
		return this.nMonthAfter(date, 12 * n);
	},
	difference(d1, d2){
		if (d1 > d2) throw new Error('cannot calculate difference');
		var y = parseInt((d2 - d1) / aDay / 365) - 1;
		var m, d;
		if(this.nYearAfter(d1, y + 1) <= d2) y++;
		for(var i = 0; i < 12; i++){
			const dx = this.nMonthAfter(d1, y * 12 + i);
			const dy = this.nMonthAfter(d1, y * 12 + i + 1);
			if(d2 < dy){
				m = i;
				d = (d2 - dx) / aDay;
				break;
			}
		}
		return {y: y, m: m, d: d};
	},
	numWithUnit(n, unit){
		return `${n} ${unit}${n <= 1 ? '' : 's'}`;
	},
	day(d, lang='en'){
		const day = {
			en: 'Day',
			ja: '日齢'
		};
		return `${day[lang]} ${d}`;
	},
	month_day(m, d, lang='en'){
		switch(lang){
		case 'en':
			var mstr = this.numWithUnit(m, 'month');
			var dstr = this.numWithUnit(d, 'day');
			return `${mstr} and ${dstr} old`;
		case 'ja':
			return `${m}ヶ月 ${d}日`;
		}
	},
	year_month(y, m, lang='en'){
		switch(lang){
		case 'en':
			var ystr = this.numWithUnit(y, 'year');
			var mstr = this.numWithUnit(m, 'month');
			return `${ystr} and ${mstr} old`;
		case 'ja':
			return `${y}歳 ${m}ヶ月`;
		}
	},
	year(y, lang='en'){
		switch(lang){
		case 'en':
			return this.numWithUnit(y, 'year') + ' old';
		case 'ja':
			return `${y}歳`;
		}
	},
	isLeapYear(year){
		return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
	},
	numberOfDays(year, month){
		// month must be 0-origin.
		if(month >= 12) return this.numberOfDays(year + 1, month - 12);
		return [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30,
				31, 31, 30, 31, 30, 31][month];
	}
};
