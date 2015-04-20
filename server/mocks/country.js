module.exports = function(app) {
  var express = require('express');
  var countryRouter = express.Router();

  countryRouter.get('/', function(req, res) {
    res.send({
      'country': [
        {id: 1, name: 'Costa Rica'},
        {id: 2, name: 'United States'},
        {id: 3, name: 'England'}
      ]
    });
  });

  countryRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  countryRouter.get('/:id', function(req, res) {
    res.send({
      'country': {
        id: req.params.id
      }
    });
  });

  countryRouter.put('/:id', function(req, res) {
    res.send({
      'country': {
        id: req.params.id
      }
    });
  });

  countryRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/country', countryRouter);
};
