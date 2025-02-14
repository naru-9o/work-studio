function loading() {
    var tl = gsap.timeline()

tl.to("#yellow",{
    top: "-100%",
    delay: 0.5,
    duration: 0.6,
    ease: "expo.out"
})
tl.from("#yellow2",{
    top: "100%",
    delay: 0.5,
    duration: 0.6,
    ease: "expo.out"
},"anim")

tl.to("#loader h1",{
    delay: 0.6,
    duration: 0.6,
    color: "black"
},"anim")

tl.to("#loader",{
    display: "none"
})
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elems = document.querySelectorAll("#elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})


function fixing() {
  // Define base dimensions for each image-div in the three line1 divs
  const baseDimensions = [
      // First line1 div
      [
          { width: 470, height: 600 },
          { width: 470, height: 595 },
          { width: 470, height: 585 },
          { width: 470, height: 520 },
          { width: 470, height: 360 }
      ],
      // Second line1 div
      [
          { width: 470, height: 360 },
          { width: 470, height: 460 },
          { width: 470, height: 588 },
          { width: 470, height: 585 },
          { width: 470, height: 593 }
      ],
      // Third line1 div
      [
          { width: 470, height: 590 },
          { width: 470, height: 511 },
          { width: 470, height: 585 },
          { width: 470, height: 595 },
          { width: 470, height: 592 }
      ]
  ];

  // Select all line1 divs
  const lineDivs = document.querySelectorAll('.line1');

  // Get screen width
  const screenWidth = window.innerWidth;

  // Determine scale factor based on screen size
  let scaleFactor;
  if (screenWidth <= 480) {
      // Mobile screens (adjust to smaller sizes)
      scaleFactor = 0.74;
  } else if (screenWidth <= 1024) {
      // Tablets
      scaleFactor = 2;
  } else {
      // Default for larger screens
      scaleFactor = 1;
  }

  // Loop through each line1 div
  lineDivs.forEach((line, lineIndex) => {
      // Select all image-div inside the current line1 div
      const imageDivs = line.querySelectorAll('.image-div');

      // Loop through each image-div in the current line1 div and assign width/height
      imageDivs.forEach((div, divIndex) => {
          const { width, height } = baseDimensions[lineIndex][divIndex];

          // Apply the scaling factor for responsiveness
          div.style.width = `${width * scaleFactor}px`;
          div.style.height = `${height * scaleFactor}px`;
      });
  });
}

// Run the function on load and on window resize
window.addEventListener('load', fixing);
window.addEventListener('resize', fixing);

fixing();

document.querySelector("#footer, i,  h3").addEventListener("click", () => {
  scroll.scrollTo(0)
})
