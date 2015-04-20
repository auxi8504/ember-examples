module.exports = function(app) {
  var express = require('express');
  var productsRouter = express.Router();

  productsRouter.get('/', function(req, res) {
    res.send({
      'products': [
        {id: 1, name: 'Mac Computer', image: 'assets/images/computer.jpeg'},
        {id: 2, name: 'Mouse', image: 'assets/images/mouse.jpeg'},
        {id: 3, name: 'Monitor', image: 'assets/images/monitor.jpeg'}
      ]
    });
  });

  productsRouter.post('/', function(req, res) {
    res.send({
      'products': {
        id: 4
      }
    });
    //res.status(404).end();
  });

  productsRouter.get('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/products', productsRouter);
};
