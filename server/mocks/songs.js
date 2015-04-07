module.exports = function(app) {
  var express = require('express');
  var songsRouter = express.Router();

  songsRouter.get('/', function(req, res) {
    res.send({
      'songs': [
        {id:1, name: 'Song 1', duration: 30, lyrics: 'la la la la la'},
        {id:2, name: 'Song 2', duration: 35, lyrics: 'ra ra ra ra ra ra'},
        {id:3, name: 'Song 3', duration: 5, lyrics: 'ta ta ta ta-ta-ta ta ta'},
        {id:4, name: 'Using mocks la la la', duration: 60, lyrics: 'ta ta ta ta-ta-ta ta ta'},
      ]
    });
  });

  songsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  songsRouter.get('/:id', function(req, res) {
    res.send({
      'songs': {
        id: req.params.id
      }
    });
  });

  songsRouter.put('/:id', function(req, res) {
    res.send({
      'songs': {
        id: req.params.id
      }
    });
  });

  songsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/songs', songsRouter);
};
