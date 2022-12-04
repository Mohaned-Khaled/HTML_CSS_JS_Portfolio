import imgs1 from '../imgs/1.jpg';
import imgs2 from '../imgs/2.jpg';
import imgs3 from '../imgs/3.jpg';
import imgs4 from '../imgs/4.jpg';
import imgs5 from '../imgs/5.jpg';
import imgs6 from '../imgs/06.png';
import imgs7 from '../imgs/07.jpg';
import imgs8 from '../imgs/08.jpg';
import imgs9 from '../imgs/09.jpg';
import imgs10 from '../imgs/10.jpg';

//Variables
const mainColor = localStorage.getItem('colorOption');
const bulletLocalItem = localStorage.getItem('bulletsOption');
const backgroundLocalStorage = localStorage.getItem('backgroundOption');
const optionboxDep = document.querySelector('.option-box-dep');
const settingBox = document.querySelector('.setting-box');
const gearing = document.querySelector('.icon-gearing');
const colorContainer = document.querySelector('.colors-list');
const colorsList = document.querySelectorAll('.colors-list li');
const changeBackgroundPoll = document.querySelector('.poll-background');
let backgroundOption = true;
let intervalSetting;
const landingPage = document.querySelector('.landing-page');
const imgsToChooseContainer = document.querySelector(
  '.option-box .imgs-container'
);
const landingImages = [
  `${imgs1}`,
  `${imgs2}`,
  `${imgs3}`,
  `${imgs4}`,
  `${imgs5}`,
];
const ourSkills = document.querySelector('.skills');
const allSkills = document.querySelectorAll(
  '.skills .skill-box .skill-progress span'
);
const galleryAllImgs = document.querySelectorAll('.gallery .images-box img');
const allBullets = document.querySelector('.nav-bullets');
const allBulletsLanding = document.querySelector(
  '.landing-page .header-area ul'
);
const showBullets = document.querySelector('.option-box .testing-option');
const showBulletsAll = document.querySelectorAll(
  '.option-box .testing-option span'
);

// to chamge background manually
const imagesMan = function () {
  optionboxDep.classList.add('active');
  imgsToChooseContainer
    .querySelectorAll('span')
    .forEach((span, i) => span.setAttribute('data-man', `${landingImages[i]}`));

  imgsToChooseContainer.addEventListener('click', function (e) {
    if (
      !e.target.closest('span') ||
      changeBackgroundPoll.querySelector('.yes').classList.contains('active')
    )
      return;

    landingPage.style.backgroundImage = `url("${e.target.dataset.man}")`;
  });
};

// Start Setting Box

const localStorageAndActiveForColor = function () {
  // get the color from the local storage and maintain active class
  if (!mainColor) return;
  document.documentElement.style.setProperty('--mainColorTwo', mainColor);

  colorContainer.querySelector('.active').classList.remove('active');
  colorsList.forEach(el => {
    if (el.dataset.color === mainColor) el.classList.add('active');
  });
};
localStorageAndActiveForColor();

const localStorageAndActiveForBackground = function () {
  // get the background from the local storage and maintain active class
  if (!backgroundLocalStorage) return;
  changeBackgroundPoll
    .querySelectorAll('span')
    .forEach(span => span.classList.remove('active'));

  if (backgroundLocalStorage === 'true') {
    optionboxDep.classList.remove('active');
    backgroundOption = true;

    changeBackgroundPoll.querySelector('.yes').classList.add('active');
  } else {
    optionboxDep.classList.add('active');
    backgroundOption = false;
    changeBackgroundPoll.querySelector('.no').classList.add('active');
    imagesMan();
  }
};
localStorageAndActiveForBackground();

const localBullet = function () {
  if (!bulletLocalItem) return;
  showBulletsAll.forEach(a => a.classList.remove('active'));
  if (bulletLocalItem === 'show') {
    allBullets.style.display = 'grid';
    showBullets.querySelector('.yes').classList.add('active');
  } else {
    allBullets.style.display = 'none';
    showBullets.querySelector('.no').classList.add('active');
    showBullets;
  }
};
localBullet();

const gearingSpin = function () {
  gearing.addEventListener('click', function (e) {
    this.querySelector('i').classList.toggle('fa-spin');
    this.classList.toggle('active-icon');
    settingBox.classList.toggle('view--setting-box');
  });
};
gearingSpin();

//Change Color
const mainColorChanging = function () {
  colorsList.forEach(li => {
    li.addEventListener('click', function (e) {
      const getTheColor = e.target.dataset.color;
      document.documentElement.style.setProperty('--mainColorTwo', getTheColor);

      // set the color to the local storage
      localStorage.setItem('colorOption', getTheColor);

      //Remove active class from all
      this.parentElement
        .querySelectorAll('.active')
        .forEach(li => li.classList.remove('active'));

      //add active class
      this.classList.add('active');
    });
  });
};
mainColorChanging();

