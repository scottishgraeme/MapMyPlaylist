
function enterLocation(artist) { 
	$( "#locationentry" ).dialog( { 
		autoOpen: false, 
		title: "Enter Location for " + artist.name, 
		width: 350,
		height: 350, 
		modal: true 
	})
	.dialog("open");
	$('#locationbutton').click(function(){
		var location = $('#locationbox').val();
		getLocation(artist, location);
		$( "#locationentry").dialog("close");
	});
};

function getLocation(artist, location) {
	$.getJSON('/findlocation/' + location + '/', function(data) {
		var locJSON = data[0]
		console.log(artist, locJSON.name, locJSON.lat, locJSON.long);
		artist.origin = locJSON.name;
		artist.lat = locJSON.lat;
		artist.long = locJSON.long;
		setMarker(artist);
	});
};

$(function() {
    $("#locationbox").autocomplete( {
        source: "/suggestlocations/",
        minLength: 1,
    }).autocomplete("option", "appendTo", "#locationentry");
});