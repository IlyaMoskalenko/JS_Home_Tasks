var App = {
	Init: function(){
		App.setMarkers(App.Consts.ArrayOfCoords);
		App.drawLines(App.Consts.ArrayOfCoords);
	}
	,Data: {
		map: null
	}
	,Consts: {
		ArrayOfCoords: [
				{coords: {lat: -60, lng: -70}, name: "name0", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 45, lng: -30}, name: "name1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: -60, lng: 10}, name: "name2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 0, lng: -100}, name: "name3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: 0, lng: 40}, name: "name4", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."},
				{coords: {lat: -60, lng: -70}, name: "name5", description: "Lorem ipsum dolor sit amet, consectetur adipisicing."}
				]
	}
	,setMarkers: function(array){
		var settings = {
			center: {lat: 0, lng: 0},
			zoom: 2,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map"), settings)
		App.Data.map = map;
		var markers = []
		for(var i in array){
			var marker = new google.maps.Marker({
				position: array[i].coords,
				map: map,
				title: array[i].name
			})
			markers.push(marker)
		}
		var div = document.getElementById("map")
		div.addEventListener("click", function(e){
			if(e.target.nodeName == "AREA"){
				var id = parseInt(e.target.getAttribute("title").replace(/\D+/g,""))
				var infowindow = new google.maps.InfoWindow({
					content: `Name: ` + array[id].name + `<br>` + `Coords: ` + `lat: ` + array[id].coords.lat + ` lng: ` + array[id].coords.lng + `<br>` + `Description: ` + array[id].description
				})
				infowindow.open(map,markers[id])
			}
		})

	}
	,drawLines: function(array){
		var linesCoords = []
		for(var c of array){
			linesCoords.push(c.coords)
		}
		var lines = new google.maps.Polyline({
			path: linesCoords,
	          strokeColor: '#FF0000',
	          strokeOpacity: 1.0,
	          strokeWeight: 2
		})
		lines.setMap(App.Data.map);
	}
}
App.Init();