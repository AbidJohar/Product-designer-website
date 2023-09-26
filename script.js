
function firstPageanimation(){
    
 var t1 = gsap.timeline();
 t1.from('#nav', {
    duration: 1.5, 
    y: -10,
   opacity: 0,
   ease: Expo.easeInOut
 })
 .to('.elemtext', {
    delay: -.5,
    duration:1.5,
    y: 0,
   ease: Expo.easeInOut,
   stagger: .5
 })
 .from('#abid', {
    delay: -.5,
    duration: 1, 
    y: -5,
   opacity: 0,
   ease: Expo.easeInOut
 })
 .from('#headfoter', {
    delay: -.5,
    duration: 1, 
    y: 5,
   opacity: 0,
   ease: Expo.easeInOut
 })
}
function movesmallcirlce(){
  var cir = document.querySelector("#smallcircle");
  
  window.addEventListener("mousemove", function(dets){
    
    cir.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
  })
}
setInterval(function currentTime(){
    
    var time = document.getElementById("time");
    var now = new Date();
    var settime = now.toLocaleTimeString();
    time.textContent = `${settime}`;
}, 1000);

movesmallcirlce();
firstPageanimation();

document.querySelectorAll('.elem').forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
   elem.addEventListener("mousemove", function (dets) {
       var img = elem.querySelector("img");
       var imgRect = img.getBoundingClientRect();
       var diffY = dets.clientY - imgRect.top - imgRect.height / 2;
       diffrot = dets.clientX - rotate;
       rotate = dets.clientX;

       gsap.to(img, {
           x: dets.clientX,
           y: diffY,
           ease: Power1,
           opacity:1,
           rotate: gsap.utils.clamp(-25,25, diffrot)
       });
       
   })
   elem.addEventListener("mouseleave", function (dets) {
       var img = elem.querySelector("img");
        
       gsap.to(img, {
            opacity:0
       });
       
   })
});
 
 var hpage = document.querySelector("#headpage")
 var spage = document.querySelector("#secondpage")
 var lpage = document.querySelector("#about")
 
 var dark = document.querySelector("#dark")
 dark.addEventListener("click", function(){

     hpage.style.backgroundColor = "black";
     spage.style.backgroundColor = "black";
     lpage.style.backgroundColor = "black";
     dark.style.border= "0.4px solid white";
     white.style.border= "0px";
  
  
 })
 var white = document.querySelector("#light")
 white.addEventListener("click", function(){

     hpage.style.backgroundColor = " rgba(27, 27, 75, 0.958)";
     spage.style.backgroundColor = " rgba(27, 27, 75, 0.958)";
     lpage.style.backgroundColor = " rgba(27, 27, 75, 0.958)";
     dark.style.border= "0px";
     white.style.border= "0.4px solid white";
  
  
 })
 
  