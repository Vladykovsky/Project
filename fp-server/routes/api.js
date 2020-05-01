const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/best', (req, res) => {
  res.send([
  	 {name: "Danik", time: "2019-11-01"},
  	 {name: "Anton", time: "2019-11-02"},
  	 {name: "Bob", time: "2019-11-03"}]);
});

module.exports = router;
