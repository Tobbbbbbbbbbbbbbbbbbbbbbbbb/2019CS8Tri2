$(".alert").click(
    function(){
        alert("hello");
    }
);
var randomNumber = "";
$(".oorange").click(
    function(){
        randomNumber = Math.floor((Math.random() * 20) + 11);
        $( "div.long" ).replaceWith( "<div class='long orange'>" + randomNumber + "</div>" );
    }
);
$(".blue").click(
    function(){
        $( "div.long" ).replaceWith( "<div class='long blue'>" + randomNumber + "</div>" );
    }
);