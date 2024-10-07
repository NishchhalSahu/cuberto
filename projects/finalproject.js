function init() {
    gsap.registerPlugin(ScrollTrigger);
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var iscroll=document.querySelector("#scroll");
var overlay=document.querySelector("#overlay");
overlay.addEventListener("mouseenter",function(dets){
    iscroll.style.scale=1
})
overlay.addEventListener("mouseleave",function(dets){
    iscroll.style.scale=0
})
overlay.addEventListener("mousemove",function(dets){
iscroll.style.left=`${dets.x- 45 }px`
iscroll.style.top=`${dets.y -35 }px`
})

 gsap.to("#page2 img",{
    rotate:10,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        start:"top 80%",
        scrub:3    
      } })

  var a=document.querySelector("#page3");
  var b=document.querySelector("#div-img");

a.addEventListener("mousemove",function(elem){
  b.style.left=`${elem.x- 50}px`
  b.style.top=`${elem.y-35}px`
})
a.addEventListener("mouseenter",function(elem){
    b.style.scale=1
})
a.addEventListener("mouseleave",function(elem){
    b.style.scale=0
})


var p=document.querySelector("#page4");
p.addEventListener("mousemove",function(dets){
    document.querySelector("#page4>img").style.top=`${dets.y}px`
    document.querySelector("#page4>img").style.left=`${dets.x}px`

   document.querySelector("#page4>button").style.left=`${dets.x  +30}px`
   document.querySelector("#page4>button").style.top=`${dets.y +200}px`
})


var ele=document.querySelectorAll(".element")
ele.forEach(function(e){
    var d=e.getAttribute("data-img")
    e.addEventListener( "mouseenter", function(){
          document.querySelector("#page4>img").setAttribute("src",d)
    })
})

var page7=document.querySelector("#page7");
var imaag=document.querySelector("#div7-img");
page7.addEventListener("mousemove",function(dets){
     imaag.style.top=`${dets.y}px`
     imaag.style.left=`${dets.x}px`
})
page7.addEventListener("mouseenter",function(elem){
    imaag.style.scale=1
})
page7.addEventListener("mouseleave",function(elem){
    imaag.style.scale=0
})

//texillate js animation
gsap.from("#page1 h1", {
    duration: 0.5,
    onStart: function () {
        $('#page1 h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.5, } });
    },
  
    }
)
gsap.from("page2 h1",{
    duration:.5,
    onStart:function(){
        $('#page2 h1').textillate({ in: { effect: 'fadeInUp',   delayScale: 0.5, } });

    },
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        start:"top 90%"
    }
})



//here its start gsap animation for pics
   gsap.to("#page6",{
       scrollTrigger:{
          scroller:"#main",
          trigger:"#page6",
           scrub:true,
          start:"top 0%",
          end:"top -80%",
          
          pin:true
       }
   })
   gsap.from("#page6-2img",{
    scrollTrigger:{
       scroller:"#main",
       trigger:"#page6-2img",
        scrub:2,
       start:"top 80%",
       end:"top 50%",
       
    },
    y:600,
})