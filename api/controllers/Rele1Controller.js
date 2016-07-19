/**
 * Rele1Controller
 *
 * @description :: Server-side logic for managing Rele1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');

    require('shelljs/global');

module.exports = {
  // return latest rele1 status from db
  latest: function(req, res, next) {
    Rele1.find({ id: { '>': 0 }, limit: 1, sort: 'id DESC'}, function foundLampo(err, rele1) {
      if (err) return next(err);
      if (!rele1) return next();
      return res.json('rele1/latest', {
        rele1: rele1
      });
    });
  },
  // exec remote file with command
  rele1on: function(req, res, next) {
    const spawn = require('child_process').exec;
    const child = exec('sudo ./remote -m 80',
      function tulosOn(error, stdout, stderr) {
        //console.log('stdout: ' + stdout);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        res.redirect('/rele1/changer1state');
      });
  },
  // exec remote file with command
  rele1off: function(req, res, next) {
    const exec = require('child_process').exec;
    const child = exec('sudo ./remote -m 81', {timeout: 6000, killSignal: 'SIGHUP'},
    function tulosOff(error, stdout, stderr) {
        //console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        res.redirect('/rele1/changer1state');
    });
  },
};

