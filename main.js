var canvas=new fabric.Canvas('myCanvas');
player_x=100;
player_y=100;
block_img_width=30;
block_img_height=30;
var player_object="";
var blocks_object="";
function update_player() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
 {
        fabric.Image.fromURL("get_image", function (Img) {
        blocks_object=Img;
        blocks_object.scaleToWidth(block_img_width);
        blocks_object.scaleToHeight(block_img_height);
        blocks_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blocks_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    var keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey== true && keypressed=="80") {
        console.log("p and shift key pressed together");
        block_img_width=block_img_width + 10;
        block_img_height=block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if (e.shiftKey== true && keypressed=="77") {
        console.log("m and shift key pressed together");
        block_img_width=block_img_width - 10;
        block_img_height=block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
if (keypressed=='38') {
    Up();
    console.log("Up");
}
if (keypressed=='40') {
    Down();
    console.log("Down");
}
if (keypressed=='37') {
    Left();
    console.log("Left");
}
if (keypressed=='39') {
    Right();
    console.log("Right");
}
if (keypressed=='84') {
    new_image('trunk.jpg');
    console.log("t");
}
if (keypressed=='68') {
    new_image('dark_green.png');
    console.log("d");
}
if (keypressed=='76') {
    new_image('light_green.png');
    console.log("t");
}
if (keypressed=='71') {
    new_image('ground.png');
    console.log("g");
}
if (keypressed=='87') {
    new_image('wall.jpg');
    console.log("w");
}
if (keypressed=='89') {
    new_image('yellow_wall.png');
    console.log("y");
}
if (keypressed=='82') {
    new_image('roof.jpg');
    console.log("r");
}
if (keypressed=='67') {
    new_image('cloud.jpg');
    console.log("c");
}
if (keypressed=='85') {
    new_image('unique.png');
    console.log("u");
}
}
function Up() {
    if (player_y>=0) {
        player_y=player_y-block_img_height;
        console.log("Block image height is=" +block_img_height);
        console.log("When Up arrow key is pressed X=" +player_x + "Y=" +player_y);
        canvas.remove(player_object);
        update_player();
    }
}
function Down() {
    if (player_y<=550) {
        player_y=player_y+block_img_height;
        console.log("Block image height is=" +block_img_height);
        console.log("When Down arrow key is pressed X=" +player_x + "Y=" +player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function Left() {
    if (player_x>0) {
        player_x=player_x-block_img_width;
        console.log("Block image width is=" +block_img_width);
        console.log("When Left arrow key is pressed X=" +player_x + "Y=" +player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function Right() {
    if (player_x<950) {
        player_x=player_x+block_img_width;
        console.log("Block image width is=" +block_img_width);
        console.log("When Right arrow key is pressed X=" +player_x + "Y=" +player_y);
        canvas.remove(player_object);
        update_player();
    }
}