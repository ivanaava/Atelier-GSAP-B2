// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Animations
// GSAP MatchMedia
let mm = gsap.matchmedia();
mm.add({
    isMobile: '(max-width: 799px)', // Version Smartphone
    isDesktop: '(min-width: 800px)', // Version Desktop
}, (context) => {
    let {isMobile,isDesktop} = context.conditions;

    // Section 2 : Albums
    const tl = gsap.timeline();
    tl.from(".album", {xPercent: +50})

    ScrollTrigger.create({
        animation: tl,
        trigger: ".album",
        start: "top top",
        end: "+2000px",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    })


    gsap.from(".album", { opacity: 0, y: 100, duration: 1 });
}) 


Draggable.create(".movies",{
    type: "x,y",

    onDrag: function(){
        document.querySelector('.movies').style.width = "250px";
    },
    onDragEnd: function(){
        document.querySelector('.movies').style.width = "auto";
    }
})