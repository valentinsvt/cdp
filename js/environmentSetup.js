function loadPlayerAssets(){
    var pad = "000";
    for(var i = 0; i < 12 ; i++){
        loader.add("./assets/png/character/Idle_"+(pad.substring(0, pad.length - i.toString().length) + i )+".png");
        if(i < 8){
            loader.add("./assets/png/character/Jump_00"+i+".png");
            loader.add("./assets/png/character/Throwing attack_00"+i+".png");
            loader.add("./assets/png/character/Attack_00"+i+".png");
            loader.add("./assets/png/character/Run_"+(pad.substring(0, pad.length - i.toString().length) + i )+".png");
        }
        if(i<4){
            loader.add("./assets/png/character/Shot_"+(pad.substring(0, pad.length - i.toString().length) + i )+".png");
        }
    }
}

function loadZombieAssets() {
    for(var i = 1; i <= 15 ; i++) {
        loader.add("./assets/png/zombie/Idle (" + i + ").png");
        if(i <= 12){
            loader.add("./assets/png/zombie/Dead (" + i + ").png");
        }
    }
}

function loadDeathAssets() {
    for(var i = 0; i < 15 ; i++) {
        loader.add("./assets/png/dragons/death/animation/idle/idle_"+ i +".png");
        if(i < 9){
            loader.add("./assets/png/dragons/death/animation/attack1/death-attack1_"+ i +".png");
        }
    }
}

function loadDisketteAssets() {
    for(var i = 0; i < 16 ; i++) {
        loader.add("./assets/png/dk/diskette_" + i + ".png");
        loader.add("./assets/png/dk_green/diskette_" + i + ".png");
    }
}
function loadPlaneAssets() {
    for(var i = 0; i < 19 ; i++) {
        loader.add("./assets/png/plane/plane_" + i + ".png");
    }
}

function loadAnimationFrames() {
    var pad = "000";
    for(var i = 0; i < 12 ; i++){
        idleFrames.push(PIXI.Texture.fromFrame("./assets/png/character/Idle_"+(pad.substring(0, pad.length - i.toString().length) + i )+".png"));
        if(i < 8){
            jumpFrames.push(PIXI.Texture.fromFrame("./assets/png/character/Jump_00"+i+".png"));
            attackingFrames.push(PIXI.Texture.fromFrame("./assets/png/character/Throwing attack_00"+i+".png"));
            swordAttackingFrames.push(PIXI.Texture.fromFrame("./assets/png/character/Attack_00"+i+".png"));
            walkingFrames.push(PIXI.Texture.fromFrame("./assets/png/character/Run_"+(pad.substring(0, pad.length - i.toString().length) + i )+".png"));
        }
        if(i<4){
            gunAttackingFrames.push(PIXI.Texture.fromFrame("./assets/png/character/Shot_00"+i+".png"));
        }
    }
}

function loadZombieAnimationFrames() {
    for(var i = 1; i <= 15 ; i++) {
        zombieIdleFrames.push(PIXI.Texture.fromFrame("./assets/png/zombie/Idle (" + i + ").png"));
        if (i <= 12) {
            zombieDeadFrames.push(PIXI.Texture.fromFrame("./assets/png/zombie/Dead (" + i + ").png"));
        }
    }
}

function loadDeathAnimationFrames() {
    for(var i = 0; i < 15 ; i++) {
        deathIdleFrames.push(PIXI.Texture.fromFrame("./assets/png/dragons/death/animation/idle/idle_"+ i +".png"));
        if (i < 9) {
            deathAttackFrames.push(PIXI.Texture.fromFrame("./assets/png/dragons/death/animation/attack1/death-attack1_"+ i +".png"));

        }
    }
}

function loadDisketteAnimationFrames (){
    for(var i = 0; i < 16 ; i++) {
        disketteFrames.push(PIXI.Texture.fromFrame("./assets/png/dk/diskette_" + i + ".png"));
        greenDisketteFrames.push(PIXI.Texture.fromFrame("./assets/png/dk_green/diskette_" + i + ".png"));
    }
}

function loadPlaneAnimationFrames (){
    for(var i = 0; i < 19 ; i++) {
        planeFrames.push(PIXI.Texture.fromFrame("./assets/png/plane/plane_" + i + ".png"));
    }
}

function addBuildings(){
    var building = new Sprite(resources["./assets/png/Object/building.png"].texture);
    building.scale.y = 1.75;
    building.scale.x = 1.75;
    building.y = screenHeight - pathTiles[0].height - building.height;
    building.x = 1550;
    world.addChild(building);
}

