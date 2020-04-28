const express = require('express');
const router = express.Router();
const reqlib = require('app-root-path').require;
const logger = reqlib('logger');

const jsf = require('json-schema-faker');
const util = require('util')
const chance = require('chance')
const faker = require('faker')
jsf.extend('chance', () => new chance.Chance());
jsf.extend('faker', () => faker);

var recentDays = 5;

var schema = {
  "type": "array",
  "minItems": 10,
  "maxItems": 20,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "name.findName"
	    },
	    "food": {
	    	"type": "string",
	    	"faker": "commerce.product"
	    },
	    "hours": {
	      "type": "integer",
	      "minimum": 0,
  		  "maximum": 1
	    },
	    "minutes": {
	      "type": "integer",
	      "minimum": 0,
  		  "maximum": 59
	    },
	    "seconds": {
	      "type": "integer",
	      "minimum": 0,
  		  "maximum": 59
	    },
	    "feedback": {
	      "faker": "random.boolean"
	    }
	},
	  "required": [
	    "name",
	    "food", 
	    "hours",
	    "minutes",
	    "seconds",
	    "feedback"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
  	   logger.debug(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('food', 
	  	{  food:  sample });
  });

  
});

module.exports = router;
