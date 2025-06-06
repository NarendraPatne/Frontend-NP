const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}
let timer;
function mouseCircleSk(){
    // define default scale val
    let xscale=1;
    let yscale=1;
    let xprev=0;
    let yprev=0;
    window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timer);
        let xdiff=dets.clientX- xprev;
        let ydiff=dets.clientY-yprev;
        xscale=gsap.utils.clamp(.6,1.4,xdiff)
        yscale=gsap.utils.clamp(.6,1.4,ydiff)
        xprev=dets.clientX;
        yprev=dets.clientY;
        circleMouseFollower(xscale,yscale);
        timer=setTimeout(()=>{
                    document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        },100)
    })
}
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    })
}
mouseCircleSk();
circleMouseFollower();
firstPageAnim();
document.querySelectorAll(".elem")
.forEach((elem)=>{
    let rotate=0;
    let di=0;

    elem.addEventListener("mousemove",function(dets){
        let diff=dets.clientY - elem.getBoundingClientRect().top;
        di=dets.clientX-rotate;
        rotate=dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3.easeOut,
            rotate: gsap.utils.clamp(-20,20,di),
            top:diff,
            left:dets.clientX
        })
    })
    elem.addEventListener("mouseleave",(dets)=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            top:0,
            left:0
        })
    })
})