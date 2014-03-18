// JavaScript Document
/*CLASE PLAY (hijo)
====================================
*/
var presionarPlay = 
    { //Declaramos los atributos, para luego modificar por los metodos del propio objeto que se crea a partir de la clase
	  play: "",
	  //Aqui se entrega el valor recibido
	  getPlay: function()
	     { this.ponerPlay('miAudio', 'play');
		   return this.play;
		 },
	  //Aqui se puede cambiar el valor del atributo
	  setPlay: function(play)
	     { this.play = play; 
		 }, 
	  //Aqui creamos el metodo para reproducir el audio y a la vez para poner en pausa
	  ponerPlay: function(recibeAudio, boton) 
	     { var oAudio = document.getElementById(recibeAudio);
		   var btn = document.getElementById(boton);
		   if(oAudio.paused)
		     { oAudio.play();
			   btn.textContent = "Pausar";
			 }
			else{ oAudio.pause();
			      btn.textContent = "Reproducir";
				}
		  }
}; 