const router = require("express").Router();
const distance = require('google-distance-matrix');
const util = require('util');
const Transfer = require("../models/transfer");
const googleAPIKey = 'AIzaSyBN-8zSdr3WI2rZ9CaoUa1kM8djr8M2Y8U';
distance.key(googleAPIKey);
distance.mode('driving');
distance.units('metric');

router.post("/api/submit_reservation", function ({body}, res) {
    
  Transfer.create(body)
    .then(dbTransfer => {
      res.status(200).json({status:'OK'});
    })
    .catch(err => {
      res.status(200).json({status:'ERROR'});
    });

});

router.post("/api/calculate_distance", function ({body}, res) {

  let origins = [body.origin];
  let destinations = [body.destination];
  
  distance.matrix(origins, destinations, function (err, distances) {
     if(distances.status === 'OK')
     { 
       console.log(distances);
       const journeyDistance = distances.rows[0].elements[0].distance.value / 1000;
       const estimatedTime = distances.rows[0].elements[0].duration.value / 60;
       const address = distances.destination_addresses[0];
        let response = {
          status : 'OK',
          prices: [
            {name:'sedan', address: address, description: '3 Bags | 3 Passengers', image:'lux_sedan.png',  price: parseFloat(.50 * journeyDistance).toFixed(2)},
            {name:'crossover', address: address, description: '4 Bags | 4 Passengers', image:'fleet_midsize_crossover.png', price: parseFloat(.65 * journeyDistance).toFixed(2)},
            {name:'suv', address: address, description: '6 Bags | 6 Passengers', image:'lux_suv.png', price: parseFloat(.85 * journeyDistance).toFixed(2)},
            {name:'van', address: address, description: '8 Bags | 8 Passengers', image:'luxury_van.png', price: parseFloat(.65 * journeyDistance).toFixed(2)},
          ],
          distance : parseFloat(journeyDistance).toFixed(2) + " KMs",
          estimated_time: Math.floor(estimatedTime) + " Minutes"
        }
        console.log(response);
        res.status(200).json(response);
     }
     else
     {
        res.status(200).json({status:'NOT FOUND'});
     }

  });

});

module.exports = router;