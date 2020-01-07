for (var i = 0; i < 1000; i++)
{
    var x = Math.floor((Math.random() * 100) + 1);
    var y = Math.floor((Math.random() * 100) + 1);
    document.body.appendChild("<div class='star' style='left:x, up:y'></div>");
}
