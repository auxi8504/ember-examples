module.exports = function(app) {
  var express = require('express');
  var countriesRouter = express.Router();

  countriesRouter.get('/', function(req, res) {
    res.send({
      'countries': [
        {id: 1, name: 'Costa Rica', products: [1,2]},
        {id: 2, name: 'United States', products: []},
        {id: 3, name: 'England', products: []}
      ]
    });
  });

  countriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  countriesRouter.get('/:id', function(req, res) {
    res.send({
      'countries': {
        id: req.params.id
      }
    });
  });

  countriesRouter.put('/:id', function(req, res) {
    res.send({
      'countries': {
        id: req.params.id
      }
    });
  });

  countriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/countries', countriesRouter);
};
