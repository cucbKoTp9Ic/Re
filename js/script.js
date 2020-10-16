
  $(window).on('load',function(){
    let p = document.getElementById('preloader')
    function preloader() { 
      setInterval(()=>{
        p.style.opacity = '0'
      }, 0)
      setInterval(()=> {
        p.style.display = 'none';
      }, 1000)
    }
    preloader();




    // $('.slider').slick({
//   arrows        : true,
//   adaptiveHeight: true,
//   infinite      : false,
//   slidesToShow  : 1,
//   autoplay      : false,
//   autoplaySpeed : 5000,
//   pauseOnFocus  : false,
//   draggable     : false,
//   centerMode    : true,
//   fade          : false,
//   swipe: false,
//   responsive: [
//     {
//     breakpoint: 1500,
//     settings: "unslick",
//     }
//     ]
// });


var bg     = document.getElementById("bg");
var pitem1 = document.getElementById("parallax__item1");
var pitem2 = document.getElementById("parallax__item2");
var pitem3 = document.getElementById("parallax__item3");
var prlx   = document.getElementById("parallax");



function move(top, bottom, screenHeight) {
    if (top < screenHeight && bottom > 0) {
      // console.log('true');
      var delta = screenHeight/2 - (top + bottom)/2;
      // console.log(delta)
      pitem1.style.bottom = (-delta/1.2-300) + "px"
      pitem2.style.bottom = (-delta/4-20) + "px"
      pitem3.style.top    = delta/1.1 + "px"
      pitem3.style.left   = delta*3 + "px"
    } else {
      // console.log('false')
    }
}



addEventListener("scroll", () => {
  var value        = window.scrollY;
      bg.style.top = value * 0.3 + "px";
  var h            = window.innerHeight;
  var prlx_bottom  = prlx.getBoundingClientRect().y + prlx.getBoundingClientRect().height;
  var prlx_top     = prlx.getBoundingClientRect().y
  move(prlx_top, prlx_bottom, h)
  // console.log(prlx_bottom, prlx_top, h)
});



var cube1 = document.getElementById("cube__container1");
var cube2 = document.getElementById("cube__container2");
var cube3 = document.getElementById("cube__container3");
var s     = 50;
var cube = document.getElementById("cube");

addEventListener("mousemove", (e) => {
  var cube_bottom  = cube.getBoundingClientRect().y + cube.getBoundingClientRect().height;
  var cube_top     = cube.getBoundingClientRect().y;
  var w     = window.innerWidth;
  var h     = window.innerHeight;
  if (cube_top < h && cube_bottom > 0) {
    console.log('true');
    var posY  = e.clientY;
  var posX  = e.pageX - document.body.clientWidth + w;
  var midY1 = 
    cube1.getBoundingClientRect().y + cube1.getBoundingClientRect().height / 2;
  var midX1 = 
    cube1.getBoundingClientRect().x + cube1.getBoundingClientRect().width / 2;
  var yp1                   = ((posY - midY1) / document.body.clientHeight) * 200;
  var siny1                 = yp1 / Math.sqrt(s * s + yp1 * yp1);
  var angley1               = (-Math.asin(siny1) * 180) / Math.PI;
  var xp1                   = ((posX - midX1) / document.body.clientWidth) * 200;
  var sinx1                 = xp1 / Math.sqrt(s * s + xp1 * xp1);
  var anglex1               = (Math.asin(sinx1) * 180) / Math.PI;
      cube1.style.transform = `rotateY(${anglex1}deg) rotateX(` + angley1 + `deg)`;

  var midY2 = 
    cube2.getBoundingClientRect().y + cube2.getBoundingClientRect().height / 2;
  var midX2 = 
    cube2.getBoundingClientRect().x + cube2.getBoundingClientRect().width / 2;
  var yp2                   = ((posY - midY2) / document.body.clientHeight) * 200;
  var siny2                 = yp2 / Math.sqrt(s * s + yp2 * yp2);
  var angley2               = (-Math.asin(siny2) * 180) / Math.PI;
  var xp2                   = ((posX - midX2) / document.body.clientWidth) * 200;
  var sinx2                 = xp2 / Math.sqrt(s * s + xp2 * xp2);
  var anglex2               = (Math.asin(sinx2) * 180) / Math.PI;
      cube2.style.transform = 
    `rotateY(${anglex2}deg)       rotateX(` + angley2 + `deg)`;

  var midY3 = 
    cube3.getBoundingClientRect().y + cube3.getBoundingClientRect().height / 2;
  var midX3 = 
    cube3.getBoundingClientRect().x + cube3.getBoundingClientRect().width / 2;
  var yp3                   = ((posY - midY3) / document.body.clientHeight) * 200;
  var siny3                 = yp3 / Math.sqrt(s * s + yp3 * yp3);
  var angley3               = (-Math.asin(siny3) * 180) / Math.PI;
  var xp3                   = ((posX - midX3) / document.body.clientWidth) * 200;
  var sinx3                 = xp3 / Math.sqrt(s * s + xp3 * xp3);
  var anglex3               = (Math.asin(sinx3) * 180) / Math.PI;
      cube3.style.transform = `rotateY(${anglex3}deg) rotateX(` + angley3 + `deg)`;
  }
});


var sm = 50;
addEventListener("touchmove", (e) => {
  var cube_bottom  = cube.getBoundingClientRect().y + cube.getBoundingClientRect().height;
  var cube_top     = cube.getBoundingClientRect().y;
  var w     = window.innerWidth;
  var h     = window.innerHeight;
  if (cube_top < h && cube_bottom > 0) {
    var posY  = e.targetTouches[0].clientY;
  var posX  = e.targetTouches[0].clientX;
  var midY1 = 
    cube1.getBoundingClientRect().y + cube1.getBoundingClientRect().height / 2;
  var midX1 = 
    cube1.getBoundingClientRect().x + cube1.getBoundingClientRect().width / 2;
  var yp1                   = ((posY - midY1) / document.body.clientHeight) * 200;
  var siny1                 = yp1 / Math.sqrt(sm * sm + yp1 * yp1);
  var angley1               = (-Math.asin(siny1) * 180) / Math.PI;
  var xp1                   = ((posX - midX1) / document.body.clientWidth) * 200;
  var sinx1                 = xp1 / Math.sqrt(sm * sm + xp1 * xp1);
  var anglex1               = (Math.asin(sinx1) * 180) / Math.PI;
      cube1.style.transform = `rotateY(${anglex1}deg) rotateX(` + angley1 + `deg)`;

  var midY2 = 
    cube2.getBoundingClientRect().y + cube2.getBoundingClientRect().height / 2;
  var midX2 = 
    cube2.getBoundingClientRect().x + cube2.getBoundingClientRect().width / 2;
  var yp2                   = ((posY - midY2) / document.body.clientHeight) * 200;
  var siny2                 = yp2 / Math.sqrt(sm * sm + yp2 * yp2);
  var angley2               = (-Math.asin(siny2) * 180) / Math.PI;
  var xp2                   = ((posX - midX2) / document.body.clientWidth) * 200;
  var sinx2                 = xp2 / Math.sqrt(sm * sm + xp2 * xp2);
  var anglex2               = (Math.asin(sinx2) * 180) / Math.PI;
      cube2.style.transform = 
    `rotateY(${anglex2}deg)       rotateX(` + angley2 + `deg)`;

  var midY3 = 
    cube3.getBoundingClientRect().y + cube3.getBoundingClientRect().height / 2;
  var midX3 = 
    cube3.getBoundingClientRect().x + cube3.getBoundingClientRect().width / 2;
  var yp3                   = ((posY - midY3) / document.body.clientHeight) * 200;
  var siny3                 = yp3 / Math.sqrt(sm * sm + yp3 * yp3);
  var angley3               = (-Math.asin(siny3) * 180) / Math.PI;
  var xp3                   = ((posX - midX3) / document.body.clientWidth) * 200;
  var sinx3                 = xp3 / Math.sqrt(sm * sm + xp3 * xp3);
  var anglex3               = (Math.asin(sinx3) * 180) / Math.PI;
      cube3.style.transform = `rotateY(${anglex3}deg) rotateX(` + angley3 + `deg)`;
  }
})
var pressed = false;
// addEventListener("keydown", (e) => {
//   if (e.keyCode == 39) {
//     s += 10;
//     console.log(s);
//     switch (pressed) {
//       case true: 
//       break;
//       case false:
//       alert('Нажимая стрелки "влево" и "вправо", ты можешь менять теоретическое расстояние от лиц до плоскости\n(Если оно станет меньше, либо равным нулю, получится забавный эффект)');
//       pressed = true;
//       break;
//     }
//   }
//   // cube.style.transform = `translateZ(-${s}px)`
//   if (e.keyCode == 37) {
//     s -= 10;
//     console.log(s);
//     switch (pressed) {
//       case true: 
//       break;
//       case false:
//       alert('Нажимая стрелки "влево" и "вправо", ты можешь менять теоретическое расстояние от лиц до плоскости\n(Если оно станет меньше, либо равным нулю, получится забавный эффект)');
//       pressed = true;
//       break;
//     }
//   }
// });
$('.nav__menu a').on("click", function(){
  $('.nav__menu a').removeClass('active');
  $(this).addClass('active');
  });
$('.header__arrow').on("click", function(){
  $('.nav__menu a').removeClass('active');
  $('.nav--mobile__menu a').removeClass('m-active');
  $('#l2').addClass('active');
  $('#ml2').addClass('m-active');
  });
});
$('.nav__logo').on("click", function(){
  $('.nav__menu a').removeClass('active');
  $('.nav--mobile__menu a').removeClass('m-active');
  $('#l1').addClass('active');
  $('#ml1').addClass('m-active');
  });
$(".nav--mobile__btn").on("click", function() {
  $(".nav--mobile").toggleClass("menu-active")
})
$('.nav--mobile__menu a').on("click", function(){
  $('.nav--mobile__menu a').removeClass('m-active');
  $(this).addClass('m-active');
  });
