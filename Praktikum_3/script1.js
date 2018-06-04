Vue.component("track-item",{
	template: `<div id="track" data-id="{{id}}">
					<button title="play" id="t-play" class="bl ctrl-button"><i id="iPlay" class="material-icons">{{action}}</i></button>
					<p id="p-title">{{Artist}} - {{Title}}</p>
				</div>`
		,props: ['Artist', 'Title', 'id']
		,data(){
			return {
				action: "play_arrow"
			}
		},
		methods: {

		}
});

Vue.component("player-item",{
	template: `<div id="info">
					<div id="trackName">{{Artist}} - {{Title}}</div>
					<div id="time"></div>
				</div>`
		,props: ['Artist', 'Title']
		,data(){

		},
		methods: {
			
		}
});


const vm = new Vue({
	el: "#app"
	,data: {
		tracks: []
	}
	,methods: {
		
	}	
	,created(){
		const vm = this;
		const xhr = new XMLHttpRequest;
			  xhr.open("GET","filesData.json",true)
			  xhr.onload = function(){
				  var tracks = JSON.parse(this.responseText);
			      vm.tracks = tracks["filesData"];
			      $("#wrap").removeClass('invisible');
				  $("#preloader").remove();
				  
			      console.log(vm.tracks)
			  }
			  xhr.send(null)
	}
});

var App = {
	Init: async function(){
		firebase.auth().currentUser ? null : firebase.auth().signInWithEmailAndPassword('qwerty@gasdg.com','123456');
		App.Consts.Tracklist = await App.getTracks()
		App.addEventListeners();
	}
	,Consts: {
		db: firebase.database()
		,ref: firebase.database().ref("/filesData/")
		,Tracklist: []
	}
	,getTracks: function(){
		var promise = new Promise(function(resolve,reject){
			var array = []
			const ref = App.Consts.db.ref("/filesData");
			ref.on("value",function(v){
				console.log(0)
				var value = v.val()
				for(var n in value){
					array.push(value[n]);
				}
				resolve(array)
			})
		})	
		return promise;
	}
	,playPause(){
		var iPlay = document.getElementById('iPlay')
		if(!audio.paused){
			audio.pause();
			iPlay.innerText = "play_arrow";
		}
		else{
			audio.play();
			iPlay.innerText = "pause";
		}
	}
	,stop(){
		audio.pause();
		iPlay.innerText = "play_arrow";
		audio.currentTime = 0;
	}
	,loop(){
		if(!audio.loop){
			loop.classList.add("isLooped")
			audio.loop = true;
		}
		else{
			audio.loop = false;
			loop.classList.remove("isLooped")
		}
	}
	,mute(){
		var currentVolume = audio.volume;
		if( !audio.muted ){
			audio.muted = true;
			iMute.innerText = "volume_off";
			fader.value = 0;
		} else {
			audio.muted = false;
			audio.volume = currentVolume;
			iMute.innerText = "volume_up";
			fader.value = currentVolume*100;
		}
	}
	,fader(){
		audio.volume = fader.value/100;
	}
	,progress(e){
		var rect = progressBar.getBoundingClientRect();
		var zero = rect.left; 
		var current = e.screenX;
		progressBar.value = Math.round((current - zero)/500*100);
		audio.currentTime = audio.duration/100*progressBar.value;
	}
	,playNext(){}
	,playPrev(){}
	,timer(){
		setInterval(function(){
			progressBar.value = audio.currentTime*100/audio.duration;
			
		},10)

		setInterval(function(){
			var sec = audio.duration;
			var current = audio.currentTime;
			var currentSeconds = Math.floor(current % 60);
			if( currentSeconds < 10 ){
				currentSeconds = '0' + currentSeconds;
			}
			if( sec % 60 < 10 ){
				time.innerText = Math.floor(audio.currentTime/60) + ":" + currentSeconds + "/" + Math.floor(sec/60) + ":" + '0' + Math.round(sec % 60)
			}
			else{
				time.innerText = Math.floor(audio.currentTime/60) + ":" + currentSeconds + "/" + Math.floor(sec/60) + ":" + Math.round(sec % 60)
			}
		},100)
	}
	,casePressed(e){
		if ( e.target.nodeName == "BUTTON" ){
			App.playTrack(e.target.parentNode)
		} else if( e.target.parentNode.nodeName == "BUTTON" ){
			App.playTrack(e.target.parentNode.parentNode)
		}
	}
	,playTrack(target){
		let targetID = target.getAttribute('data-id');
		console.log(targetID)
		audio.src = App.Consts.Tracklist[targetID-1].URL
		App.playPause();
	}
	,addEventListeners: function(){

		var audio = document.getElementById("audio");

		var play = document.getElementById('play')
		var iPlay = document.getElementById('iPlay')
		play.addEventListener('click',App.playPause);

		var stop = document.getElementById('stop')
		stop.addEventListener('click',App.stop);

		var loop = document.getElementById('loop')
		loop.addEventListener('click',App.loop);

		var mute = document.getElementById('mute')
		var iMute = document.getElementById('iMute')
		mute.addEventListener('click',App.mute);

		var fader = document.getElementById('fader')
		fader.addEventListener('change',App.fader)

		var progressBar = document.getElementById('progressBar')
		progressBar.addEventListener('click',App.progress)	

		var next = document.getElementById('next')
		next.addEventListener('click',function(){
			alert(123)
		})

		var prev = document.getElementById('prev')
		prev.addEventListener('click',function(){
			alert(321)
		})

		var time = document.getElementById('time')
		audio.addEventListener("loadedmetadata",App.timer)
		
		var container = document.getElementById('container');
		container.addEventListener('click',App.casePressed)
	}
}
App.Init();