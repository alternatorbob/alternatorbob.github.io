//button logic
const currentPage = document.querySelector("body").id;
let sections = [];
let currentSectionIndex = 0;

if (currentPage != "-1") {
  insertHeader();
  insertFooter();
  buttonsInit();

  sectionsInit();
  if (currentPage != "0") {
    // sectionsDisplay();
  }
}

function sectionsInit() {
  const leftCol = Array.from(
    document.querySelectorAll(".left-column .section")
  );
  const rightCol = Array.from(
    document.querySelectorAll(".right-column .section")
  );

  leftCol.forEach((leftElem, index) => {
    const rightElem = rightCol[index];
    sections.push({ leftElem: leftElem, rightElem: rightElem });
  });
}

function buttonsInit() {
  //if index == sections number then go to next page, else advance section
  const prevButton = document.querySelector("#previous-button");
  const nextButton = document.querySelector("#next-button");

  prevButton.addEventListener("click", function () {
    console.log(currentSectionIndex);

    if (currentPage == "0") {
      window.location.href = "section_6.html";
    } else if (
      currentSectionIndex > 0 &&
      currentSectionIndex < sections.length
    ) {
      currentSectionIndex--;
      updateDisplay();
    } else if (currentPage == "1") {
      window.location.href = "contents.html";
    } else {
      window.location.href = `section_${parseInt(currentPage) - 1}.html`;
    }
  });

  nextButton.addEventListener("click", function (e) {
    if (currentPage === "0") {
      window.location.href = "section_1.html";
    } else if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      updateDisplay();
    } else if (
      currentPage == "6" &&
      currentSectionIndex == sections.length - 1
    ) {
      window.location.href = "contents.html";
    } else {
      window.location.href = `section_${parseInt(currentPage) + 1}.html`;
    }
  });
}

function updateDisplay() {
  console.log(currentSectionIndex);
  sections.forEach((elem, index) => {
    console.log(elem, index);
    if (index !== currentSectionIndex) {
      elem.leftElem.style.display = "none";
      elem.rightElem.style.display = "none";
    } else {
      elem.leftElem.style.display = "flex";
      elem.rightElem.style.display = "flex";
    }
  });
}

function insertHeader() {
  const myHeader = document.querySelector(".header");
  myHeader.innerHTML += ` 
  <!-- prettier-ignore -->
  <div class="menu text-s grotesk-medium">
      <a href="section_1.html" id="1"><span >What is a website</span></a>
      <a href="section_2.html" id="2"><span >Curatorial Platforms</span></a>
      <a href="section_3.html" id="3"><span >Mobile First</span></a>
      <a href="section_4.html" id="4"><span >Game Dev Influence</span></a>
      <a href="section_5.html" id="5"><span >In Browser Software</span></a>
      <a href="section_6.html" id="6"><span >Digital Sustainability</span></a>
  </div>`;
}

function insertFooter() {
  const body = document.querySelector("body");
  const nav = document.createElement("div");
  nav.classList.add("navigation", "text-s");
  body.appendChild(nav);
  nav.innerHTML = ` 
  <a href="../index.html" id="home"><button>home</button></a>
  <button id="previous-button">previous</button>
  <button id="next-button">next</button>`;
}
