

// start Java Script //

const text = "ROYAL  FOOD"; 
let index = 0;
const speed = 100;

function typing() {
  if (index < text.length) {
    let char = text.charAt(index);

   
    if (index < 7) {
      document.getElementById("typing").innerHTML += `<span class="ro1">${char}</span>`;
    } else {
      document.getElementById("typing").innerHTML += `<span class="fo1">${char}</span>`;
    }

    index++;
    setTimeout(typing, speed);
  } else {
    setTimeout(() => {
      index = 0;
      document.getElementById("typing").innerHTML = '';
      typing();
    }, 2000);
  }
}




typing();
  



  const text1 = "ROYAL  FOOD"; 
  let index1 = 0;
  const speeds = 100;

  function typing1() {
    if (index1 < text1.length) {
      let char = text1.charAt(index1);

     
      if (index1 < 7) {
        document.getElementById("typing1").innerHTML += `<span class="ROYAL">${char}</span>`;
      } else {
        document.getElementById("typing1").innerHTML += `<span class="FOOD">${char}</span>`;
      }

      index1++;
      setTimeout(typing1, speeds);
    } else {
      setTimeout(() => {
        index1 = 0;
        document.getElementById("typing1").innerHTML = '';
        typing1();
      }, 2000);
    }
  }

  typing1();





  const bar = document.getElementById('bar');
  const navbar = document.getElementById('Navbar');

  // Toggle navbar on clicking hamburger icon
  if (bar) {
    bar.addEventListener('click', () => {
      if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'flex';
      }
    });
  }

  const banners = document.querySelectorAll('#sm-banner > div');
let currentIndex = 0;

function changeBanner() {
    banners[currentIndex].style.opacity = 0; // Current banner hide karein
    currentIndex = (currentIndex + 1) % banners.length; // Next banner ka index calculate karein
    banners[currentIndex].style.opacity = 1; // Next banner show karein
}

// Har 5 seconds ke baad banner change karein
setInterval(changeBanner, 1500);


  