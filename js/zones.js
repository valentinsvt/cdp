function testFutbolmatchZone(){
    if(world.x < -3500 + player.x && world.x > -7000 + player.x) {
        if(!backgroundDiv.hasClass("futbolmatch")){
            backgroundDiv.addClass("futbolmatch").addClass("fadeIn").removeClass("fadeOut");
        }
    }else {
        if(backgroundDiv.hasClass("futbolmatch")) {
            backgroundDiv.addClass("fadeOut").removeClass("fadeIn");
            setTimeout(function () {
                backgroundDiv.removeClass("futbolmatch")
            },1990)
        }
    }
}

function testDjangoZone(){
    if(world.x < -8000 + player.x && world.x > -10000 + player.x) {
        if(!backgroundDiv.hasClass("django")){
            backgroundDiv.addClass("django").addClass("fadeIn").removeClass("fadeOut");
        }
    }else {
        if(backgroundDiv.hasClass("django")) {
            backgroundDiv.addClass("fadeOut").removeClass("fadeIn");
            setTimeout(function () {
                backgroundDiv.removeClass("django")
            },1990)
        }
    }
}

function testSeleneZone(){
    if(world.x < -11000 + player.x && world.x > -13000 + player.x) {
        if(!backgroundDiv.hasClass("selene")){
            backgroundDiv.addClass("selene").addClass("fadeIn").removeClass("fadeOut");
        }
    }else {
        if(backgroundDiv.hasClass("selene")) {
            backgroundDiv.addClass("fadeOut").removeClass("fadeIn");
            setTimeout(function () {
                backgroundDiv.removeClass("selene")
            },1990)
        }
    }
}