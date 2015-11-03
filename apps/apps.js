$(function(){
	/*$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
		console.log(data);
	});*/

	function showResults(movies) {
		var html = "";
		$.each(movies, function(index, value) {
			//console.log(movies[index].Title);
			html += '<p>' + value.Title + '</p>';
			console.log(value.Title);
		});
		$('#search-results').html(html);
	};

	function getRequest(searchTerm) {
		var params = {
			s: searchTerm,
			r: 'json'
		};
		url = 'http://www.omdbapi.com';

		$.getJSON(url, params, function(data){
			movies = data.Search;
			showResults(movies);
		});
	};	

	$('#search-term').submit(function(e){
		e.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});