// Register ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

// Navbar Animation

gsap.from(".navbar",{
    y:-100,
    opacity:0,
    duration:1
});

// Hero Animations

gsap.from(".hero-content h1",{
    x:-150,
    opacity:0,
    duration:1.2
});

gsap.from(".hero-content p",{
    x:150,
    opacity:0,
    duration:1.2,
    delay:0.3
});

gsap.from(".hero-buttons",{
    y:80,
    opacity:0,
    duration:1,
    delay:0.6
});

// About Cards

gsap.from(".about-card",{
    scrollTrigger:{
        trigger:".about",
        start:"top 75%"
    },
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3
});

// Services Cards

gsap.from(".service-card",{
    scrollTrigger:{
        trigger:".services",
        start:"top 75%"
    },
    y:120,
    opacity:0,
    duration:1,
    stagger:0.3
});

// Stats Animation

gsap.from(".counter-box",{
    scrollTrigger:{
        trigger:".stats",
        start:"top 80%"
    },
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.2
});

// Contact Animation

gsap.from(".contact-form",{
    scrollTrigger:{
        trigger:".contact",
        start:"top 80%"
    },
    y:100,
    opacity:0,
    duration:1
});

// Footer Animation

gsap.from("footer",{
    scrollTrigger:{
        trigger:"footer",
        start:"top 90%"
    },
    opacity:0,
    duration:1.5
});

// Counter Effect

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const updateCounter = () => {

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;
        }
    };

    ScrollTrigger.create({
        trigger: counter,
        start:"top 90%",
        once:true,
        onEnter:updateCounter
    });

});

// Contact Form

const form =
document.querySelector(".contact-form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    form.reset();

});

// Button Hover Animation

document.querySelectorAll(".btn")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        gsap.to(btn,{
            scale:1.1,
            duration:0.3
        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{
            scale:1,
            duration:0.3
        });

    });

});