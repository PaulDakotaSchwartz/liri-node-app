
require('dotenv').config();

var keys = require("./keys.js");
var request = require("request");
// console.log(keys.spotify);

var spotify = keys.spotify;
var client = keys.twitter;

// console.log(spotify.id);

var nodeArgument = process.argv;
// console.log('nodeArgument', nodeArgument);

var commandPrompt = process.argv[2];
// console.log(commandPrompt);

if (commandPrompt === 'my-tweets') {
	//Need to use client variable created above to pull in twitter keys to utilize their API for my last 20 tweets and time and date
	console.log('success');
}

else if (commandPrompt === 'spotify-this-song') {
	//Need to use spotify variable created above to pull in spotify keys to utilize their API to return data for a song entered by the user, if no input default to "The Sign".
}

else if (commandPrompt === 'movie-this') {

	if (process.argv[3]){
		if (process.argv[4]) {
		var movieName = process.argv[3] + " " + process.argv[4];
		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
			request(queryUrl, function(error, response, body){
 				if (!error && response.statusCode === 200) {
				//Need to add functionality for Rotten Tomatoes Rating, Production Country, Movie Language, Plot, and Actors
				var movieTitle = JSON.parse(body).Title;
				var releaseYear = JSON.parse(body).Year;
				var imdbRating = JSON.parse(body).imdbRating;
				// console.log(body);
				console.log("Movie Title: " + movieTitle);
    			console.log("Release Year: " + releaseYear);
    			console.log("IMDB Rating: " + imdbRating);
  				}
			});
		}
		else {
		var movieName = process.argv[3];
		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
			request(queryUrl, function(error, response, body){
 				if (!error && response.statusCode === 200) {
				var movieTitle = JSON.parse(body).Title;
				var releaseYear = JSON.parse(body).Year;
				var imdbRating = JSON.parse(body).imdbRating;
				// console.log(body);
				console.log("Movie Title: " + movieTitle);
    			console.log("Release Year: " + releaseYear);
    			console.log("IMDB Rating: " + imdbRating);
  				}
			});
		}
	}
	else {
		var movieName = 'Mr. Nobody';
		var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
		request(queryUrl, function(error, response, body){
 			if (!error && response.statusCode === 200) {
			var movieTitle = JSON.parse(body).Title;
			var releaseYear = JSON.parse(body).Year;
			var imdbRating = JSON.parse(body).imdbRating;
			// console.log(body);
			console.log("Movie Title: " + movieTitle);
    		console.log("Release Year: " + releaseYear);
    		console.log("IMDB Rating: " + imdbRating);
  			}
		});
	}

	// console.log('success');
}

else if (commandPrompt === 'do-what-it-says') {
	//using the fs Node package and the text inside the random.txt file and use it to call one of Liri's commands.
	console.log('success');
}

else {
	console.log('failure')
}