function preload()
{
img = loadImage('https://st.depositphotos.com/1719930/2223/i/600/depositphotos_22230607-stock-photo-isolated-check-pictogram-inside-a.jpg');

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
    image(img,0, 0, 640, 480 )
}

function takeSnapshot() {
    save('studantName.pn');   
}

function filterTint(){
    tintColor = document.getElementById("colorName").value
}



