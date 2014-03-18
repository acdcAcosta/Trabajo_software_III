// JavaScript Document
/*CLASE REPRODUCTOR (padre)
====================================
*/
var reproductor = 
    { audio: "",
	  canvas: "",
	  getAudio: function()
	    { this.usarAudio("miAudio");
		  return this.audio;
		},	
	  setAudio: function(audio)
	    { this.accederAudio("");
		  this.audio = audio;
		},	
	  getCanvas: function()
	    { this.usarCanvas("canvas");
		  return this.canvas;
		},	
	  setCanvas: function(canvas)
	    { this.usarCanvas("");
		  this.canvas = canvas;
		},
      usarAudio: function(idAudio)
	    { document.getElementById(idAudio);
	    },
	  usarCanvas: function(idCanvas)
	    { document.getElementById(idCanvas);
		}
	};
