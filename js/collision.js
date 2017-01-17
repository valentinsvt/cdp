function booksHitCollisions() {
    var toDelete = -1;
    for(var i = 0; i < books.length ; i++ ){
        if(hitTestRectangle(player, books[i], world)){
            books[i].visible = false;
            stage.removeChild(books[i]);
            toDelete=i;
            xScale += 0.015;
            player.scale.set(xScale);
            player.inventory.push(books[i]);
        }
    }
    if(toDelete > -1)
        books.splice(toDelete,1);

}

function cloudsHitCollisions() {
    var toDelete = -1;
    for(var i = 0; i < clouds.length ; i++ ){
        if(hitTestRectangle(player, clouds[i], world)){
            $(".slider").hide();
            var sliderName = clouds[i].slider;
            clouds[i].visible = false;
            stage.removeChild(clouds[i]);
            toDelete=i;
            $("."+sliderName).show();
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

function futbolmatchSwordCollision() {
    if(sword.visible && hitTestRectangle(player, sword, world)){
        sword.visible = false;
        player.inventory.push(sword);
        player.attack += 10;
        player.attackingFrames = swordAttackingFrames;
        futbolMatchScroll.removeChild(sword);

    }
}

function futbolMatchZombieHitCollision() {
    if(hitTestRectangle(player, zombie, world)){
        if(zombie.lifePoints > 0 && player.state == "attacking"){
            zombie.lifePoints-=player.attack;
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
                    angular.visible = true;
                    ruby.visible = true;
                    agile.visible = true;
                },5000);
            }
        }
    }
}

function lootHitCollision(){
    var toDelete = -1;
    for(var i = 0; i < lootableAssets.length ; i++ ){
        if(lootableAssets[i].visible && hitTestRectangle(player, lootableAssets[i], world) && lootableAssets[i].vy==0){
            lootableAssets[i].visible = false;
            if(lootableAssets[i].action){
                lootableAssets[i].action();
            }
            world.removeChild(lootableAssets[i]);
            toDelete=i;
            player.inventory.push(lootableAssets[i]);
        }
    }
    if(toDelete > -1)
        lootableAssets.splice(toDelete,1);
}

function actionableAssetsHitCollision(){
    actionableAssets.map(function (asset) {
        if(asset.visible && !asset.active && player.state=="attacking" && hitTestRectangle(player, asset, world)){
            asset.action();
        }
    });

}


function chestsCollision() {
    var toDelete = -1;
    for(var i = 0; i < chests.length ; i++ ){
        if(hitTestRectangle(player, chests[i], world)){
            if(player.state == "attacking"){
                toDelete=i;
                chests[i].visible = false;
                chests[i].loot.map(function (lootItem) {
                    lootItem.visible = true;
                    lootItem.vy = -11;
                    lootItem.vx = lootItem.direction;
                });

            }
        }
    }
    if(toDelete > -1) {
        world.removeChild(chests[toDelete]);
        chests.splice(toDelete, 1);
    }
}

function bulletsHitCollision() {
    bullets.map(function (bullet) {
        if(bullet.visible){
            if(bullet.source == "dragon" && hitTestRectangle(player, bullet, world)){
                if(!bubble.visible){
                    setTimeout(function () {
                        bullet.visible = false;
                        player.vx = -10;
                    },150);
                }else{
                    bullet.visible = false;
                }
            }else{
                if(bullet.source != "dragon" && hitTestRectangle(bullet, death, world)){
                    death.lifePoints -= 20;
                    bullet.visible = false;
                    if(death.lifePoints < 0){
                        death.vy = -5;
                    }
                }
            }
        }
    });
}