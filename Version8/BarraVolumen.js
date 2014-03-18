// JavaScript Document
/*CLASE BARRA VOLUMEN 
====================================
*/
var barraVolumen = 
	{ volumen: "",
	  getVolumen: function()
		 { this.hacerBarraVolumen('miAudio','canvasVolumen');
		   this.deslizarBarraVolumen('miAudio','canvasVolumen');
		   return this.volumen;
		 },
	  setVolumen: function(volumen)
		 { this.volumen = volumen;
		 },
	  hacerBarraVolumen: function(recibeAudio, idCanvas)
		 { //Acudimos al identificador de audio
		   var oAudio = document.getElementById(recibeAudio);
		   //Acudimos al identificador de canvas 
		   var canvas = document.getElementById(idCanvas);
		   //Creamos una funcion para dibujar la barra de volumen, en este caso usando canvas
		   function dibujarBarraVolumen()
		     { //Verificamos si el navegador soporta canvas
			   if(canvas.getContext)
			     { var ctx = canvas.getContext("2d");
				   //Borramos el area de la barra y hacemos que sea totalmente transparente
				   ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
				   //Definimos el color de relleno
				   ctx.fillStyle = "rgb(255,45,25)";
				   
				   var fWidth = (oAudio.volume) * (canvas.clientWidth);
					if (fWidth > 0) 
					  { var cts = ctx.fillRect(0, 0, fWidth, canvas.clientHeight);  
					  }
				 }
			 }
		   oAudio.addEventListener("timeupdate", dibujarBarraVolumen, true);
		 },
	  deslizarBarraVolumen: function(recibeAudio, idCanvas)
		 { var oAudio = document.getElementById(recibeAudio);
		  
		  //Aqui acudimos a canvas
		  var canvas = document.getElementById(idCanvas);
		  canvas.addEventListener("click",function(e)
			  { if(!e)
				  { //Obtiene el último evento de si no es determinado
					e = window.event;
				  }
				try { var newVol = Math.round(e.offsetX / canvas.clientWidth * 100) / 100; 
				      oAudio.volume=newVol;
				    }
				catch (err)
				      { //Fállele silenciosamente excepto la función en consola de herramientas del desarrollador F12
						if (window.console && console.error("Error:" + err));
					  }
			    },true);
		 },
	  aumentarVolumen: function(miAudio)
	     { try{ var oAudio = document.getElementById(miAudio);
		        oAudio.volume += 0.1;
			  }
			catch(e){ //
			          if (window.console && console.error("Error:" + e));
				    }
		 },
	  bajarVolumen: function(miAudio)
	     { try{ var oAudio = document.getElementById(miAudio);
		        oAudio.volume -=0.1;
			  }
			catch(e){
				    }
		 }
	};
