const City = require('../models/City');
const Country = require('../models/Country');
const Actor = require('../models/Actor');
const Genre = require('../models/Genre');

let data = [];

const belarus = new Country({
  name: 'Belarus',
});
data.push(belarus);

const ukraine = new Country({
  name: 'Ukraine',
});
data.push(ukraine);

const russia = new Country({
  name: 'Russia',
});
data.push(russia);

const minsk = new City({
  name: 'Minsk',
  countryId: belarus._id,
});
data.push(minsk);

const kiev = new City({
  name: 'Kiev',
  countryId: ukraine._id,
});
data.push(kiev);

const moscow = new City({
  name: 'Moscow',
  countryId: russia._id,
});
data.push(moscow);

const pupkin = new Actor({
  firstName: 'Vasiliy',
  lastName: 'Pupkin',
  countryId: belarus._id,
});
data.push(pupkin);

const grigoriev = new Actor({
  firstName: 'Grigory',
  lastName: 'Grigoriev',
  countryId: ukraine._id,
});
data.push(grigoriev);

const vorobey = new Actor({
  firstName: 'Andrey',
  lastName: 'Vorobey',
  countryId: russia._id,
});
data.push(vorobey);

const drama = new Genre({
  name: 'drama',
});
data.push(drama);

const action = new Genre({
  name: 'action',
});
data.push(action);

const comedy = new Genre({
  name: 'comedy',
});
data.push(comedy);

const fantasy = new Genre({
  name: 'fantasy',
});
data.push(fantasy);

const horror = new Genre({
  name: 'horror',
});
data.push(horror);

const mystery = new Genre({
  name: 'mystery',
});
data.push(mystery);

const thriller = new Genre({
  name: 'thriller',
});
data.push(thriller);

module.exports = data;
