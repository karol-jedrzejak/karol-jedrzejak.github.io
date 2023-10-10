/* --------------------------- Page Link --------------------------- */

function page($currentsectionID) {
  let sections = document.getElementsByTagName("section");
  let navMobile = document.getElementById("nav-mobile");
  let sectionsOverlay = document.getElementsByClassName(
    "section-nav-mobile-overlay"
  );

  for (section of sections) {
    if (section.id == $currentsectionID) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }

  document.getElementById("toggle").checked = false;
  navMobile.style.top = "-300px";
  for (section of sectionsOverlay) {
    section.style.zIndex = -10;
  }

  // clear all
  buttons = document.getElementsByClassName("nav-button");
  for (but of buttons) {
    but.classList.remove("active");
  }

  // opacity selected
  button = $currentsectionID.replace("section", "button");
  buttons = document.getElementsByClassName(button);
  for (but of buttons) {
    but.classList.add("active");
  }
}

/* --------------------------- Mobile Menu --------------------------- */

function moblieMenu() {
  const checkbox = document.getElementById("toggle");
  const navMobile = document.getElementById("nav-mobile");
  const sectionsOverlay = document.getElementsByClassName(
    "section-nav-mobile-overlay"
  );

  if (checkbox.checked == true) {
    navMobile.style.top = 0;
    for (section of sectionsOverlay) {
      section.style.zIndex = 10;
    }
  } else {
    navMobile.style.top = "-300px";
    for (section of sectionsOverlay) {
      section.style.zIndex = -10;
    }
  }
}

/* --------------------------- ViewHeight for mobile devices  --------------------------- */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

/* --------------------------- Change Language --------------------------- */

function LangChange($value) {
  const engElements = document.querySelectorAll('span[lang="en"]');
  const polElements = document.querySelectorAll('span[lang="pl"]');
  const flagSelects = document.getElementsByClassName("flag");

  if ($value == "en") {
    for (engElement of engElements) {
      engElement.style.display = "initial";
    }
    for (polElement of polElements) {
      polElement.style.display = "none";
    }
    for (flagsSelect of flagSelects) {
      flagsSelect.src = "public/img/pl.png";
    }
  } else {
    for (engElement of engElements) {
      engElement.style.display = "none";
    }
    for (polElement of polElements) {
      polElement.style.display = "initial";
    }
    for (flagsSelect of flagSelects) {
      flagsSelect.src = "public/img/eng.png";
    }
  }
}
