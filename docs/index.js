$(document).ready(function() {
   
   // Clicking the buttons play the sounds
   let audioId = "",
       audio = "",
       description = "";

   $(".drum-pad").click(function() {
     audioId = $(this).children("audio").attr("id");
     audio = document.getElementById(audioId);
     audio.play();
     description = $(this).attr("id");
     $("#display").html("<h2>" + description + "</h2>");   
   });
   
   // Pressing the keys play the sounds
   let keyPressed = "",
       keyId = "",
       regex = /Q|W|E|A|S|D|Z|X|C/;
   
   $(document).keypress(function(event) {
     // Store which key has been pressed
     keyPressed = event.key.toUpperCase();
     if (regex.test(keyPressed) === true) {
       keyId = $("#" + keyPressed).parent("button").attr("id");
     // Add/remove css class to create on click effect
     $("#" + keyId).addClass("drum-pad-key-press");
     setTimeout(function(){
       $("button").removeClass("drum-pad-key-press")
     }, 20);
     // Set and play audio associated with id
     audio = document.getElementById(keyPressed);
     audio.play();
     // Display id
     $("#display").html("<h2>" + keyId + "</h2>");
     }
   });
 });