function addBooks() {
    var booksPositions = [2200 , 2400, 2600, 2800, 3000, 3200];
    var heightDiff = 0;
    for ( var i = 0; i < booksPositions.length ; i++) {
        var book = new Sprite(resources["./assets/png/books/book"+(i+1)+".png"].texture);
        book.scale.set(0.2);
        if(i % 2 ==0)
            heightDiff = 40;
        else
            heightDiff = 0;
        book.y = screenHeight - pathTiles[0].height  - book.height - 120 - heightDiff;
        book.x = booksPositions[i];
        books.push(book);
        world.addChild(book);
    }
}

function addPathTiles(){

    for (var i = 0; i <= 200; i++) {
        var pathTile = new Sprite(resources["./assets/png/path/2.png"].texture);
        pathTile.y = screenHeight - pathTile.height ;
        pathTile.x = pathTile.width * i;
        pathTiles.push(pathTile);
        world.addChild(pathTile);
    }
}

function addBushes(){
    for (var i = 0; i < bushPositions.length ; i++) {
        var bush = new Sprite(resources["./assets/png/Object/Bush (1).png"].texture);
        bush.y = screenHeight - pathTiles[0].height  - 60;
        bush.x = bushPositions[i];
        world.addChild(bush);
    }
}

function addSigns() {
    for ( var i = 0; i < signPositions.length ; i++) {
        var sign = new Sprite(resources["./assets/png/Object/Sign_2.png"].texture);
        sign.y = screenHeight - pathTiles[0].height  - 60;
        sign.x = signPositions[i];
        world.addChild(sign);
        var message = new PIXI.Text(
            "TW",
            {font: "18px sans-serif", fill: "white"}
        );
        message.position.set(signPositions[i]+10, screenHeight - pathTiles[0].height  - 47);
        world.addChild(message);

    }
}

function createMemoryAsset(frames, Xpostition, sliderClass){
    var cloud = new PIXI.extras.MovieClip(frames);
    cloud.animationSpeed = 0.6;
    cloud.play();
    cloud.scale.set(0.15);
    cloud.anchor.set(0.5);
    cloud.y = screenHeight - pathTiles[0].height  - cloud.height - 50;
    cloud.x = Xpostition;
    cloud.slider = sliderClass;
    return cloud;
}

function addFutbolmatchAssets(){
    var futbolMatchCloudPositions = [4500];
    for ( var i = 0; i < futbolMatchCloudPositions.length ; i++) {
        var cloud =  createMemoryAsset(greenDisketteFrames, futbolMatchCloudPositions[i], "futbolmatch-slider");
        clouds.push(cloud);
        world.addChild(cloud);
    }

    lever = new Sprite(resources["./assets/png/Object/lever left2.png"].texture);
    lever.scale.set(0.15);
    lever.y = screenHeight - pathTiles[0].height  - (lever.height/2) + 10;
    lever.x = 5000;
    lever.anchor.set(0.5);
    lever.active = false;
    world.addChild(lever);


    var scroll = new Sprite(resources["./assets/png/Object/scroll_yellow.png"].texture);
    scroll.scale.set(0.4,0.4);
    scroll.y = 0;
    scroll.x = 0;

    sword = new Sprite(resources["./assets/png/Object/sword.png"].texture);
    sword.scale.set(0.1,0.1);
    sword.anchor.set(0.5);
    sword.y = -100;
    sword.rotation = 1.5;
    sword.x = 5500;
    sword.attackIncrease = 10;



    futbolMatchScroll = new Container();
    futbolMatchScroll.x = 5000;
    futbolMatchScroll.y = -scroll.height;

    futbolMatchScroll.addChild(scroll);
    world.addChild(sword);

    var message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 30;
    futbolMatchScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 110;
    futbolMatchScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 190;
    futbolMatchScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 270;
    futbolMatchScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 350;
    futbolMatchScroll.addChild(message);

    world.addChild(futbolMatchScroll);



    zombie = new PIXI.extras.MovieClip(zombieIdleFrames);

    zombie.animationSpeed = 0.4;
    zombie.anchor.set(0.5);
    zombie.play();
    zombie.scale.set(0.5 * -1, 0.5);
    zombie.position.set(6500, calculateFloorYPosition(zombie) - zombie.height);
    zombie.lifePoints = 500;

    angular = new Sprite(resources["./assets/png/Object/angular.png"].texture);
    angular.scale.set(0.1,0.1);
    angular.anchor.set(0.5);
    angular.visible = false;
    angular.vy = 0;
    angular.position.set(6500,  calculateFloorYPosition(angular) - angular.height);

    agile = new Sprite(resources["./assets/png/Object/agile.png"].texture);
    agile.scale.set(0.2,0.2);
    agile.anchor.set(0.5);
    agile.visible = false;
    agile.vy = 0;
    agile.position.set(6550,  calculateFloorYPosition(agile) - agile.height * 2);

    ruby = new Sprite(resources["./assets/png/Object/ruby.png"].texture);
    ruby.scale.set(0.05,0.05);
    ruby.anchor.set(0.5);
    ruby.visible = false;
    ruby.vy = 0;
    ruby.position.set(6600,  calculateFloorYPosition(ruby) - ruby.height);

    zombieLoot.push(angular);
    zombieLoot.push(ruby);
    zombieLoot.push(agile);
    lootableAssets.push(angular);
    lootableAssets.push(ruby);
    lootableAssets.push(agile);

    world.addChild(zombie);
    world.addChild(angular);
    world.addChild(agile);
    world.addChild(ruby);

}

