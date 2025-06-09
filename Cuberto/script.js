Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./vids/0.mp4","./vids/2.mp4","./vids/3.mp4"]});
// gsap.registerPlugin(ScrollTrigger) 
gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1
    },
    y:"-300%",
    ease:Power1,
})
let sectionss=document.querySelectorAll(".fleftelem");
Shery.imageEffect("#fright .images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sectionss.forEach(function(section,index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
                setScroll(prog.progress + index)
            }
        })
    })
  },
});
// let sections = document.querySelectorAll(".fleftelem");
// Shery.imageEffect(".images", {
//   style: 5,
// //   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         // console.log(prog)
//         },
//       });
//     });
//   },
// });