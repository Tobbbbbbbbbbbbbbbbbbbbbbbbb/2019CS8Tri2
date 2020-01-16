for (var i = 0; i < 500; i++)
{
    var x = Math.floor((Math.random() * 1300) + 1);
    var y = Math.floor((Math.random() * 500) + 1);
    var h = Math.floor((Math.random() * 20) + 1);
    var o = 1 - (y/500);
    $("body").prepend("<div class='star' style='left:" + x + "px; top:" + y + "px; height:" + h + "px; width:" + h + "px; opacity:" + o + ";'></div>");
}

TweenMax.to("#shootingStar",5,{x:1300, y:200, delay:2, repeat:-1});

