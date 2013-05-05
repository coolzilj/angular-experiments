'use strict';

angular.module('angularExperimentsApp')
  .factory('Note', ['$resource', function ($resource) {
    var Note = $resource('https://api.mongolab.com/api/1/databases' + '/angular-experiments/collections/notes/:id',
          {apiKey: 'iP5ei6VyG9HFvLDjKXvX1DMXBdwxtJcg'},
          {update: {method: 'PUT'}});

    Note.prototype.update = function(cb) {
      return Note.update({id: this._id.$oid},
          angular.extend({}, this, {_id:undefined}), cb);
    };

    Note.prototype.destroy = function(cb) {
      return Note.remove({id: this._id.$oid}, cb);
    };

    return Note;
  }]);
