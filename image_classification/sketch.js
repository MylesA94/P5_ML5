let mobilenet;

let puffin;

function modelReady() {
  console.log("Model is ready!!!");
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  console.log("ml5 version:", ml5.version);
  createCanvas(640, 480);
  puffin = createImg(
    "C:/Users/Myles Albaladejo/Pictures/IMG_5761.JPG",
    imageReady
  );
  puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
