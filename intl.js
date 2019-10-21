// Intl.DateTimeFormat
const now = new Date();

new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);
// Tuesday, October 15, 2019
new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(now);
// October 15, 2019
new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(now);
// Oct 15, 2019
new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(now);
// 10/15/19
new Intl.DateTimeFormat('fr-CA', { dateStyle: 'long' }).format(now);
// 15 octobre 2019
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles',
};
new Intl.DateTimeFormat(options).format(now);

// new Intl.RelativeTimeFormat
const relative = new Intl.RelativeTimeFormat('en', {
  style: 'long',
  numeric: 'auto',
});

relative.format(3, 'day'); // in 3 days
relative.format(7, 'day'); // in 7 days
relative.format(1, 'day'); // tomorrow
relative.format(-2, 'day'); // 2 days ago
relative.format(-1, 'day'); // yesterday
relative.format(100, 'year'); // in 100 years
relative.format(-1, 'year'); // last year
relative.format(0, 'year'); // this year
relative.format(1, 'year'); // next year
relative.format(-20, 'second'); // 20 seconds ago
relative.format(-1, 'second'); // 1 second ago
relative.format(10, 'second'); // in 10 seconds

const relativeFR = new Intl.RelativeTimeFormat('fr', {
  style: 'long',
  numeric: 'auto',
});

relativeFR.format(3, 'day'); // dans 3 jours
relativeFR.format(7, 'day'); // dans 7 jours
relativeFR.format(1, 'day'); // demain
relativeFR.format(-2, 'day'); // avant - hier
relativeFR.format(-1, 'day'); // hier
relativeFR.format(100, 'year'); // dans 100 ans
relativeFR.format(-1, 'year'); // l’année dernière
relativeFR.format(0, 'year'); // cette année
relativeFR.format(1, 'year'); // l’année prochaine
relativeFR.format(-20, 'second'); // il y a 20 secondes
relativeFR.format(-1, 'second'); // il y a 1 seconde
relativeFR.format(10, 'second'); // dans 10 secondes

// Intl.NumberFormat

// numbers
new Intl.NumberFormat('en-CA').format(872384.32);
// >> 872,384.32
new Intl.NumberFormat('fr-FR').format(872384.32);
// >> 872 384,32

// units
new Intl.NumberFormat('en-GB', { style: 'unit', unit: 'liter' }).format(16);
// >> 16 l
new Intl.NumberFormat('en-GB', {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long',
}).format(16);
// >> 16 litres

// currency
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(
  1000
);
// >> €1,000.00
new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
  1000
);
// >> 1.000,00 €
new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(
  1000
);
// >> 1.000,00 $
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD' }).format(
  12.32
);
// >> CA$12.32
new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(
  12.32
);
// >> $12.32

// Intl.ListFormat
const foods = ['Pizza', 'Tacos', 'Burgers'];

new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(foods);
// Pizza, Tacos, and Burgers
new Intl.ListFormat('en', { style: 'short', type: 'conjunction' }).format(
  foods
);
// Pizza, Tacos, & Burgers
new Intl.ListFormat('en', { style: 'long', type: 'disjunction' }).format(foods);
// Pizza, Tacos, or Burgers
new Intl.ListFormat('en', { style: 'long', type: 'unit' }).format(foods);
// Pizza, Tacos, Burgers
new Intl.ListFormat('fr-CA', { style: 'long', type: 'conjunction' }).format(
  foods
);
// Pizza, Tacos et Burgers
new Intl.ListFormat('fr-CA', { style: 'long', type: 'disjunction' }).format(
  foods
);
// Pizza, Tacos ou Burgers
new Intl.ListFormat('th-thai', { style: 'long', type: 'disjunction' }).format(
  foods
);
// Pizza, Tacos หรือ Burgers
new Intl.ListFormat('th-thai', { style: 'long', type: 'conjunction' }).format(
  foods
);
// Pizza Tacos และBurgers

// Intl.PluralRules

function stndrdth(number) {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
  // pr.select(number) returns on of the following:
  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th',
  };
  return `${number}${ordinals[pr.select(number)]}`;
}

stndrdth(1); // 1st
stndrdth(2); // 2nd
stndrdth(3); // 3rd
stndrdth(4); // 4th

const dates = Array.from({ length: 31 }, (_, number) => stndrdth(number + 1));
// ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]

// Intl.Collator

new Intl.Collator('en-US').compare('a', 'a'); // 0 SAME
new Intl.Collator('en-US').compare('a', 'b'); // -1 BEFORE
new Intl.Collator('en-US').compare('b', 'a'); // 1 AFTER
new Intl.Collator('en-US').compare('a', 'A'); // -1 BEFORE
new Intl.Collator('en-US').compare('a', 'á'); // -1 BEFORE
new Intl.Collator('en-US', { sensitivity: 'base' }).compare('a', 'A'); // 0 SAME
new Intl.Collator('en-US', { sensitivity: 'base' }).compare('a', 'ä'); // 0 SAME



const options = { weekday: 'long', hour: 'numeric' };
new Intl.DateTimeFormat('en-US', options).format(new Date())
// "Friday, 2 PM"
