// JavaScript Document
/*CLASE REPRODUCIR DE LA LISTA DE CANCIONES 
====================================
*/ 
var reproducirListadoCancion = 
    { listado: "",
	  getListado: function()
	    { this.cargarListaActual("selectTrack","path","rutaCancion");
	    },
      setListado: function(listado)
	    { this.cambiarTrack(listado,"path","rutaCancion");
	    },
	  cambiarTrack: function(track, path, source)
	    { var cancionSeleccionada = track.getAttribute(path);
		  alert(cancionSeleccionada);
		  viejo_audio = document.getElementById("reproductor");
		  
          audio_padre = viejo_audio.parentNode;//Seleccionamos el elemento padre, en este caso el elemento reproductor.
          audio_padre.removeChild(viejo_audio);
		  
		  nuevo_audio = document.createElement("audio");
          nuevo_audio.setAttribute("id","reproductor");
		  nuevo_audio.setAttribute("autoplay", "autoplay");
		  
		  idSource = document.getElementById(source);
		  idSource.setAttribute("src", cancionSeleccionada);
		  nuevo_audio.appendChild(idSource);
          audio_padre.appendChild(nuevo_audio);
		},	
		
	  cargarListaActual: function(track, path, source)
	    { var seCancion = document.getElementById(track);//Recogemos la lista canciones con el id de select options
		  
		  var cancion = seCancion.options[3].getAttribute(path);//Recogemos la cancion actual
		  idSource = document.getElementById(source);//Recogemos el fuente de canción 
		  idSource.setAttribute("src",cancion);//Cargamos la cancion seleccionada
		}
    };