const headerContainer = document.getElementById("header-container");
const btnAnimate = document.querySelector(".animate-button-this");
const profileEl = document.querySelectorAll("[data-inview-profile]");
const shrtIntroEl = document.querySelectorAll("[data-inview-introduce]");
const navbarMenu = document.querySelectorAll("[data-menu-animate]");
const svgInfiniteLine = document.querySelector("[data-animate-path]");
const aboutElements = document.querySelector(".about-me");
const buttonAccord = document.querySelectorAll(".accordion-button");
const blurredEl = document.querySelectorAll(".me-soft-skills-item");

console.log(blurredEl);

VANTA.WAVES({
  el: headerContainer,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x1
});

// buttonAccord.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let expans = btn.getAttribute("aria-expanded");
//     let isExpans = expans === "true" ? true : false;

//     buttonAccord.forEach((bb) => {
//       let t = bb.getAttribute("aria-expanded") === "true" ? true : false;
//       if (!t) anime({ targets: bb.children[0], rotate: 0 });
//     });

//     return isExpans
//       ? anime({
//           targets: btn.children[0],
//           rotate: 45
//         })
//       : anime({
//           targets: btn.children[0],
//           rotate: 0
//         });
//   });
// });

// animte all button on the entire pages
function hoverButtonEl(element) {
  element.addEventListener("mouseover", (e) => {
    anime({
      targets: element,
      filter: "blur(5px)"
    });
  });

  element.addEventListener("mouseleave", (e) => {
    console.log("out");
    anime({
      targets: element,
      filter: "blur(0)"
    });
  });
}

blurredEl.forEach((blr) => {
  hoverButtonEl(blr);
});

// observe and animate

function choosingOptionAnimate(animateModel, el) {
  const defaultOption = {
    targets: el,
    opacity: 1,
    easing: "easeInOutQuad",
    delay: function (el, i, l) {
      return i * 200;
    }
  };

  const hashAnimateOption = {
    PROFILE_INVIEW: { ...defaultOption, translateX: -20 },
    SHORT_INTRODUCE: { ...defaultOption, translateY: -30 },
    NAVBAR_MENU: {
      ...defaultOption,
      translateY: 10,
      delay: function (el, i, l) {
        return i * 300;
      }
    },
    SVG_TIMELINE: {
      ...defaultOption,
      targets: ".animate-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: 1000
    }
  };

  const option = hashAnimateOption[animateModel];

  return anime(option);
}

function observreAndAnimate(elements, animateModel, shouldAnimateChildren) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shouldAnimateChildren
            ? choosingOptionAnimate(animateModel, entry.target.children)
            : choosingOptionAnimate(animateModel, entry);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    }
  );

  observer.observe(elements);
}

observreAndAnimate(svgInfiniteLine, "SVG_TIMELINE", false);
observreAndAnimate(aboutElements, "SHORT_INTRODUCE", true);

// observreAndAnimate(aboutElements, "PROFILE_INVIEW");
choosingOptionAnimate("PROFILE_INVIEW", profileEl);
choosingOptionAnimate("SHORT_INTRODUCE", shrtIntroEl);
choosingOptionAnimate("NAVBAR_MENU", navbarMenu);
