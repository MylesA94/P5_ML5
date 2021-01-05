let mobilenet;

let puffin;
let gorilla;
let video;
let label = "";

function modelReady() {
  console.log("Model is ready!!!");
  mobilenet.classify(gorilla, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    // get label of possible classifications
    label = results[0].label.split(",");
    // get probability and make percentage for display
    let probability = results[0].confidence * 100;
    // // display classification as well as probability of classification correctness
    fill(255);
    textSize(32);
    // text(label[0], 10, height - 20);
    text(
      `${label[0]}, probability: ${probability.toFixed(2)}%`,
      10,
      height - 20
    );
    mobilenet.classify(gotResults);
  }
}

// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function imageReady2() {
  image(gorilla, 0, 0, width, height);
}

function setup() {
  console.log("ml5 version:", ml5.version);
  createCanvas(640, 480);
  // puffin = createImg("./images/puffin.jpg", imageReady);
  gorilla = createImg("./images/gorilla.jpg", imageReady2);
  gorilla.hide();
  //puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
