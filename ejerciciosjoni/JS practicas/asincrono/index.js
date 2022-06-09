const rp = require('request-promise');

rp('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=Cerati&api_key=7908a32683060cfeac4a9954cfe4b7b9&format=json').then(function(data){
	 var content = JSON.parse(data);
	 for(i=0; i<content.similarartists.artist.length;i++){
	 	console.log(content.similarartists.artist[i].image[2].#text)
	 }
}).catch((err)=>{
	console.log('todo mal')
})