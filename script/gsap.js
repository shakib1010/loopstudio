// Navigation animation
const navTL = gsap.timeline({ defaults: { duration: 1 } })

navTL
  .to(".boltu", { duration: 2, opacity: 1 })
  .from(".header", {
    display: "none",
    transform: "scaleX(0)",
    transformOrigin: "center",
    duration: 1,
  })
  .to(".boltu", { opacity: 0 })

const tl = gsap.timeline({ defaults: { duration: 1 } })

tl.from(".img", { x: -200, opacity: 0 })
  .from(".h-main", {
    duration: 0.8,
    rotationX: -90,
    stagger: 0.1,
    transformOrigin: "bottom",
    z: -350,
    opacity: 0,
  })
  .from(".h-sub", {
    duration: 0.8,
    rotationX: -90,
    stagger: 0.1,
    transformOrigin: "bottom",
    z: -350,
    opacity: 0,
  })
  .from(".hero__para", { x: 200, opacity: 0 })
