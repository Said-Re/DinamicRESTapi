var express = require('express');
var router = express.Router();

var routes = [];

router.post('/routes', function(req, res) {
  var newRoutes = req.body;
  addRoutesIfNotexists(newRoutes['routes']);
  res.status(200).send('added');
});

function addRoutesIfNotexists(newRoutes) {
  for	(i = 0; i < newRoutes.length; i++) {
    if (routes.indexOf(newRoutes[i]) == -1) {
        routes.push(newRoutes[i]);
        var dynamicRoute = require('./dynamicRoutes');
        dynamicRoute.init(newRoutes[i], router);
    }
  }
}

module.exports = router;
