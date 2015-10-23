// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(model, collection, options){
      if (collection.length === 1) {
        this.playFirst();
      }
      this.updateLocalStorage(true);
    });

    this.on('delete', function(model, collection, options){
      this.remove(model);
      if (this.at(0)) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(model, collection, options){
      this.remove(model);
      this.updateLocalStorage(false);
    })
  },

  playFirst: function() {
    if (this.at(0)) {
      this.at(0).play();
    }
  },

  updateLocalStorage: function(add) {
    var currentQueue = JSON.parse(localStorage.getItem('songQueue'));

    if (add) {
      currentQueue.push(this);

    } else {
      currentQueue.shift(0);
    }

    localStorage.setItem('songQueue', JSON.stringify(currentQueue));
  }

});