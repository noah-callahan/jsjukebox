var x = document.getElementById("myAudio");
        var y = document.getElementById("myAlbum");

        var songs = [

                {
                stop: " "
                },

                {song1: "music/anewbeginning.mp3",
                img1: "images/beginnings.png"
                },

                {song2: "music/rumble.mp3",
                img2: "images/rocknroll.jpg"
                },

                {song3: "music/summer.mp3",
                img3: "images/summer.jpg"
                }
              ];

        var Jukebox = {


                playAudio: function() { 
                x.play(); 
                },

                pauseAudio: function() { 
                x.pause(); 
                },

                stopAudio: function() { 
                x.src = songs[0].stop; 
                },

                songOne: function() {
                x.src = songs[1].song1;
                y.src = songs[1].img1;
                },

                songTwo: function() {
                x.src = songs[2].song2;
                y.src = songs[2].img2;
                },

                songThree: function() {
                x.src = songs[3].song3;
                y.src = songs[3].img3;
                }
        }

//onclick = function(){myScript};
//this.x
