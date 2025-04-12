// ----------Scramble------------
$(document).ready(function () {
  // ELEMENTS
  var $scramble = $(".scramble");

  $scramble.scramble(3000, 20, "alphabet", true);
});

// ----------scrambleEnd--------------

var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".svgwaala",
    {
      opacity: 1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )

  .from(
    "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  );

var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    tl2
      .to(
        "#kothik-k",
        {
          left: "-15%",
          top: "-15%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-o",
        {
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-t",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-h",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-i",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-k2",
        {
          left: "-15%",
          top: "80%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#donut", {
        width: "80vw",
        top: "-10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".svgwaala", {
        opacity: 0,
      });
  });
});



// Script code for page
// ----------Scramble------------
$(document).ready(function () {
  // ELEMENTS
  var $scramble = $(".scramble");

  $scramble.scramble(3000, 20, "alphabet", true);
});

// ----------scrambleEnd--------------

var t3 = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".svgwaala",
    {
      opacity: 1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )

  .from(
    "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
    {
      opacity: 0,
      duration: 1,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  );

var t4 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    tl2
      .to(
        "#kothik-k",
        {
          left: "-15%",
          top: "-15%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-o",
        {
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-t",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-h",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-i",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#kothik-k2",
        {
          left: "-15%",
          top: "80%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#donut", {
        width: "80vw",
        top: "-10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".svgwaala", {
        opacity: 0,
      });
  });
});

function example() {
  window.location.href = "/listings";
}

// video 3 --------------

var tl7 = gsap.timeline();
tl7.from(
  ".main-abhishek",
  {
    opacity: "0",
    ease: "expo.inout",
    duration: 1,
  },
  "anim3"
);
tl7
  .from(
    ".front-page-img",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  )
  .from(
    "#line-effect-3",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  )
  .from(
    "#line-effect-1",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 2,
    },
    "anim1"
  )
  .from(
    "#line-effect-2",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )
  .from(
    ".img-one",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit",
    {
      width: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit-2",
    {
      height: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".main-txt-front",
    {
      opacity: 0,
      ease: "expo.inout",
      delay: -0.5,
      duration: 1,
    },
    "anim2"
  )
  .from(
    "#circle",
    {
      opacity: 0,
      ease: "expo.inout",
      duration: 2,
    },
    "anim2"
  )
  .from(
    "#nav",
    {
      top: -50,
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  );

document
  .querySelector("#cntr-nav .ri-menu-line") //for menu line
  .addEventListener("click", function () {
    document.querySelector(".upar-menu").style.top = "0%";
    document.querySelector(".upar-menu .ri-close-fill").style.display =
      "initial";
    document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
  });

document
  .querySelector(".upar-menu .ri-close-fill")
  .addEventListener("click", function () {
    document.querySelector(".upar-menu").style.top = "-100%";
    document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
    document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
  });

document.querySelector("#abhishek").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "0%";
  document.querySelector("#abhishek").style.cursor = "pointer";
});
document.querySelector("#amarjeet").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
  document.querySelector("#amarjeet").style.cursor = "pointer";
});
document.querySelector("#rk").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
  document.querySelector("#rk").style.cursor = "pointer";
});
document.querySelector("#ak").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
  document.querySelector("#ak").style.cursor = "pointer";
});