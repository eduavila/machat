/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Menu Swipe 

// Habilita o menu lateral abrir com evento swipe
$(document).on("pagecreate",MenuSwipe("#page1"));
$(document).on("pagecreate","[data-role='page']",MenuSwipe("[data-role='page']"));



/*Menu Swipe */

/*
function MenuSwipe(){
   $(document).on("swipeleft swiperight", function(e){
       // if checa se o panel nao esta aberto.
       
       if($(".ui-page-active").jqmData("panel")!=="open"){
           if(e.type==="swipeleft"){
            $("#menu-right").panel("open");
             
           }else if(e.type==="swiperight"){
               // abrindo menu esquerdo.   
                $("#menu-left").panel("open");
               
           }
       }
   });

  */

   

$("#list li a").click(function(){
    
});

$(document).on("pagebeforeshow",function(){
   
    
});
