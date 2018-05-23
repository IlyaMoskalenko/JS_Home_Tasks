const coords = {lat: 10, lng: 14}
const settings = {
	center: {lat: 0, lng: 0},
	zoom: 2,
	mapTypeId: google.maps.MapTypeId.ROADMAP
}
var div = document.getElementById("map")
var map = new google.maps.Map(div, settings)

const array = [{coords: {lat: 0, lng: -60}, name: "name0", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 97, lng: 124}, name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 56, lng: 12}, name: "name2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 51, lng: 78}, name: "name3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 120, lng: 85}, name: "name4", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 40, lng: 110}, name: "name5", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 73, lng: 56}, name: "name6", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 20, lng: 90}, name: "name7", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 19, lng: 19}, name: "name8", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."}];
var markers = []
for(var i in array){
	var marker = new google.maps.Marker({
		position: array[i].coords,
		map: map,
		title: array[i].name
	})
	markers.push(marker)
}

div.addEventListener("click", function(e){
	if(e.target.nodeName == "AREA"){
		var id = parseInt(e.target.getAttribute("title").replace(/\D+/g,""))
		var infowindow = new google.maps.InfoWindow({
			content: `Name: ` + array[id].name + `<br>` + `Coords: ` + `lat: ` + array[id].coords.lat + ` lng: ` + array[id].coords.lng + `<br>` + `Description: ` + array[id].description
		})
		infowindow.open(map,markers[id])
	}
})