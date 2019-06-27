/*Se agrega el evento onclick para el boton de cerrar LightBox*/

    document.getElementById("btn-cerrar").addEventListener("click",function(){cierraLightBox(0);}, false);

	/******************************************************

	*	Funcion que muestra el lightBox y asigna la imagen

	******************************************************/

	function muestraLightBox(num){

		asignaImagen(num);

		document.querySelector("#imagen-info").style.display="block";

        disableScrolling();
	}

	/**********************************************************************************************************

	*	Funcion que asigna la imagen correspondiente a la etiqueta con id #imagen, segun la seccion presionada

	***********************************************************************************************************/

	function asignaImagen(num){

		document.querySelector("#imagen").src="assets/img/compromisos+/c"+num+".png";

	}

/*********************************************************
 *
 *  Funcion que cierra el lightbox y restablece la imagen
 *
 * ********************************************************/

function cierraLightBox(num){

    document.getElementById("imagen-info").style.display="none";
    enableScrolling();
    asignaImagen(num);
}
/*Deshabilita el scroll en el sitio*/
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

/*Habilita el scroll en el sitio*/
function enableScrolling(){
    window.onscroll=function(){};
}


