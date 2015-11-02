var assert = require('assert');

var songs = [
	{artist: 'Katy Perry', title: 'Roar', playback: '04:30'}   //270
	,{artist: 'Eminem', title: '8 mile', playback: '05:20'}   //320
	,{artist: 'Kelly Clarkson', title: 'Walk away', playback: '03:00'}  //180
			];

var m2s = function(min){
	return Number(min.split(':')[0]) * 60 + Number(min.split(':')[1]);
};

function longestPossible(playback) {
  // Your Code
  var list = [];
  for (var i = 0; i < songs.length; i++) {
  	if(m2s(songs[i].playback) < playback) list.push(songs[i]);
  };
  list.sort((a,b) => a.playback < b.playback ? -1 : a.playback > b.playback ? 1 : 0);
  return list.length > 0 ? list.pop().title : false;
}

// songs.map(v => {v.secs = v.playback.split(':').map(Number).reduce((p, c) => p * 60 + c); return v;});
// function longestPossible(playback) {
//   try {
//     return songs.filter(v => v.secs < playback).reduce((p, c) => p.secs > c.secs ? p : c).title;
//   } catch(e) {return false;}
// }

assert.equal(longestPossible(300), "Roar");
assert.equal(longestPossible(500), "8 mile");
assert.equal(longestPossible(180), false);
assert.equal(longestPossible(200), "Walk away");