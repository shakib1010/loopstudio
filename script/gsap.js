gsap.registerPlugin(ScrollTrigger)

const mm = gsap.matchMedia()

mm.add("(min-width: 900px)", () => {
  // Hero section animation
  const heroTl = gsap.timeline({ defaults: { duration: 0.5 } })
  const hMain = new SplitType(".h-main")
  const hSub = new SplitType(".h-sub")
  const hPara = new SplitType(".hero__para")
  const adTitle = new SplitType(".advertisement__head")
  const adPara = new SplitType(".advertisement__description")

  heroTl
    .from(".img", { x: -200, opacity: 0 })
    .from(".h-main", {
      duration: 0.4,
      rotationX: -90,
      transformOrigin: "bottom",
      z: -400,
    })
    .from(
      hMain.chars,
      {
        y: 120,
        duration: 0.4,
        rotationX: -90,
        transformOrigin: "bottom",
        stagger: 0.02,
      },
      "<"
    )
    .from(".h-sub", {
      duration: 0.4,
      rotationX: -90,
      transformOrigin: "bottom",
      z: -400,
    })
    .from(
      hSub.chars,
      {
        y: 120,
        duration: 0.4,
        rotationX: -90,
        transformOrigin: "bottom",
        stagger: 0.02,
      },
      "<"
    )
    .from(hPara.lines, { y: 100, stagger: 0.05 })
    .from(".header", {
      y: -300,
      duration: 0.4,
    })

  // Scroll trigger
  gsap.to(".revealing-img-mask", {
    scrollTrigger: {
      trigger: ".revealing-img",
      start: "top bottom",
      end: "top top",
      scrub: 5,
      once: true,
    },
    width: 0,
  })

  // Advertisement section animation
  const adTl = gsap.timeline({ default: { duration: 1 } })

  gsap.from(".advertisement__img-box", {
    scrollTrigger: {
      trigger: ".advertisement__img-box",
      toggleActions: "restart none none none",
      once: true,
    },
    opacity: 0,
    y: 400,
    ease: Power3.easeInOut,
    stagger: {
      each: 0.2,
      // from: "random",
    },
  })

  gsap.from(".advertisement__head", {
    duration: 1,
    rotationX: -90,
    transformOrigin: "bottom",
    z: -400,
    scrollTrigger: {
      trigger: ".advertisement__img-box",
      toggleActions: "restart none none none",
    },
  })

  gsap.from(adTitle.chars, {
    y: 120,
    duration: 0.8,
    rotationX: -90,
    transformOrigin: "bottom",
    stagger: 0.02,
    scrollTrigger: {
      trigger: ".advertisement__img-box",
      toggleActions: "restart none none none",
    },
  })

  gsap.from(adPara.lines, {
    y: 100,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".advertisement__img-box",
      toggleActions: "restart none none none",
    },
  })
})
