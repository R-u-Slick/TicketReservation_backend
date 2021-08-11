const { Router } = require('express');
const City = require('../models/City');
const Country = require('../models/Country');
const Actor = require('../models/Actor');
const Genre = require('../models/Genre');
const data = require('../data/data');


const router = Router();

router.get('/dbinit', async (req, res) => {
  const modelsArray = [City, Country, Actor, Genre];

  async function emptyCheck(models) {
    let isEmpty = true;
    for (let i = 0; i < models.length; i++) {
      const result = await models[i].findOne({});
      if (result) {
        isEmpty = false;
        return isEmpty;
      }
    }
    return isEmpty;
  }

 async function dbFill (info) {
    info.forEach((v)=>{
      let newElement = new v.modelName(v.data);
      newElement.save((err) => {
        if (err) return console.log(err);
        console.log('object saved', newElement);
        if (v.connectedData) {
          for (let i = 0; i < v.connectedData.length; i++) {
            let data = v.connectedData[i].data;
            for (key in data) {
              if (data[key]==="ref") {data[key] = newElement._id}
            }
            let newElement1 = new v.connectedData[i].modelName(v.connectedData[i].data);
            newElement1.save((err)=>{
              if (err) return console.log(err);
              console.log('object saved', newElement1);
            })
          }
        }
      })
    })
  }

  if (await emptyCheck(modelsArray)) {
    dbFill(data);
  }
});

module.exports = router;
