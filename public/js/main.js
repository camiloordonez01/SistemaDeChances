$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		if (contador==1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		}else{
			contador = 1;
			if (contador==1) {
				$('nav').animate({
					left: '-100%'
				});
			}
		}
	});
};

function punteroVisible(icono){
	if (icono == 1) {
		$("#puntero1").show();
	}else if (icono == 2) {
		$("#puntero2").show();
	}else if (icono == 3) {
		$("#puntero3").show();
	}else if (icono == 4) {
		$("#puntero4").show();
	}else if (icono == 5) {
		$("#puntero5").show();
	}
}
function punteroNovisible(icono){
	if (icono == 1) {
		$("#puntero1").hide();
	}else if (icono == 2) {
		$("#puntero2").hide();
	}else if (icono == 3) {
		$("#puntero3").hide();
	}else if (icono == 4) {
		$("#puntero4").hide();
	}else if (icono == 5) {
		$("#puntero5").hide();
	}
}

