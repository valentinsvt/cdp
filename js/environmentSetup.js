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

    for (var i = 0; i <= 80; i++) {
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

function addFutbolmatchAssets(){
    var futbolMatchCloudPositions = [4500];
    for ( var i = 0; i < futbolMatchCloudPositions.length ; i++) {
        var cloud = new Sprite(resources["./assets/png/Object/cloud.png"].texture);
        cloud.scale.set(0.2);
        cloud.anchor.set(0.5);
        cloud.y = screenHeight - pathTiles[0].height  - cloud.height - 50;
        cloud.x = futbolMatchCloudPositions[i];
        cloud.slider = "futbolmatch-slider";
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

    futbolMatchScroll = new Container();
    futbolMatchScroll.x = 5000;
    futbolMatchScroll.y = -scroll.height;

    futbolMatchScroll.addChild(scroll);

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

}