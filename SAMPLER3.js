var font1, words, pangram,fontSize;
var myText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ       abcdefghiklmnopqrstuvwxyz!?.,\:\;\[\]       0123456789 <>/\\@#$%&=+-×÷*      ';
var size = 46;
var pangram = 'Sixty zippers were quickly picked from the woven jute bag.             ';
var slider;  
var colors;
var sound;

var testText;

function preload() {
        
 font1 = loadFont('data/GummyBear.otf');
 
 bite = loadImage('data/bite.png'); 

  
    // Initialize sound
    soundFormats('mp3', 'ogg');
    sound = loadSound('data/chomp.mp3');
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(255);
 fill(0);
 noStroke();
 textFont(font1);
 
words = myText.split(' ');
textSize(46);
fontSize =(height/10);
testText = 'Gummy';
 
slider = createSlider(0,1,0.5,0.001);
 
purple = color(168, 111, 186);
blue = color(92, 192, 219);
red = color(255, 105, 97);
green = color(199, 234, 0);
pink = color(247, 139, 209);
yellow = color(245, 215, 122);

colors = [purple, blue, red, green, pink, yellow];

push();
textSize(400);
textAlign(CENTER); 
fill(colors[int(random(0,5))]); 
text(testText,width/2,height/2);
pop();

 
   
}


function draw() { 
  
//text borders to stop them from being eaten  
push();
fill(255);
rect(width/4, height/10, width/2, 0.1*height/2);
pop(); 

push();
fill(255);
rect(width/4, 1.3*height/2, width/2, 0.5*height/2);
pop();  
   
//all glyphs  
push();
textSize(46);
textAlign(CENTER);
text(myText, 0.6*width/2,1.3*height/2,width/2,height/2);
pop();

//pangram
push();
textSize(23);
textAlign(CENTER);
text(pangram, 0.6*width/2, height/8,width/2,height/2);
pop();

//slider
push();
textSize(24);
text("volume",20,20,width/12,height/40);
sound.setVolume(slider.value());
slider.position(width/14, height/43);
pop();

//instructions
push();
textSize(24);
text("press any key",width/73,height/12);
text("click to CHOMP",width/73,height/9);
pop();

}

function mouseClicked(){
  push();
  image(bite,mouseX,mouseY,200,200);
  pop();
  sound.play();
  
}
  
function keyTyped(){

push();
testText=key;
background(255);
textSize(400);
textAlign(CENTER); 
fill(colors[int(random(0,5))]); 
text(testText,width/2,height/2);

pop();
  
}
