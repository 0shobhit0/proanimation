const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl = gsap.timeline()

tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.7,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top:"100%",
    delay:0.6,
    duration:0.7,
    ease:"expo.out"
},"anim")
tl.to("#loder h1",{
    delay:0.6,
    duration:0.7,
    color:"black"
},"anim")
tl.to("#loder",{
    opacity:0
})
tl.to("#loder",{
    display:"none"
})