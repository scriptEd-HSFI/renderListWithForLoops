var data = [
	[ "img/1.jpg", "City by the Sea" ],
	[ "img/2.jpg", "Magical Sunset"],
	[ "img/3.jpg", "Rain Forest" ],
	[ "img/4.jpg", "Aurora Borealis or northern lights"],
	[ "img/5.jpg", "Working in the studio"]
];

var list = $('#list');

// Delete below this line and add your for loop
// This just needs a for loop!
var image = '<img src="'+ data[0][0] +'"/>'
var text = '<p>'+ data[0][1] +'<p/>'
list.append('<div class="post">' + image + text + '</div>');