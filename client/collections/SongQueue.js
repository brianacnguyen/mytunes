// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(model, collection, options){
      if (collection.length === 1) {
        this.playFirst(collection.at(0));
      }
    });

  },

  playFirst: function(song) {
    song.trigger('play');
  }


});