function addDjangoAssets() {
    var djangoCloudPositions = 8800;
    var cloud =  createMemoryAsset(disketteFrames, djangoCloudPositions, "django-slider");
    clouds.push(cloud);
    world.addChild(cloud);
}

function addSeleneAssets() {
    var seleneCloudPositions = 10500;
    var cloud =  createMemoryAsset(disketteFrames, seleneCloudPositions, "selene-slider");
    clouds.push(cloud);
    world.addChild(cloud);

    var chest = new Sprite(resources["./assets/png/Object/treasure.png"].texture);
    chest.scale.set(0.25,0.25);
    chest.anchor.set(0.5);
    chest.position.set(11000,  calculateFloorYPosition(chest) - chest.height);
    chests.push(chest);
    chest.loot = [];
    world.addChild(chest);

    python = new Sprite(resources["./assets/png/Object/python.png"].texture);
    python.scale.set(0.2,0.2);
    python.anchor.set(0.5);
    python.vy = 0;
    python.vx = 0;
    python.visible = false;
    python.floorPosition = calculateFloorYPosition(python) - (python.height + 20);
    python.position.set(11000, python.floorPosition);
    python.direction = -3;

    react = new Sprite(resources["./assets/png/Object/react-logo.png"].texture);
    react.scale.set(0.2,0.2);
    react.anchor.set(0.5);
    react.visible = false;
    react.vy = 0;
    react.vx = 0;
    react.floorPosition = calculateFloorYPosition(react) - (react.height + 20);
    react.position.set(11000, react.floorPosition);
    react.direction = 3;

    world.addChild(python);
    world.addChild(react);
    movableAssets.push(python);
    movableAssets.push(react);
    lootableAssets.push(python);
    lootableAssets.push(react);
    chest.loot.push(python);
    chest.loot.push(react);

}

function addConQuitoAssets() {
    var conquitoCloudPosition = 12800;
    var cloud =  createMemoryAsset(disketteFrames, conquitoCloudPosition, "conquito-slider");
    var bulbasor = new Sprite(resources["./assets/png/Object/bulbasour.png"].texture);
    bulbasor.scale.set(0.1,0.1);
    bulbasor.anchor.set(0.5);
    bulbasor.position.set(13300, calculateFloorYPosition(bulbasor) - bulbasor.height);
    bulbasor.active  = false;
    bulbasor.action = function () {
        this.active = true;
        window.open("http://localhost:8090/#/battle/1/25");
    };
    bulbasor.remove = false;
    actionableAssets.push(bulbasor);
    world.addChild(bulbasor);

    clouds.push(cloud);
    world.addChild(cloud);
}

