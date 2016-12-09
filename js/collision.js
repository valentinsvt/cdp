function booksHitCollisions() {
    var toDelete = -1;
    for(var i = 0; i < books.length ; i++ ){
        if(hitTestRectangle(player, books[i], world)){
            books[i].visible = false;
            stage.removeChild(books[i]);
            toDelete=i;
            xScale += 0.015;
            player.scale.set(xScale);
        }
    }
    if(toDelete > -1)
        books.splice(toDelete,1);

}

function cloudsHitCollisions() {
    var toDelete = -1;
    for(var i = 0; i < clouds.length ; i++ ){
        if(hitTestRectangle(player, clouds[i], world)){
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
    if(hitTestRectangle(player, lever, world)){
        if(!lever.active && player.state == "attacking"){
            lever.scale.x = lever.scale.x * -1;
            lever.x = lever.x + lever.width / 2;
            lever.active = true;
        }
    }
}

function futbolMatchZombieHitCollision() {
    if(hitTestRectangle(player, zombie, world)){
        if(zombie.lifePoints > 0 && player.state == "attacking"){
                zombie.lifePoints-=1;
        }else{
            if(zombie.lifePoints == 0 && zombie.state != "dying"){
                zombie.position.set(zombie.x + 30, calculateFloorYPosition(zombie) - zombie.height +25);
                zombie.state = "dying";
                zombie.textures = zombieDeadFrames;
                zombie.animationSpeed = 0.1;
                zombie.gotoAndPlay(0);
                zombie.loop = false;
                setTimeout(function () {
                    zombie.visible = false;
                },5000);
            }
        }
    }
}