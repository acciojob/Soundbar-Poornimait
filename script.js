//your JS code here. If required.
let audio=null;
function playSound(){
	stopSound();
	audio=new Audio();
	audio.play();
	
}
 function stopSound(){
	 if(audio!=null){
		 audio.pause();
	 }
		 
 }