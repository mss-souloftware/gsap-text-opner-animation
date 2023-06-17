let tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true,
}})
tl.
to("#top",{
    top:"-50%",
}, 'a')
.to("#bottom",{
    bottom:"-50%",
}, 'a')
.to("#top-h",{
    top:"140%",
}, 'a')
.to("#bottom-h",{
    top:"-40%",
}, 'a')
.to("#center h3",{
    marginTop:"0%",
    scale:"1",
}, 'a')