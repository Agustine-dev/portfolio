let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", (el) => {
    let mode = el.target.dataset.mode;
    console.log("Theme Option Clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "style.css";
    localStorage.setItem("theme", mode);
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
    localStorage.setItem("theme", mode);
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
    localStorage.setItem("theme", mode);
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
    localStorage.setItem("theme", mode);
  }
}

const month = (x) =>
  new Date(x).toLocaleString("en-US", { month: "long", year: "numeric" });
const day = (x) => new Date(x).toDateString();

const projects = [
  {
    name: "To-do List",
    code: "https://github.com",
    live: true,
    lastUpdate: day(Date.now()),
    descriptive: "Simple, Efficient to-do list application. Organize most of life with this app",
    industry: "Design",
    industColor: "text-success",
  },
  {
    name: "Ecommerce App",
    code: "https://github.com",
    live: true,
    lastUpdate: day(Date.now()),
    descriptive: "An app that provides insights on customer behaviour and experience. Effectively reach, engage shoppers while making profits.",
    industry: "Retail",
    industColor: "text-info",
  },
  {
    name: "Foodie Cafe and Restraunt",
    code: "https://github.com",
    live: false,
    lastUpdate: day(Date.now()),
    descriptive: "Get the menu from your favorite restraunt. Order food and drinks to your comfort zone.",
    industry: "Consumer Staples",
    industColor: "text-success",
  },
  {
    name: "HomeOwn RealEstate",
    code: "https://github.com",
    live: false,
    descriptive: "Find a home that you will love. Browse neighborhoods that will inspire",
    industry: "Real Estate",
    industColor: "text-danger",
  },
  {
    name: "MusicX Player",
    code: "https://github.com",
    live: false,
    lastUpdate: day(Date.now()),
    descriptive:
      "This app was built with love",
    industry: "EntertainMent",
    industColor: "text-warning",
  },
  {
    name: "WeatherMan",
    code: "https://github.com",
    live: true,
    lastUpdate: day(Date.now()),
    descriptive:
      "Get weather updates from your favorite and residential cities",
    industry: "Enviroment",
    industColor: "text-info",
  },
  {
    name: "DelivFast",
    code: "https://github.com",
    live: true,
    lastUpdate: day(Date.now()),
    descriptive: "This app was built with love",
    industry: "Consumer Discretionary",
    industColor: "text-danger",
  },
];

const projectCards = document.getElementById("projects");

projects.forEach((proj) => {
  const card = document.createElement("div");
  card.classList.add("col-md-6");
  card.classList.add("p-card");
  if (proj.live) {
    card.innerHTML = `
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static full-cont">
            <strong class="d-inline-block mb-2 ${proj.industColor}">
                      ${proj.industry}
            </strong>
            <h3 class="mb-0">${proj.name}</h3>
            <div class="mb-1 text-muted">
                Last Updated ${proj.lastUpdate}
            </div>
            <p class="card-text mb-auto">
                ${proj.descriptive}
            </p>
            <div class="links fw-bold">
            <a href="${proj.live}" class="btn btn-warning w-50 m-1" style="color:black;">
                Live Demo
            </a>
            </div>
            </div>
    </div>`;

  } else {
    card.innerHTML = `
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static full-cont">
            <strong class="d-inline-block mb-2 ${proj.industColor}">
                      ${proj.industry}
            </strong>
            <h3 class="mb-0">${proj.name}</h3>
            <div class="mb-1 text-muted">
                Last Updated ${proj.lastUpdate}
            </div>
            <p class="card-text mb-auto">
                ${proj.descriptive}
            </p>
            <div class="links fw-bold">
            <a href="${proj.live}" class="btn btn-warning w-50 m-1" style="color:black;">
                Live Demo
            </a>
            <a href="#" class="btn w-50 m-1" style="background-color:black; color:var(--main-color); cursor:pointer;" target="_blank">
                Contribute
            </a>
            </div>
            </div>
            <div class="col-auto d-none">Contribute</div>
    </div>`;

  }
  projectCards.appendChild(card);
});

const techStacks = [
  {
    id: 1,
    name: "Angular",
    path: "https://img.icons8.com/badges/100/angularjs.png", 
    alt:"external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo"
  },
  {
    id: 1,
    name: "React",
    path: "https://img.icons8.com/nolan/100/react-native.png", 
    alt:"external-react-a-javascript-library-for-building-user-interfaces-logo-duo-tal-revivo",
  },
  {
    id: 3,
    name: "Next",
    path: "https://img.icons8.com/fluency/100/nextjs.png", 
    alt:"nextjs",
  },
  {
    id: 4,
    name: "Flask",
    path: "https://img.icons8.com/ios-filled/150/flask.png" ,
    alt:"flask",
  },
  {
    id: 5,
    name: "Vanilla JS",
    path: "https://img.icons8.com/color/96/javascript--v1.png",
    alt:"javascript--v1"
  },
  {
    id: 6,
    name: "Django",
    path: "https://img.icons8.com/ios/150/django.png",
    alt:"django",
  },
];

const techs = document.getElementById("techs");

techStacks.forEach((tech) => {
  const card = document.createElement("div");
  card.classList.add("col-md-3");
  card.classList.add("card");
  card.classList.add("m-1");
  card.classList.add("bg-transparent");
  card.classList.add("border-0");
  card.innerHTML = `
  <div class="card-body">
  <img src="${tech.path}" class="card-img" alt=${tech.alt} />
  <p class="text-center">${tech.name}</p>
  </div>
  `;
  // card.classList.add("p-ca")
  techs.append(card);
});
