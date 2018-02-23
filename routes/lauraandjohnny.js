var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


  router.get('/', function(req, res, next) {

    var dirpath = path.join(__dirname, '../public/images/lauraandjohnny');
    fs.readdir(dirpath, function(err, items) {
        console.log(items);
        data.images = items;

        for (var i=0; i<items.length; i++) {
            console.log(items[i]);
        }
          res.render('lauraandjohnny', data);
      });
            var data = {
              imagefolder: 'lauraandjohnny',
              images : [],
            }

});

module.exports = router;
