let mobilenet;

let puffin;

function modelReady() {
  console.log("Model is ready!!!");
  mobilenet.classify(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    // get label of possible classifications
    let label = results[0].label;
    // get probability and make percentage for display
    let probability = results[0].confidence * 100;
    fill(0);
    textSize(64);
    // display classification as well as probability of classification correctness
    text(label, 10, height - 100);
    text(`probability: ${probability.toFixed(2)}%`, 10, height - 180);
  }
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  console.log("ml5 version:", ml5.version);
  createCanvas(640, 480);
  puffin = createImg("./images/puffin.jpg", imageReady);
  puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
