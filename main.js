function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',Modelloaded)
  }
  
  function draw(){
    image(video,0,0,300,300)  
    classifier.classify(video,gotResult)
  }
  function Modelloaded(){
    console.log("Modelloaded")
    
  }
  function Takesnapshot(){
      save ("photo.jpg")
  }