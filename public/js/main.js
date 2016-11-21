console.log('JS loaded!');

//var i = 0;
function renderResults(result) {
    $("#main-div").append(`
		<div class="results">
			<div id="answers"><img src="${result.data[0].images.original.url}"></div>
		</div>`)
    console.log(result);
//    i++;
}

$('#submit').click(function () {
	var submission = [
        $('#answer01').val(),
        $('#answer02').val(),
        $('#answer03').val(),
        $('#answer04').val(),
        $('#answer05').val(),
        $('#answer06').val(),
        $('#answer07').val(),
        $('#answer08').val(),
        $('#answer09').val(),
        $('#answer10').val()
	];

    submission.forEach(function(answer) {
        console.log(answer);
        $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${answer}&api_key=dc6zaTOxFJmzC`,
        dataType: 'json',
        success: function(result){
            renderResults(result);
            }
        });
    })
});

//Add Dropdown functionality to the survey page
//this does not work yet
$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
);