//bullets option

//Change Random background option

const backgroundchanging = function () {
  changeBackgroundPoll.addEventListener('click', function (e) {
    if (!e.target.closest('span')) return;
    changeBackgroundPoll
      .querySelectorAll('span')
      .forEach(span => span.classList.remove('active'));

    e.target.classList.add('active');

    if (e.target.dataset.background === 'yes') {
      optionboxDep.classList.remove('active');
      backgroundOption = true;
      randomizeImgs();

      localStorage.setItem('backgroundOption', true);
    } else {
      clearInterval(intervalSetting);
      imagesMan();
      backgroundOption = false;
      localStorage.setItem('backgroundOption', false);
    }
  });
};
backgroundchanging();

showBullets.addEventListener('click', function (e) {
  if (!e.target.dataset.display) return;
  showBulletsAll.forEach(span => span.classList.remove('active'));
  if (e.target.dataset.display === 'show') {
    allBullets.style.display = 'grid';
    e.target.classList.add('active');
    localStorage.setItem('bulletsOption', 'show');
  } else {
    allBullets.style.display = 'none';
    e.target.classList.add('active');
    localStorage.setItem('bulletsOption', 'hide');
  }
});
// End Setting Box

//////////////////////////////

// Start Landing Page

const randomizeImgs = function () {
  if (!backgroundOption) return;

  intervalSetting = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * landingImages.length);
    landingPage.style.backgroundImage = `url("${landingImages[randomNumber]}")`;
  }, 10000);
};
randomizeImgs();

// End Landing Page

// Start Skills Selector

const progressWithinScrolling = function () {
  window.addEventListener('scroll', function () {
    //Offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    //offset Hieght
    let skillsOffsetHeight = ourSkills.offsetHeight;

    //Window height
    let windowHeight = window.innerHeight;

    //Window Scroll top
    let windowScrollTop = window.pageYOffset;

    if (windowScrollTop > skillsOffsetTop + skillsOffsetHeight - windowHeight) {
      allSkills.forEach(span => {
        span.style.width = span.dataset.progress;
      });
    }
  });
};
progressWithinScrolling();
// End Skills Selector

// Start Gallery

galleryAllImgs.forEach(img => {
  img.addEventListener('click', function (e) {
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.append(overlay);

    const popupBox = document.createElement('div');
    popupBox.classList.add('popup-box');

    const popupImage = document.createElement('img');
    popupImage.src = img.src;

    popupBox.append(popupImage);
    document.body.append(popupBox);

    // Image title
    if (img.alt) {
      const imgHeading = document.createElement('h3');
      imgHeading.classList.add('popup-img');
      imgHeading.textContent = img.alt;
      popupBox.prepend(imgHeading);
    }

    // Create Close button
    const closeButton = document.createElement('span');
    closeButton.textContent = 'X';
    closeButton.classList.add('popup-close');
    popupBox.prepend(closeButton);

    closeButton.addEventListener('click', function () {
      overlay.remove();
      popupBox.remove();
    });

    //Close using overlay
    overlay.addEventListener('click', function () {
      overlay.remove();
      popupBox.remove();
    });
  });
});

// End Gallery

// Start bullets

const allBulletsLandingLinking = document.querySelectorAll(
  '.landing-page .header-area ul a'
);
scrollWithButtons = function (btnContainer, specialEle) {
  btnContainer.addEventListener('click', function (e) {
    e.preventDefault();
    if (!e.target.classList.contains(specialEle)) return;
    document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
      behavior: 'smooth',
    });

    if (!e.target.classList.contains('scrolling')) return;
    // Handle active
    allBulletsLandingLinking.forEach(a => {
      a.classList.remove('active-link');
    });
    e.target.classList.add('active-link');
  });
};

scrollWithButtons(allBullets, 'bullet');
scrollWithButtons(allBulletsLanding, 'scrolling');

//End bullets

//Reset button

document
  .querySelector('.setting-box .reset-option')
  .addEventListener('click', function (e) {
    localStorage.clear();

    window.location.reload(); // to restart the page
  });

// Toggle menu
const togglebtn = document.querySelector('.landing-page .button-toggle');
const linksContainer = document.querySelector('.landing-page .header-area ul');

// open and close the toggle menu
togglebtn.addEventListener('click', function () {
  linksContainer.classList.toggle('links-click');

  this.classList.toggle('menu-active');
});

// click outside will close the toggle menu
document.addEventListener('click', function (e) {
  if (
    e.target.closest('.button-toggle') ||
    e.target.closest('.links-click') ||
    !linksContainer.classList.contains('links-click')
  )
    return;
  console.log('all');
  linksContainer.classList.remove('links-click');
  togglebtn.classList.remove('menu-active');
});
