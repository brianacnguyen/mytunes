// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay onended=""/>',

  initialize: function() {

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    var audioPlayer = this.$el.attr('src', this.model ? this.model.get('url') : '');

    var self = this;

    audioPlayer.on('ended', function(e){
      self.model.ended();
    });

    return audioPlayer;
  }

});
