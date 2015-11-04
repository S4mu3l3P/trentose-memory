/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){
var dati='<ul class="cards">';
     var data = generateData(10);
     var rdy = 0;
     var num=1; 
     data=shuffle(data); //mescolo i numeri
      
     for(i=0;i<10;i++){
       dati= dati+'<li id='+'"'+data[i]+'"'+'class="done">'+'<h3>'+data[i]+'</h3>'+'</li>';
     }
      
     dati= dati+'</ul>';
     $(".container").append(dati); //Popolo la pagina
    
  $(".opt-start").click(function() {    
     $(".cards li").removeClass("done");
     $(".cards li").addClass("hidden");
     rdy=1;
  });
    
  
  $(".cards li").click(function() {
    if(rdy==1){
        if($(this).attr('id')==num){
            $(this).removeClass("hidden");
            $(this).addClass("done");
            num=num+1;
         }
        else
        {
            alert("You have lost")
            rdy=0;
        }
    }
  });
    
  
});







