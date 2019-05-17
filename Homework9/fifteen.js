/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background 
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        if (i < divs.length - 1) {
            div.className = "puzzlepiece";
            div.style.backgroundImage = 'url("background.jpg")';
        } else {
            div.className = "blank";
        }
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }      
         
};

$(document).ready(function() { 
    $(".puzzlepiece").each(function() {
        $(this).hover(function() { 
            var bx = $(".blank").position().left;
            var by = $(".blank").position().top;
            var x = $(this).position().left;                
            var y = $(this).position().top;
            if ((x === bx - 100 && y === by) || (x === bx + 100 && y === by)
                    || (x === bx && y === by - 100) || (x === bx && y === by + 100)) {
                $(this).addClass("movablepiece");
            } else if ($(this).hasClass("movablepiece")) {
                $(this).removeClass("movablepiece");
            }  
        });   
        $(this).click(function() {
            var bx = $(".blank").position().left;
            var by = $(".blank").position().top;
            var x = $(this).position().left;                
            var y = $(this).position().top;
            if ($(this).hasClass("movablepiece")) {
                $(this).css({'left': bx + 'px', 'top': by + 'px', 'background-position': -bx + 'px ' + (-by) + 'px'});
                $(".blank").css({'left': x + 'px', 'top': y + 'px', 'background-position': -x + 'px ' + (-y) + 'px'}); 
            }            
        });
    });
});

function shuffle() {
    var random = Math.floor(Math.random() * 100); 
    alert(random);
    var i = 0;
    $(".puzzlepiece").each(function() {
        var bx = $(".blank").position().left;
        var by = $(".blank").position().top;
        var x = $(this).position().left;                
        var y = $(this).position().top;
        $(this).css({'left': bx + 'px', 'top': by + 'px', 'background-position': -bx + 'px ' + (-by) + 'px'});
        $(".blank").css({'left': x + 'px', 'top': y + 'px', 'background-position': -x + 'px ' + (-y) + 'px'});           
        i++;
        if (i >= random)
            return false;
    });
}


