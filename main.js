var canvas= new fabric.Canvas("HULACanvas");

blocks_height = 30;
blocks_width = 30;

player_x = 10;
player_y = 10;

var player_object = "";

var avengers_object = "";

function player_Docterstrange()
{
    fabric.Image.fromURL("PLAYER.png",function (Img){
    player_object = Img;


    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(player_object);
    })
}

function img_Thor(getImg)
{
    fabric.Image.fromURL(getImg,function (Img){
        avengers_object = Img;


        avengers_object.scaleToWidth(avengers_width);
        avengers_object.scaleToHeight(avengers_height);
        avengers_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(avengers_object);
    })
}