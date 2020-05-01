const express = require('express');
const router = express.Router();
const faker = require('faker');


router.get('/who', (req, res) => {
   var who = [ 
       { "name": "Danik", "id": "Danik"}, 
         { "name": "Anton", "id": "Anton" },
         { "name": "Bob", "id": "Bob" }
      ];
    res.render('who', 
  			{ "who": who}
  	);
});

router.get('/mark', (req, res) => {
   var mark = [ 
       { "mark": "8.2"}, 
         { "mark": "8.4"},
         { "mark": "7.8"}
      ];
    res.render('mark', 
        { "mark": mark}
    );
});
 

router.get('/feedback', (req, res) => {
    res.render('feedback', 
        { "feedback": [ 
           {"name": faker.name.lastName(), "id": "Иван", "url":"https://replyua.net/uploads/posts/2019-04/medium/1554627636_aleksey-panin.jpg","feedback": "Very good"}, 
           { "name": faker.name.lastName(),"id": "Иван", "url":"https://files.adme.ru/files/news/part_193/1937415/27890915-6_funcage-1538023401-728-d64c9ab71f-1542281097.jpg","feedback": "Delishes"},
           { "name": faker.name.lastName(),"id": "Иван", "url":"https://files.adme.ru/files/news/part_193/1937415/27890715-orsvBRI-1538030881-728-6ae2da4203-1542281097.jpg","feedback": "so good"},
          ]
        }
    );
});

module.exports = router;
