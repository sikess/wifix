$(document).ready(main);

var contador=1;

function main(){
	$('.div_boton_desplegable').click(function(){

		// $('nav').toggle();
		if(contador==1){
			$('nav').animate({
				top: '0'	
			});

			 $('.cont_menu_nav').animate({
				height:'220px'	
			});
		contador=0;
		} else{
			$('nav').animate({
				top: '-220px'
			});	
			$('.cont_menu_nav').animate({
				height:'0'
			});	
			contador=1;		
		}

	});
}