const assert = require('assert');
const humanizeAge = require('..');

const myBirthday = new Date('1984-09-24');
const dates = [
	new Date('1984-09-23'), new Date('1984-09-24'), new Date('1984-09-25'),
	new Date('1984-10-23'), new Date('1984-10-24'), new Date('1984-10-25'),
	new Date('1985-08-23'),
	new Date('1985-09-23'), new Date('1985-09-24'), new Date('1985-09-25'),
	new Date('1985-10-24'),
	new Date('1990-09-23'), new Date('1990-09-24'),
	new Date('2017-09-24')
];

const leapDate = new Date('2000-02-29');
const leadDateCheck = [
	new Date('2001-02-28'), new Date('2008-02-28'), new Date('2008-02-29')
];

describe('birthday and date', () => {
	it('English', () => {
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[0]), 'Before birth');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[1]), 'Day 0');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[2]), 'Day 1');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[3]), 'Day 29');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[4]), '1 month and 0 day old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[5]), '1 month and 1 day old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[6]), '10 months and 30 days old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[7]), '11 months and 30 days old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[8]), '1 year and 0 month old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[9]), '1 year and 0 month old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[10]), '1 year and 1 month old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[11]), '5 years and 11 months old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[12]), '6 years and 0 month old');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[13]), '33 years old');
	});
	it('Japanese', () => {
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[0], 'ja-JP'), '出生前');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[1], 'ja-JP'), '日齢 0');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[2], 'ja-JP'), '日齢 1');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[3], 'ja-JP'), '日齢 29');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[4], 'ja-JP'), '1ヶ月 0日');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[5], 'ja-JP'), '1ヶ月 1日');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[6], 'ja-JP'), '10ヶ月 30日');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[7], 'ja-JP'), '11ヶ月 30日');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[8], 'ja-JP'), '1歳 0ヶ月');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[9], 'ja-JP'), '1歳 0ヶ月');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[10], 'ja-JP'), '1歳 1ヶ月');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[11], 'ja-JP'), '5歳 11ヶ月');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[12], 'ja-JP'), '6歳 0ヶ月');
		assert.equal(humanizeAge.getHumanizedAge(myBirthday, dates[13], 'ja-JP'), '33歳');
	});
});

describe('Leap years', () => {
	it('English', () => {
		assert.equal(humanizeAge.getHumanizedAge(leapDate, leadDateCheck[0]), '11 months and 30 days old');
		assert.equal(humanizeAge.getHumanizedAge(leapDate, leadDateCheck[1]), '7 years and 11 months old');
		assert.equal(humanizeAge.getHumanizedAge(leapDate, leadDateCheck[2]), '8 years and 0 month old');
	});
});
