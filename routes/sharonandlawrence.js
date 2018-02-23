var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


  router.get('/', function(req, res, next) {

    var dirpath = path.join(__dirname, '../public/images/sharonandlawrence');
    fs.readdir(dirpath, function(err, items) {
        console.log(items);
        data.images = items;

        for (var i=0; i<items.length; i++) {
            console.log(items[i]);
        }
          res.render('sharonandlawrence', data);
      });
            var data = {
              imagefolder: 'sharonandlawrence',
              images : [],
            }

});

module.exports = router;
