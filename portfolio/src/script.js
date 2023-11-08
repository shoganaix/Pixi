var character = document.querySelector(".character");
var map = document.querySelector(".map");

var x = 805;
var y = 400;

var speed = 32;


document.addEventListener("keydown", function(event) 
{
    switch (event.key) {
        case "ArrowUp":
            moveCharacter(0, -speed, "up");
            break;
        case "ArrowDown":
            moveCharacter(0, speed, "down");
            break;
        case "ArrowLeft":
            moveCharacter(-speed, 0, "left");
            break;
        case "ArrowRight":
            moveCharacter(speed, 0, "right");
            break;
    }
});

function moveCharacter(dx, dy, direction) 
{
    x += dx;
    y += dy;
    character.style.left = x + "px";
    character.style.top = y + "px";
    character.className = "character facing-" + direction;
}