var express = require('express');
var request = require('request');

module.exports = {
    init : init
};

function init(route, router){
    router.get('/' + route, function(req,res) {
        request('https://randomuser.me/api/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.status(200).send(body);
            }
            else {
                res.status(500).send({"message": 'Unexpected error'});
            }
        });
    });

    router.options('/' + route, function (req, res) {
        res.status(200).send({"message": 'Defined: Use GET/' + route,
                               "Allow" : "GET, OPTIONS"});
    });
}
