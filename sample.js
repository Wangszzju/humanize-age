const humanizeAge = require('.');

const myBirthday = new Date('1984-09-24');

/* How old were I on the first new year's day? */
const newYearsDay = new Date('1985-01-01');
console.log(`I was ${humanizeAge.getHumanizedAge(myBirthday, newYearsDay)} on my first new year's day.`);

/* How old were I when Atlanta Olympic started? */
const atlantaOlympic = new Date('1996-07-19');
console.log(`I was ${humanizeAge.getHumanizedAge(myBirthday, atlantaOlympic)} when the Olympic games were held in Atlanta.`);

/* And how old am I? */
const today = new Date();
console.log(`And today, I am ${humanizeAge.getHumanizedAge(myBirthday, today)}.`);

