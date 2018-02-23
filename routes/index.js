var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  var dirpath = path.join(__dirname, '../public/images/carousel');
  fs.readdir(dirpath, function(err, items) {
      console.log(items);
      data.images = items;

      for (var i=0; i<items.length; i++) {
        console.log(items[i]);
      }
        res.render('index', data);
    });


  var data = {
    imagefolder: '/carousel',
    images : [],
    galleries: [
      {

      wedding: 'Sharon and Lawrence',
      image: 'images/lawrsharthumb.jpg',
      link: 'sharonandlawrence',


      },
      {

      wedding: 'Hugh and Enora',
      image: 'images/hughandenorathumb.jpg',
      link: 'hughandenora',
      },
      {

      wedding: 'Antonia and Richard',
      image: 'images/antoniaandrichthumb.jpg',
      link: 'antoniaandrichard',
    },
      {
      wedding: 'Laura and Johnny',
      image: 'images/lauraandjohnthumb.jpg',
      link: 'lauraandjohnny',

    },
    {
      wedding: 'Wayne and Olga',
      image: 'images/wayneolgathumb.jpg',
      link: 'wayneandolga',

    },
    {
      wedding: 'Riaz and Kimi',
      image: 'images/riazandkimithumb.jpg',
      link: 'riazandkimi',

    },
    {
      wedding: 'Matt and Kate',
      image: 'images/mattandkatethumb.jpg',
      link: 'mattandkate',

    },
    {
      wedding: 'Jim and Rabiah',
      image: 'images/jimandrabiahthumb.jpg',
      link: 'jimandrabiah',

    },
    {
      wedding: 'Jess and Martin',
      image: 'images/jessandmartthumb.jpg',
      link: 'jessandmartin',

    },

  ]
}



});

module.exports = router;
