function preload(){

}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
video.hide();
filterColor="";
}
function draw(){
    image(video,0,0,600,400);
    tint(filterColor);
}
function filter(){
    filterColor=document.getElementById("space").value;
}
function take_snapshot(){
    save('linefilter.png');
}