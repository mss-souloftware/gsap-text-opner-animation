let tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:true, 
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
    bottom:"-50%",
}, 'a')
.to("#bottom-h",{
    top:"-60%",
}, 'a')
.to("#center h3",{
    marginTop:"0%",
}, 'a')