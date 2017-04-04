"use strict";

const time = require('time');
const timezone = process.env.TIMEZONE;

exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone(timezone);
    callback(null, {
        statusCode: '200',
        body: 'The time in ' + timezone + ' is ' + currentTime.toString(),
    });
};