down.press = function() {
    walkAnimation(1);
    zombie.vy = 5;
    zombie.vx = 0;
};
down.release = function() {
    if (!up.isDown && zombie.vx === 0) {
        zombie.vy = 0;
        idleAnimation();
    }
};

up.press = function() {
    walkAnimation(1);
    zombie.vy = -5;
    zombie.vx = 0;
};
up.release = function() {
    if (!down.isDown && zombie.vx === 0) {
        zombie.vy = 0;
        idleAnimation();
    }
};
