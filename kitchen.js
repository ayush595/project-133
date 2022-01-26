cocossddddbro= "";
status= "";
image1= "";
objects= [];


function preload() {
    image1= loadImage("wje.jpg");
}
function setup() {
    canvas= createCanvas(800, 500);
    canvas.position(600, 200);

    cocossddddbro= ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML= "Detecting objects";

}
function modelloaded() {
    console.log("model is loded mam/sir")
    status= true;
    cocossddddbro.detect(image1, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects= results;
    }
    
}
function draw() {
    image(image1, 0, 0, 800, 500);
    if (status != "") {
         for (var i=0;  i< objects.length ; i++) {
            document.getElementById("status").innerHTML= "status= objects has been detected";
            document.getElementById("detc").innerHTML= objects.length + "objects are detected";
            fill("yellow");
            accuracy= floor(objects[i].confidence*100);
            text(objects[i].label + " " + accuracy + "%", objects[i].x+15 , objects[i].y+15);
            noFill();
            stroke("purple");
            strokeWeight(4);
            rect(objects[i].x-300, objects[i].y-2000, objects[i].width-1000, objects[i].height);
            
        }
    }
}
function back() {
    window.location= "index.html";

}