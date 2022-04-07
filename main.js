var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var background_image = "";
function new_image(){
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        background_image = Img;

        background_image.scaleToWidth(700);
        background_image.scaleToHeight(510);
        background_image.set({
            top:0,
            left:0
        });
        canvas.add(background_image)
    })	
}

function playSound(){
    x.play()
}
