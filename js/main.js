// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Animations
// GSAP MatchMedia
let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)', // Version Smartphone
    isDesktop: '(min-width: 800px)', // Version Desktop
}, (context) => {
    let {isMobile,isDesktop} = context.conditions;

    // Section 1 : Rendre les titres Draggable

    Draggable.create(".tracks",{
        type: "x,y",
    
        onDrag: function(){
            document.querySelector('.tracks').style.width = "250px";
        },
        onDragEnd: function(){
            document.querySelector('.tracks').style.width = "50%";
        }
    })
    
})
    // Section 2 : Albums

    let tlSec2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#albumAnimationSec2',
            pin: true, 
            start: 'top 0%', 
            end: '+=1000', 
            scrub: 1, 
            pin: true,
        }
    })
    
    tlSec2.to(".album-camp", {x: 830, duration: 1, opacity: 1,})
        .to(".album-camp-deluxe", {x: 830, duration: 1, opacity: 1,})
        .to(".album-because", {x: 200, duration: 1, opacity: 1,})
        .to("album-kawai", {x: 250, duration: 1, opacity: 1,})
        .to("album-awakenemylove", {x: 300, duration: 2, opacity: 1,})
        .to("album-astavista", {x: 350, duration: 1, opacity: 1,})
        .to("album-bandostne", {x: 400, duration: 1, opacity: 1,});

 // Section 3 : Plus d'infos : lorsque nous cliquons sur l'image le paragraphe est affiché
// le QuerySelector permet de selectionner d'un côté l'image et de l'autre le paragraphe 
    const image = document.querySelector(".image-cg");
    const hiddenText = document.querySelector(".paragraph");
    let isVisible = false;
    
// La commande "IsVisible" permet de mettre "if else" dont si nous appuyons sur l'image le paragraphe sera visible sinon la paragraphe restera caché"
    image.addEventListener("click", () => {
      if (!isVisible) {
        gsap.to(hiddenText, { 
          opacity: 1, 
          maxHeight: 500, 
          duration: 0.5, 
          ease: "power2.out" 
        });
      } else {
        gsap.to(hiddenText, { 
          opacity: 0, 
          maxHeight: 0, 
          duration: 0.5, 
          ease: "power2.in" 
        });
      }
      isVisible = !isVisible;
    });

// Section 4 : Films où Donald Glover est présent : Timeline en décalage

let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
})

tl.to('.movies', {x :100, stagger : 0.1,})
.to('movies', {y :100, stagger : 0.1,})
.to('movies', {x :-100, stagger : 0.1,})
.to('movies', {x :-100, stagger : 0.1,})


    // Section 5 : Films que Donald Glover a réalisé : effet de mouvement léger

document.addEventListener('DOMContentLoaded', function () {
    gsap.to(".realisations", {
        x: 80,
        y: -10,
        rotation: 2,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });
});