/**
 * Lampo1Controller
 *
 * @description :: Server-side logic for managing lampo1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res) {
    res.view();
  },

  create: function(req, res, next) {
    Lampo1.create(req.params.all(), function lampo1Created(err, lampo1) {
      if (err) return next(err);

      res.redirect('/lampo1/show' + lampo1.id);
    });
  },

  show: function(req, res, next) {
    Lampo1.findOne(req.param('id'), function foundLampo(err, lampo1) {
      if (err) return next(err);
      if (!lampo1) return next();

      res.view({
        lampo1: lampo1
        });
      });
  },

  page: function(req, res, next) {
    Lampo1.find(function basicLampo1(err, lampo1) {
      if (err) return(err);

      res.view({
        lampo1: lampo1
      });
    });
  },

  json: function(req, res, next) {
    Lampo1.find(function jsonLampo1(err, lampo1) {
      if (err) return(err);

      res.json({
        lampo1: lampo1
      });
    });
  },
  // get latest lampo1 temperature and timestamp
  latestL1: function(req, res, next) {
    Lampo1.find({ id: { '>': 0 }, limit: 1, sort: 'id DESC'}, function latestLampo(err, lampo1) {
      if (err) return next(err);
      if (!lampo1) return next();
      return res.json('lampo1/latestL1', {
        lampo1: lampo1
        });
      });
  },

  // select current day
    current: function(req, res, next) {
      Lampo1.query('SELECT lampo,timestamp from lampo1 WHERE timestamp >= CURDATE() AND timestamp <= date_add(CURDATE(), INTERVAL 2 DAY);', function(err, lampo1) {
        if (err) return res.serverError(err);
        return res.json({
        lampo1: lampo1
        });
      });
    },

  // get one day results
  day1: function(req, res, next) {
    params = req.params.all();
    var Promise = require('bluebird');
    if (params.start == "") {
      params.start == CURDATE();
      //console.log(params.start);
    }
    else {
      params.start = params.start;
    }
    Lampo1.query("SELECT lampo,timestamp from lampo1 WHERE timestamp >= ? AND timestamp <= date_add( ( ? , INTERVAL 1 DAY)", [ params.start, params.start ])
    var dayQueryAsync = Promise.promisify(Lampo1.query);
    dayQueryAsync("SELECT lampo,timestamp from lampo1 WHERE timestamp >= ? AND timestamp <= date_add( ? , INTERVAL 1 DAY)", [ params.start, params.start ])
    .then(function(lampo) {
      return res.json({
        lampo1: lampo});
    });
  },

    // get one day max temperature
  day1max: function(req, res, next) {
    params = req.params.all();
    var Promise = require('bluebird');
    if (params.start == "") {
      params.start == CURDATE();
      //console.log(params.start);
    }
    else {
      params.start = params.start;
      //console.log("else " + params.start);
    }
      Lampo1.query("SELECT lampo,timestamp from lampo1 WHERE timestamp >= ? AND timestamp <= date_add( ( ? , INTERVAL 1 DAY)", [ params.start, params.start ])
    var dayQueryAsync = Promise.promisify(Lampo1.query);
    dayQueryAsync("SELECT MAX(lampo) AS lampo from lampo1 WHERE timestamp >= ? AND timestamp <= date_add( ? , INTERVAL 1 DAY)", [ params.start, params.start ])
    .then(function(lampo) {
      return res.json({
        lampo1: lampo});
    });
  },

        // get one day max temperature
  day1min: function(req, res, next) {
    params = req.params.all();
    var Promise = require('bluebird');
    if (params.start == "") {
      params.start == CURDATE();
      //console.log(params.start);
    }
    else {
      params.start = params.start;
    }
    Lampo1.query("SELECT lampo,timestamp from lampo1 WHERE timestamp >= ? AND timestamp <= date_add( ( ? , INTERVAL 1 DAY)", [ params.start, params.start ])
    var dayQueryAsync = Promise.promisify(Lampo1.query);
    dayQueryAsync("SELECT MIN(lampo) AS lampo from lampo1 WHERE timestamp >= ? AND timestamp <= date_add( ? , INTERVAL 1 DAY)", [ params.start, params.start ])
    .then(function(lampo) {
      return res.json({
        lampo1: lampo});
    });
  },

  edit: function(req, res, next) {
    Lampo1.findOne(req.param('id'), function editLampo(err, lampo1) {
      if (err) return next(err);
      if (!lampo1) return next();

      res.view({
        lampo1: lampo1
        });
      });
  },

  update: function(req, res, next) {
    Lampo1.update(req.param('id'), req.params.all(), function lampoUpdated(err) {
      if (err) {
        return res.redirect('/lampo1/edit/' + req.param('id'));
      }

      res.redirect('/lampo1/show/' + req.param('id'));
    });
  },

  'all': function(req, res) {
    res.view();
  },
};

