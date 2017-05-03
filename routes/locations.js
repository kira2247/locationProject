var express = require('express');
var router = express.Router();

var Location = require('../models/location');

//list all location
router.get('/', (req,res,next)=>{
  Location.find()
          .exec((err,locations)=>{
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: locations
            });
          });
});

//get detail location

router.get('/details/:id', (req,res,next)=>{
  Location.findById(req.params.id,(err,location)=>{
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    if(!location){
      return res.status(500).json({
        title: 'No location found!',
        error: {
          message: 'Location not found'
        }
      });
    }
    res.status(200).json({
      message: 'Get Location Successfully',
      obj: location
    });
  });
});

//add new location
router.post('/', (req,res,next)=>{
  var location = new Location({
    name: req.body.name,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    workTime: req.body.workTime,
    goods: req.body.goods,
  });
  location.save((err, result)=>{
    if(err){
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved location',
      obj: result
    });
  });
});

//updateLocation
router.patch('/:id', (req,res,next)=>{
  Location.findById(req.params.id, (err,location)=>{
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    if(!location){
      return res.status(500).json({
        title: 'No location found!',
        error: {
          message: 'Location not found'
        }
      });
    }
    location.name = req.body.name;
    location.address= req.body.address;
    location.phoneNumber = req.body.phoneNumber;
    location.workTime = req.body.workTime;
    location.goods = req.body.goods;
    location.save((err, result)=>{
      if(err){
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated location',
        obj: result
      });
    });
  });
});

//Delete location

  router.delete('/:id', (req,res,next)=>{
    Location.findById(req.params.id, (err,location)=>{
      if (err) {
          return res.status(500).json({
              title: 'An error occurred',
              error: err
          });
      }
      if(!location){
        return res.status(500).json({
          title: 'No location found!',
          error: {
            message: 'Location not found'
          }
        });
      }
      location.remove((err, result)=>{
        if(err){
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Removed location',
          obj: result
        });
      });
  });
});


module.exports = router;
