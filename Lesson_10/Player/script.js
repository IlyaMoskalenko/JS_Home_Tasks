var wrap = document.getElementById("wrap");
var video = document.querySelector("video");
var player = document.getElementById("player");

var playPause = document.getElementById("playPause");
var stop = document.getElementById("stop");
var loop = document.getElementById("loop");
var mute = document.getElementById("mute");
var fast = document.getElementById("fast");
var slow = document.getElementById("slow");
var progressBar = document.getElementById("progressBar");

var iPlayPause = document.getElementById("iPlayPause");
var iStop = document.getElementById("iStop");
var iLoop = document.getElementById("iLoop");
var iMute = document.getElementById("iMute");
var iFast = document.getElementById("iFast");
var iSlow = document.getElementById("iSlow");
	
	playPause.addEventListener("click",function(){
		if(!video.paused){
			video.pause();
			iPlayPause.innerText = "play_arrow";
		}
		else{
			video.play();
			iPlayPause.innerText = "pause";
		}
	});

	stop.addEventListener("click",function(){
			video.pause();
			iPlayPause.innerText = "play_arrow";
			video.currentTime = 0;
	});

	loop.addEventListener("click",function(){
		if(!video.loop){
			loop.classList.add("isLooped")
			video.loop = true;
		}
		else{
			video.loop = false;
			loop.classList.remove("isLooped")
		}
	});

	mute.addEventListener("click",function(){
		var currentVolume = video.volume;
		if(video.muted != true){
			video.muted = true;
			iMute.innerText = "volume_off";
			fader.value = 0;
		}
		else{
			video.muted = false;
			video.volume = currentVolume;
			iMute.innerText = "volume_up";
			fader.value = currentVolume*100;
		}
	});

	fader.addEventListener("input",function(){
		video.volume = fader.value/100;
	})

	progressBar.addEventListener("click",function(e){
		var rect = progressBar.getBoundingClientRect();
		var zero = rect.left; 
		var current = e.screenX;
		progressBar.value = Math.round((current - zero)/600*100);
		video.currentTime = video.duration/100*progressBar.value;
	})

	document.body.addEventListener("mousemove",function(e){
		if((e.target.nodeName == "PROGRESS")||(e.target.nodeName == "VIDEO")||(e.target.getAttribute("id")=="fader")||(e.target.getAttribute("id")=="time")||(e.target.getAttribute("id")=="player")||(e.target.nodeName=="BUTTON")||(e.target.nodeName=="I")){
			player.classList.add("showPlayer")
			player.classList.remove("hidePlayer")
		}
		else{
			player.classList.remove("showPlayer")
			player.classList.add("hidePlayer")
		}
	})

	fast.addEventListener("click",function(){
		video.playbackRate *= 2;
		// alert(video.playbackRate)
	})

	slow.addEventListener("click",function(){
		video.playbackRate *= 0.5;
		// alert(video.playbackRate)
	})

	setInterval(function(){
		progressBar.value = video.currentTime*100/video.duration;
	},10)

	var time = document.getElementById("time")
	audio.addEventListener("loadedmetadata",function(){
		setInterval(function(){
			var sec = video.duration;
			var current = video.currentTime;
			var currentSeconds = Math.round(current % 60);
			if( currentSeconds < 10 ){
				currentSeconds = '0' + currentSeconds;
			}
			if( sec % 60 < 10 ){
				time.innerText = Math.round(video.currentTime/60) + ":" + currentSeconds + "/" + Math.floor(sec/60) + ":" + '0' +Math.round(sec % 60)
			}
			else{
			time.innerText = Math.round(video.currentTime/60) + ":" + currentSeconds + "/" + Math.floor(sec/60) + ":" + Math.round(sec % 60)
			}
		},500)})