function addLatamAssets() {
    var plane = new PIXI.extras.MovieClip(planeFrames);

    plane.animationSpeed = 0.15;
    plane.anchor.set(0.5);
    plane.play();
    plane.scale.set(0.5 * -1, 0.5);
    plane.position.set(15000, calculateFloorYPosition(plane) - plane.height);
    plane.active  = false;
    plane.action = function () {
        this.active = true;
        window.open("http://localhost:8080");
    };
    plane.remove = false;
    actionableAssets.push(plane);
    world.addChild(plane);

    var scroll = new Sprite(resources["./assets/png/Object/scroll_yellow.png"].texture);
    scroll.scale.set(0.4,0.4);
    scroll.y = 0;
    scroll.x = 0;

    var gun = new Sprite(resources["./assets/png/Object/gun.png"].texture);
    gun.scale.set(0.25,0.25);
    gun.y = -100;
    gun.x = 16400;
    gun.vx = 0;
    gun.vy = 0;
    gun.floorPosition =  calculateFloorYPosition(gun) - gun.height * 2;
    gun.anchor.set(0.5);
    gun.action = function () {
        player.attackingFrames = gunAttackingFrames;
    };
    gun.active = false;
    movableAssets.push(gun);
    lootableAssets.push(gun);
    world.addChild(gun);

    var latamScroll = new Container();
    latamScroll.x = 16000;
    latamScroll.y = -scroll.height;
    latamScroll.vy=0;
    latamScroll.vx=0;
    latamScroll.floorPosition = -20;

    latamScroll.addChild(scroll);
    world.addChild(sword);

    var message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 30;
    latamScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 110;
    latamScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 190;
    latamScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 270;
    latamScroll.addChild(message);

    message = new PIXI.Text(
        "- Este es un feedback muy \n muy bueno, lorem\n ipsum dolor sit amen",
        {font: "18px sans-serif", fill: "black"}
    );
    message.x = 40;
    message.y = 350;
    latamScroll.addChild(message);

    movableAssets.push(latamScroll);

    world.addChild(latamScroll);

    var lever = new Sprite(resources["./assets/png/Object/lever left2.png"].texture);
    lever.scale.set(0.15);
    lever.y = screenHeight - pathTiles[0].height  - (lever.height/2) + 10;
    lever.x = 15800;
    lever.anchor.set(0.5);
    lever.active = false;
    lever.action = function () {
        if(hitTestRectangle(player, this, world) && !this.active && player.state == "attacking"){
            this.scale.x = this.scale.x * -1;
            this.x = this.x + this.width / 2;
            this.active = true;
            latamScroll.vy = 7;
            gun.vy = 7;
        }
    };
    lever.remove = false;
    actionableAssets.push(lever);
    world.addChild(lever);

    var chest = new Sprite(resources["./assets/png/Object/treasure.png"].texture);
    chest.scale.set(0.25,0.25);
    chest.anchor.set(0.5);
    chest.position.set(17000,  calculateFloorYPosition(chest) - chest.height);
    chests.push(chest);
    chest.loot = [];
    world.addChild(chest);

    var bubbleItem = new Sprite(resources["./assets/png/Object/bubble.png"].texture);
    bubbleItem.scale.set(0.03,0.03);
    bubbleItem.anchor.set(0.5);
    bubbleItem.vy = 0;
    bubbleItem.vx = 0;
    bubbleItem.visible = false;
    bubbleItem.floorPosition = calculateFloorYPosition(bubbleItem) - (bubbleItem.height + 20);
    bubbleItem.position.set(17000, bubbleItem.floorPosition);
    bubbleItem.direction = -3;
    bubbleItem.action = function () {
        bubble.visible = true;
    };


    world.addChild(bubbleItem);
    movableAssets.push(bubbleItem);
    lootableAssets.push(bubbleItem);
    chest.loot.push(bubbleItem);

    var latamCloudPosition = 18000;
    var cloud =  createMemoryAsset(disketteFrames, latamCloudPosition, "latam-slider");

    clouds.push(cloud);
    world.addChild(cloud);

    death = new PIXI.extras.MovieClip(deathIdleFrames);

    death.animationSpeed = 0.4;
    death.anchor.set(0.5);
    death.scale.set(0.5 * -1, 0.5);
    death.position.set(19000, calculateFloorYPosition(death) - death.height);
    death.play();
    death.lifePoints = 500;
    setInterval(function () {
        death.textures= deathAttackFrames;
        death.animationSpeed = 0.15;
        death.gotoAndPlay(0);
        death.loop = false;
        var bullet =  new Sprite(resources["./assets/png/Object/bullet.png"].texture);
        bullet.anchor.set(0.5);
        bullet.scale.set(0.15);
        bullet.y = death.y + 25;
        bullets.push(bullet);

        bullet.scale.x = -0.15;
        bullet.vx = -8;
        bullet.x = death.x + 100;
        bullet.source = "dragon";
        setTimeout(function () {
            world.addChild(bullet);
        },400);
        death.onComplete = function () {
            death.animationSpeed = 0.4;
            death.textures = deathIdleFrames;
            death.loop = true;
            death.play();
        }
    },3500);


    world.addChild(death);

}