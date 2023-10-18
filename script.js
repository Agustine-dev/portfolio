let theme = localStorage.getItem("theme");



if(theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', (el) => {
        let mode = el.target.dataset.mode;
        console.log('Theme Option Clicked:',mode)
        setTheme(mode)
    })    
}

function setTheme(mode) {
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'style.css'
        localStorage.setItem("theme", mode)
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
        localStorage.setItem("theme", mode)
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
        localStorage.setItem("theme", mode)
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
        localStorage.setItem("theme", mode)
    }
}

const month = (x) => new Date(x).toLocaleString("en-US", { month: "long", year: "numeric" });
const day = (x) => new Date(x).toDateString();

const projects = [
    {
      name: "To-do List",
      code: "https://github.com",
      live: "https://live.com",
      lastUpdate: day(Date.now()),
      descriptive: "This app was built with lovebuilt with lovebuilt with lovebuilt with lovebuilt with lovebuilt with lovebuilt with lovebuilt with love",
      industry: 'Design',
      industColor: 'text-green'
    },
    {
      name: "Ecommerce App",
      code: "https://github.com",
      live: "https://live.com",
      lastUpdate: day(Date.now()),
      descriptive: "This app was built with love",
      industry: 'Retail',
      industColor: 'text-info'
    },
    {
      name: "Foodie Restraunt",
      code: "https://github.com",
      live: "https://live.com",
      lastUpdate: day(Date.now()),
      descriptive: "This app was built with love",
      industry: 'Consumer Staples',
      industColor: 'text-success'
    },
    {
      name: "HomeOwn RealEstate",
      code: "https://github.com",
      live: "https://live.com",
      descriptive: "This app was built with love",
      industry: 'Real Estate',
      industColor: 'text-danger'
    },
    {
      name: "MusicX Player",
      code: "https://github.com",
      live: "https://live.com",
      lastUpdate: day(Date.now()),
      descriptive: "This app was built with lovebuilt with lovebuilt with lovebuilt with lovebuilt with lovebuilt with lovebuilt with love",
      industry: 'EntertainMent',
      industColor: 'text-warning'
    },
    {
      name: "WeatherMan",
      code: "https://github.com",
      live: "https://live.com",
      lastUpdate: day(Date.now()),
      descriptive: "This app was built with love built with lovebuilt with lovebuilt with lovebuilt with lovebuilt with lovebuilt with love ",
      industry: 'Enviroment',
      industColor: 'text-info'
    },
    {
      name: "DelivFast",
      code: "https://github.com",
      live: "https://live.com",
      lastUpdate: day(Date.now()),
      descriptive: "This app was built with love",
      industry: 'Consumer Discretionary',
      industColor: 'text-danger'
    },
  ];

const projectCards = document.getElementById("projects")

projects.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("col-md-6");
    card.classList.add("p-card")
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
            <a href=${proj.live} class="btn btn-warning w-50 m-1" style="color:black;">
                Live Demo
            </a>
            <a href=${proj.code} class="btn w-50 m-1" style="background-color:black; color:var(--main-color);" target="_blank">
                Contribute
            </a>
            </div>
            </div>
            <div class="col-auto d-none">Contribute</div>
            </div>`
    projectCards.appendChild(card)
})

