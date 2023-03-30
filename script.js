const trains = [{
    title: "CROSS",
    subtitle: "TRAINING",
    img: "cross.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque."
},{
    title: "PERSONAL",
    subtitle: "TRAINING",
    img: "personal.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque."
},{
    title: "FIGHT",
    subtitle: "TRAINING",
    img: "fight.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque."
},
]

function ToggleMenu() {
    let menuHamburguerClose = document.getElementsByClassName("options-menu-close")[0];
    let menuHamburguerOpen = document.getElementsByClassName("options-menu-open")[0];

    if (menuHamburguerClose !== undefined) {
        menuHamburguerClose.classList.remove("options-menu-close");
        menuHamburguerClose.classList.add("options-menu-open");

    } else if(menuHamburguerOpen !== undefined) {
        menuHamburguerOpen.classList.remove("options-menu-open");
        menuHamburguerOpen.classList.add("options-menu-close");
    }
}

function browserTrain (){
    const section = document.querySelector(".training-box")

    trains.forEach((train)=>{
        const card = document.createElement("div")
        card.classList.add("card-training")
        card.innerHTML = `
        <img src="./assets/${train.img}" alt="${train.title}-logo">
        <h3>${train.title}</h3>
        <h3>${train.subtitle}</h3>
        <p>${train.description}</p>
        `
        section.appendChild(card)
    })
  
}

window.onload = function() {
    browserTrain();
  };