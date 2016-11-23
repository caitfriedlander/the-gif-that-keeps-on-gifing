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


// FB.ui(
// {
//    method: 'share',
//    href: 'https://developers.facebook.com/docs/',
//  },
//  // callback
//  function (response) {
//    if (response && !response.error_message) {
//      alert('Posting completed.');
//    } else {
//      alert('Error while posting.');
//    }
//  }
// );

// $('#shareBtn').click(function() {
//  console.log('fb link')
//  FB.ui();
// });
