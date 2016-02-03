var data = [
	[ "img/1.jpg", "City by the Sea" ],
	[ "img/2.jpg", "Magical Sunset"],
	[ "img/3.jpg", "Rain Forest" ],
	[ "img/4.jpg", "Aurora Borealis or northern lights"],
	[ "img/5.jpg", "Working in the studio"]
];

var list = $('#list');

for(var i = 0; i < data.length; i++) {
	var item = '<div class="item"><img src="' + data[i][0] + '"><p>'+ data[i][1] +'</p></div>';
	list.append(item);
}
