// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(model, collection, options){
      if (collection.length === 1) {
        this.playFirst();
      }
    });

    this.on('delete', function(model, collection, options){
      this.remove(model);
    });

    this.on('ended', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove();
    })
  },

  playFirst: function() {
    this.at(0).play();
  },

});