let img;
let video;
let detector;
let detections = [];

function preload() {
  img = loadImage("penguin_seal.jpg");
  detector = ml5.objectDetector("cocossd");
}

// function preloadVideo() {
//   video = createCapture(VIDEO);
// }

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    let object = results[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(20);
    text(object.label, object.x + 10, object.y + 20);
    text(
      `${object.confidence.toFixed(2) * 100}%`,
      object.x + (object.width - 45),
      object.y + (object.height - 20)
    );
  }
}

function gotDetectionsVideo(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  console.log(results);

  detector.detect(video, gotDetectionsVideo);
}

function setup() {
  createCanvas(640, 480);
  //console.log(detector);
  // image(img, 0, 0);
  video = createCapture(VIDEO);
  video.hide();
  // detector.detect(img, gotDetections);
  detector.detect(video, gotDetectionsVideo);
}

function draw() {
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(20);
    text(object.label, object.x + 10, object.y + 20);
    text(
      `${object.confidence.toFixed(2) * 100}%`,
      object.x + (object.width - 45),
      object.y + (object.height - 20)
    );
  }
}
