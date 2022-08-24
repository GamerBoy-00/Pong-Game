var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8c4beaa3-8b47-4dc2-b69e-f6a8cecf22e0","fa687c93-b5c6-467f-80c5-933779171e1e","87bcd186-f372-4b62-9179-6918bb1bd383","9652883a-2518-403c-ba2f-e596bb066099","ae335bfb-d2f8-4065-8b9c-c7cd7e8dcaf9","c0da61f5-814e-43d6-8d79-4d0695fda266"],"propsByKey":{"8c4beaa3-8b47-4dc2-b69e-f6a8cecf22e0":{"name":"imagem_2022-05-31_182223934.png_1","sourceUrl":"assets/v3/animations/WJIM4yhnyoeX6FKpm1SabILiXDOh5NSmZsh-Q4O-g9M/8c4beaa3-8b47-4dc2-b69e-f6a8cecf22e0.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"txlaOMzP2uAwpzHdEBQHMeZ2S2okY5hC","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/WJIM4yhnyoeX6FKpm1SabILiXDOh5NSmZsh-Q4O-g9M/8c4beaa3-8b47-4dc2-b69e-f6a8cecf22e0.png"},"fa687c93-b5c6-467f-80c5-933779171e1e":{"name":"Kirito","sourceUrl":null,"frameSize":{"x":146,"y":131},"frameCount":4,"looping":true,"frameDelay":12,"version":"k6gUufy2t2w8XRY6OFtNAJBoFw.oThe4","loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":262},"rootRelativePath":"assets/fa687c93-b5c6-467f-80c5-933779171e1e.png"},"87bcd186-f372-4b62-9179-6918bb1bd383":{"name":"Kirito2","sourceUrl":null,"frameSize":{"x":71,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"dZyHioxZgXF7UcVUKDyq.HZQpb7iO9m6","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":130},"rootRelativePath":"assets/87bcd186-f372-4b62-9179-6918bb1bd383.png"},"9652883a-2518-403c-ba2f-e596bb066099":{"name":"bola","sourceUrl":null,"frameSize":{"x":507,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"ao.eYe.au9FTdHUHxBiGiVTqY7E_Q1iM","loadedFromSource":true,"saved":true,"sourceSize":{"x":507,"y":512},"rootRelativePath":"assets/9652883a-2518-403c-ba2f-e596bb066099.png"},"ae335bfb-d2f8-4065-8b9c-c7cd7e8dcaf9":{"name":"cavaleiro","sourceUrl":null,"frameSize":{"x":531,"y":260},"frameCount":4,"looping":true,"frameDelay":12,"version":"sUdesHoIb_NDdMZGQCjRfUL6hL24xyh0","loadedFromSource":true,"saved":true,"sourceSize":{"x":531,"y":1040},"rootRelativePath":"assets/ae335bfb-d2f8-4065-8b9c-c7cd7e8dcaf9.png"},"c0da61f5-814e-43d6-8d79-4d0695fda266":{"name":"cavaleiro2","sourceUrl":null,"frameSize":{"x":100,"y":108},"frameCount":1,"looping":true,"frameDelay":12,"version":"miYrE2fj5Gk2RRc8KwRc52Y4qTWY4CA3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":108},"rootRelativePath":"assets/c0da61f5-814e-43d6-8d79-4d0695fda266.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



var playerPaddle = createSprite(375, 200, 10,70);
var computerPaddle = createSprite(25, 200, 10,70);
var ball = createSprite(200, 200, 15, 15);
var barreira = createSprite(150,200,1,400);
barreira.shapeColor=("lightblue");
var barreira2 = createSprite(300,200,1,400);
barreira2.shapeColor="lightblue"
ball.setAnimation("bola");
ball.scale = 0.08;
playerPaddle.shapeColor="black";
playerPaddle.setAnimation("Kirito2");
computerPaddle.shapeColor="darkgray";
ball.shapeColor="lightgray";
  createEdgeSprites();
computerPaddle.setAnimation("cavaleiro2")
function draw() {
  background("lightblue");
  if (ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle)) {
 playSound("assets/moeda-do-mario-som-coin-dkplays_EDHHeqne.mp3");
 }
 



drawnnet();

 ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);



 if (keyDown("w")){
playerPaddle.y = playerPaddle.y -5    ;
   
 }
 
if (keyDown("s")) {
   playerPaddle.y = playerPaddle.y +5 ;
}
if (ball.collide(leftEdge)) {
  ball.y = 200 ;
ball.x = 200 ; 
  
}


if (ball.collide(rightEdge)) {
  ball.y = 200 ;
  ball.x = 200 ; 

}


computerPaddle.y = ball.y ;
    
 if (keyDown("space")) {
  ball.velocityY = 5;
  ball.velocityX = -2.5;
 }
 
  if (barreira.isTouching(ball)) {
    playerPaddle.setAnimation("Kirito2");
  }
 

if (playerPaddle.isTouching(ball)) {
   
    playerPaddle.setAnimation("Kirito");
}


   
 
 
 
 
 
 
 
  
  drawSprites();
}
function drawnnet() {
  
for(var num=0; num <= 400; num = num +20) {
  line(200, num, 200, num+10);
}
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
