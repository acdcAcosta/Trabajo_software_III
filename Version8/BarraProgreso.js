// JavaScript Document
/*CLASE BARRA DE PROGRESO
====================================
*/
var barraProgreso = 
    { barra: "",
	  getBarra: function()
	    { this.hacerBarra('miAudio', 'canvas');
		  this.deslizarBarra('miAudio','canvas');
		  return this.barra;
		},
	  setBarra: function(barra)
	    { this.barra = barra;
		},
	  hacerBarra: function(recibeAudio, idCanvas)
	    { //
		  var oAudio = document.getElementById(recibeAudio);
		  //Aqui acudimos a canvas
		  var canvas = document.getElementById(idCanvas);
			
	      //Creamos una funcion para dibujar la barra de progreso
		  function dibujarBarraProgreso()
			  { // hacemos el redondeo del valor de siguimiento de produccion de un audio(hasta llegar al tamaño total de audio)
				var siguimientoProduccion = Math.round(oAudio.currentTime);
				if(canvas.getContext)
				  { //
				    var ctx = canvas.getContext("2d");
			        //Borramos el area de la barra y hacemos que sea totalmente transparente
					ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
					ctx.fillStyle = "rgb(255,1,1)";
					//Aqui controlamos el avance horizontal del barra de progreso.
					var fWidth = (siguimientoProduccion / oAudio.duration) * (canvas.clientWidth);
					
					if (fWidth > 0) 
					  { //Aqui dibujamos el barra de progeso con cambio de tamaño horizontal; pero el tamaño vertical es constante
					    var cts = ctx.fillRect(0, 0, fWidth, canvas.clientHeight);   
					  }
				  }       
		       }
			//Aqui mostramos la barra de progreso llamando a la funcion dibujarBarra, en otras palabras actualizamos la barra de progreso
			     oAudio.addEventListener("timeupdate", dibujarBarraProgreso, true);
		       },
		  
       //Creamos un metodo para avanzar o retroceder cancion en reproduccion
	deslizarBarra: function(recibeAudio, idCanvas)
	    { var oAudio = document.getElementById(recibeAudio);
		  
		  //Aqui acudimos a canvas
		  var canvas = document.getElementById(idCanvas);
		  canvas.addEventListener("click",function(e)
			  { if(!e)
				  { //Obtiene el último evento de si no es determinado
					e = window.event;
				  }
				try { oAudio.currentTime = oAudio.duration * (e.offsetX / canvas.clientWidth);  				
				    }
				catch (err)
				      { //Fállele silenciosamente excepto la función en consola de herramientas del desarrollador F12
						if (window.console && console.error("Error:" + err));
					  }
			    },true);
		},
	 ponerBarraEnCero: function(miAudio)
	    { try{ var oAudio = document.getElementById(miAudio);
               oAudio.currentTime = 0;
             }
          catch(e){ if (window.console && console.error("Error:" + e));
                  }
	    },
	contarDesplazamiento: function()
	   { var oAudio = document.getElementById('miAudio');
	     var contar = oAudio.duration;
	   }
	   
    };