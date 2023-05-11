gsap.registerPlugin(ScrollTrigger)

const mm = gsap.matchMedia()

mm.add('(min-width: 900px)', () => {
  // Hero section animation
  const heroTl = gsap.timeline({ defaults: { duration: 0.5 } })

  heroTl
    .from('.img', { x: -200, opacity: 0 })
    .from(".h-main", {
      duration: 0.8,
      rotationX: -90,
      stagger: 0.1,
      transformOrigin: 'bottom',
      z: -350,
      opacity: 0,
    })
    .from(".h-sub", {
      duration: 0.8,
      rotationX: -90,
      stagger: 0.1,
      transformOrigin: 'bottom',
      z: -350,
      opacity: 0,
    })
    .from('.hero__para', { x: 200, opacity: 0 })
    .to('.boltu', { duration: 0.5, opacity: 1 })
    .from('.header', {
      display: 'none',
      transform: 'scaleX(0)',
      transformOrigin: 'center',
      duration: 1,
    })
    .to('.boltu', { opacity: 0 })

  // Scroll trigger
  gsap.to('.revealing-img__box', {
    scrollTrigger: {
      trigger: '.revealing-img',
      // toggleActions: 'restart none none none',
      // markers: true,
      start: "top bottom",
      end: "top top",
      scrub: 1,
    },
    left: 0,
  })

  // Advertisement section animation
  const adTl = gsap.timeline({ default: { duration: 1 } })
  adTl.from('.advertisement__title', {
    duration: 0.8,
    rotationX: -90,
    transformOrigin: 'bottom',
    z: -350,
    opacity: 0,
  })

  gsap.from('.advertisement__img-box', {
    scrollTrigger: {
      trigger: '.advertisement__img-box',
      toggleActions: 'restart none none none',
    },
    opacity: 0,
    y: 400,
    stagger: {
      each: 0.3,
      from: 'random',
    },
  })
})
