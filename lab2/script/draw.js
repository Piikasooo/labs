function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
 
if (window.addEventListener)
            window.addEventListener("load", draw, true);
 function LoadImg() {

            var canvas = document.getElementById("img");
            var context = canvas.getContext("2d");

            var logo = new Image();

            logo.onload = function () {
                context.drawImage(logo, 0, 0);
            }

            logo.src = "images/mercedes.png";
        }

if (window.addEventListener)
            window.addEventListener("load", LoadImg, true);


"use strict";
var sp = 0.2;
var images;
var img_count = 0;
var cont = true;//при натисканні користувача змінюється, щоб призупинити анімацію
function print_on_canvas(canv, contxt) { 
    "use strict";
    contxt.font = 'italic 15pt Arial';
    contxt.fillStyle = 'white';
    contxt.fillText('', 10, canv.height - 11);
}
function draw_ring_in_hands(){
    "use strict";
    var ringInHands = document.getElementById('ring_in_hands');
    var ringcontext = ringInHands.getContext('2d');
    ringcontext.drawImage(images[Math.floor(img_count/4)], 0, 0);//малюємо рисунок
    img_count = Math.floor((img_count + 1) % 68);
    print_on_canvas(ringInHands, ringcontext);//друкуємо текст
    if (cont) {
        requestAnimationFrame(draw_ring_in_hands);
    }
}
if(window.addEventListener){ //для ІЕ
    window.addEventListener('load', winload);
}
else{
    window.attachEvent('onload', winload);
}
function winload() {
    "use strict";
    if (document.all) { //ІЕ10- не має підтримки drawImage
        document.getElementById('for_canvas').innerHTML = '<p id="error">Ваш браузер не підтримує елемент</p>';
        return;
    }
    images = new Array(17); // масив картинок для анімації
    for (var i = 0; i < images.length; ++i) {
        images[i] = new Image();
        images[i].src = "images/" + i + ".jpg";
    }
    draw_ring_in_hands();
    window.onresize = function () { //масштабування анімації
        if (window.innerWidth >= 450 && window.innerWidth <= 600) {
            document.getElementById('ring_in_hands').width = window.innerWidth - 30;
            document.getElementById('ring_in_hands').height = 150;
        }
        else {document.getElementById('ring_in_hands').height = 222;}
        print_on_canvas(document.getElementById('ring_in_hands'), document.getElementById('ring_in_hands').getContext('2d'));
    };
    //задання розмірів при запуску
    document.getElementById('ring_in_hands').width = window.innerWidth >= 450 && window.innerWidth <= 600 ? window.innerWidth - 30 : 500;
    document.getElementById('ring_in_hands').height = window.innerWidth >= 450 && window.innerWidth <= 600 ? 150 : 222;
    document.getElementById('ring_in_hands').onclick = function() {
        if (cont) {
            cont = false;
        }
        else {
            cont = true;
            draw_ring_in_hands();
        }
    }
}
