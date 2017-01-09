humanize-age
========================================

Convert differences of dates into human-readable strings.

What is humanize-age?
----------------------------------------

**humanize-age** is a very simple npm package which makes human-readable strings like **"2 years and 3 months old"** from the birthday and a specifed date.

How to Use
----------------------------------------

```javascript
const humanizeAge = require('humanize-age');

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

```

API
----------------------------------------
### `getHumanizedAge(birthday, date)`

Returns string which represents the age in human-readable form.
For example, first method call in the example code above returns "3 months and 8 days old".

If s/he is younger than 1 month old, this method returns age in days (e.g.: "Day 14").

If s/he is younger than 1 year old, this method returns age in months (e.g.: "3 months old").

If s/he is younger than 15 year old, this method returns age in years and months (e.g.: "8 years and 3 months old").

If s/he is older than or equal to 15 year old, this method returns age in years (e.g.: "30 years old").

### `difference(d1, d2)`

Returns object which represents difference of specified two dates. `d1` must be smaller than or equal to `d2`.

For example, `humanizeAge.difference(new Date("1984-09-24"), new Date("2017-01-09"))` returns `{ y: 32, m: 3, d: 16 }`

### Note
Ages will be calculated assuming that specified dates are 00:00 in UTC.

Author information
----------------------------------------
Programmed by kcrt (TAKAHASHI, Kyohei)
http://profile.kcrt.net/
	
License
----------------------------------------
	Copyright © 2016 kcrt (TAKAHASHI, Kyohei)
	Released under the MIT license
	http://opensource.org/licenses/mit-license.php

Reference
----------------------------------------
none
