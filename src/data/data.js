const City = require('../models/City');
const Country = require('../models/Country');
const Actor = require('../models/Actor');
const Genre = require('../models/Genre');

const data = [
  {
    modelName: Country,
    data: { name: 'Belarus' },
    connectedData: [
      { modelName: City, data: { name: 'Minsk', countryId: 'ref' } },
      { modelName: Actor, data: { firstName: 'Vasiliy', lastName: 'Pupkin', countryId: 'ref' } },
    ],
  },
  {
    modelName: Country,
    data: { name: 'Ukraine' },
    connectedData: [
      { modelName: City, data: { name: 'Kiev', countryId: 'ref' } },
      { modelName: Actor, data: { firstName: 'Grigory', lastName: 'Grigoriev', countryId: 'ref' } },
    ],
  },
  {
    modelName: Country,
    data: { name: 'Russia' },
    connectedData: [
      { modelName: City, data: { name: 'Moscow', countryId: 'ref' } },
      { modelName: Actor, data: { firstName: 'Andrey', lastName: 'Vorobey', countryId: 'ref' } },
    ],
  },
  {
    modelName: Genre,
    data: { name: 'Drama' },
  },
  {
    modelName: Genre,
    data: { name: 'Action' },
  },
  {
    modelName: Genre,
    data: { name: 'Comedy' },
  },
  {
    modelName: Genre,
    data: { name: 'Fantasy' },
  },
  {
    modelName: Genre,
    data: { name: 'Horror' },
  },
  {
    modelName: Genre,
    data: { name: 'Mystery' },
  },
  {
    modelName: Genre,
    data: { name: 'Thriller' },
  },
  {
    modelName: Genre,
    data: { name: 'Western' },
  },
];

module.exports = data;
