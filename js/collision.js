function booksHitCollisions() {
    var toDelete = -1;
    for(var i = 0; i < books.length ; i++ ){
        if(hitTestRectangle(zombie, books[i], world)){
            books[i].visible = false;
            stage.removeChild(books[i]);
            toDelete=i;
            xScale += 0.015;
            zombie.scale.set(xScale);
        }
    }
    if(toDelete > -1)
        books.splice(toDelete,1);

}

function cloudsHitCollisions() {
    var toDelete = -1;
    for(var i = 0; i < clouds.length ; i++ ){
        if(hitTestRectangle(zombie, clouds[i], world)){
            var sliderName = clouds[i].slider;
            clouds[i].visible = false;
            stage.removeChild(clouds[i]);
            toDelete=i;
            $("."+sliderName).css({"visibility":"visible"});
            $(".photoContainer").show().addClass("growIn");
            setTimeout(function () {
                $("."+sliderName).slidesjs({
                    play: {
                        active: true,
                        auto: true,
                        interval: 4000,
                        swap: true,
                        pauseOnHover: true,
                        restartDelay: 2500
                    },
                    navigation: {
                        active: false
                    },
                    pagination: {
                        active: false
                    }
                });
            }, 2000)
        }
    }
    if(toDelete > -1)
        clouds.splice(toDelete,1);
}

function futbolMatchLeverHitCollision() {
    if(hitTestRectangle(zombie, lever, world)){
        if(!lever.active && zombie.state == "attacking"){
            lever.scale.x = lever.scale.x * -1;
            lever.x = lever.x + lever.width / 2;
            lever.active = true;
        }
    }
}