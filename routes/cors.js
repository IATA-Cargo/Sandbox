const express = require('express');
const cors = require('cors');
const app = express();

var whitelist = ['http://localhost:5000', 'http://www.onerecordcargo.org/'];

var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);