console.log('timeline.js loaded');

j=0;
function renderTimelineGifs(result) {
  $(".timeline-gif")[j].src = result.data[0].images.original.url;
//  console.log(result.data[0].slug);
	j++;
}

var surveySearchValuesTimeline = [];
var apiResults = [];

$.each($('.surveySearchValues'), function( index, value ) {
  surveySearchValuesTimeline.push(value.innerHTML);
});

Promise.all(surveySearchValuesTimeline.map(function(queryString, index) {
	var x = new Promise(function(res, rej) {
		 $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=dc6zaTOxFJmzC`,
        dataType: 'json',
			  error: function(err) {
					console.log(err);
					rej();
				},
        success: function(result){
						apiResults.push({
								index: index,
								result: result
						})
						res();
            }
        })
	})
	return x;
})).then(function() {
				apiResults.sort(function(a, b) {
					if (a.index > b.index) { return 1 }
					else if (b.index > a.index) { return -1 }
					else { return 0 }
				}).forEach(function(data) {
					renderTimelineGifs(data.result);
				})
		});

$('#share-results').click(function() {
	$.get({
		url: "/getMyId", //+this.database,
		dataType: 'json',
		success: function(data) {
			$('.results-main').append(`
				<div id='share-link' class="row center-align">
        <div class="col s12">
          Share with friends AND family!:
          <div class="input-field inline">
            <input type="text">
            <label for="email" data-error="wrong" data-success="right"></label>
          </div>
        </div>
      	</div>
			`);
			$('input').val(`http://thawing-temple-44187.herokuapp.com//shareMyResults/${data.user._id}`);
		}
	})
})
