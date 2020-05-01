const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/', (req, res) => {
   var events = [ 
       { "name": faker.name.lastName(), 
  	   	 "time": faker.date.future()
  	   }, 
  	   { "name": faker.name.lastName(), 
  	   	 "time": faker.date.future()
  	   }
  	];

    res.render('index', 
  			{ "events": events, title: "Express"}
  	);
});
module.exports = router;
