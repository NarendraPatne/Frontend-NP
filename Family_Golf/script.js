let cursor=document.querySelector("#cursor");
let cblur=document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+30+"px"
    cursor.style.top=dets.y+"px"
    cblur.style.left=dets.x-200+"px"
    cblur.style.top=dets.y-200+"px"
})
let hfall=document.querySelectorAll("#nav h4");
hfall.forEach(function(elem){
    elem.addEventListener("mouseenter",(dets)=>{
        cursor.style.scale=3;
        cursor.style.border=".5px solid #fff";
        cursor.style.backgroundColor="transparent";
        elem.style.color="#000";
    })
    elem.addEventListener("mouseleave",(dets)=>{
        elem.style.color="#FFF";
        cursor.style.scale=1;
        cursor.style.border="0px solid #fff";
        cursor.style.backgroundColor="#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.3,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
});
gsap.from("#aboutus img,#aboutusin",{
    y:80,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:.5,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#lcomma",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#lcomma",
        scroller:"body",
        // markers:"true",
        start:"top 55%",
        scrub:4,
        end:"top 45%"
    }
})
gsap.to("#rcomma",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#lcomma",
        scroller:"body",
        // markers:"true",
        start:"top 55%",
        scrub:2,
        end:"top 45%"
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 65%",
        end:"top 60%",
        scrub:3
    }
})
let menub=document.querySelector("#men");
let menu=document.querySelector("#menud")
menub.addEventListener("click",function(e){
   if (menu.style.opacity === "1") {
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
    } else {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";
    }
})