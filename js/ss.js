$(document).ready(function() {  

    



    $(".btn_cerrar").hide();
    //Put in the DIV id you want to display
    launchWindow('#dialog1');
    
    //if close button is clicked
    $('.window .close').click(function () {
        $('#mask').hide();
        $('.window').hide();
    });     
    
    //if mask is clicked
        
    

    $(window).resize(function () {
     
        var box = $('#boxes .window');
 
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
      
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#dialog1').css({'width':maskWidth,'height':maskHeight});       
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        box.css('top',  winH/2 - box.height()/2);
        box.css('left', winW/2 - box.width()/2);

     
    }); 
    
});

function launchWindow(id) {
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        //Set heigth and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //transition effect     
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.9);  
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2-45);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).css({'width':maskWidth,'height':maskHeight}); 


        $(id).fadeIn(1000); 
    

}

function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now/1000));
    },100); // the smaller this number, the more accurate the timer will be
}


timer(
    10000, // milliseconds
    function(timeleft) { // called every step to update the visible countdown
        document.getElementById('timer').innerHTML = "Publicidad: "+timeleft+"segs.";
    },
    function() { // what to do after
        document.getElementById('timer').innerHTML=" Cerrar"
        $('#cerrar').click(function () {
        // $(this).hide();
        $('#mask').hide();

        $('.window').hide();
    }); 
     $('.btn_cerrar').show();  
    }
);


function cargar_imagen_random(){

    bgImageTotal=2; // ... cantidad de imagenes a rotar

    randomNumber = Math.round(Math.random()*(bgImageTotal-1))+1;

    imgPath=('img/publi_modal/'+randomNumber+'.jpg'); // ...full path a las imagenes

    $('#publicidad_modal').css('background-image', ('url("'+imgPath+'")')); // ... Mi DIV
    // $('div#publicidad_modal').html("<img src='"+imgPath+"'>");

}
cargar_imagen_random();



