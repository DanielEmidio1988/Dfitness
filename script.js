const gyms = [{
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

const depoiments = [{
    name: "FULANO",
    depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic reiciendis aperiam nobis minima alias?"
},{
    name: "CICRANO",
    depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic reiciendis aperiam nobis minima alias?"
},{
    name: "BELTRANO",
    depoiment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, hic reiciendis aperiam nobis minima alias?"
},]

const photos = [{
    img: "photo1.png"
},{
    img: "photo2.png"
},{
    img: "photo3.png"
},{
    img: "photo1.png"
},{
    img: "photo2.png"
},{
    img: "photo3.png"
},{
    img: "photo1.png"
},{
    img: "photo2.png"
}]


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

function browserGym (){
    const section = document.querySelector(".training-box")

    gyms.forEach((gym)=>{
        const card = document.createElement("div")
        card.classList.add("card-training")
        card.innerHTML = `
        <img src="./assets/${gym.img}" alt="${gym.title}-logo">
        <h3>${gym.title}</h3>
        <h3>${gym.subtitle}</h3>
        <p>${gym.description}</p>
        `
        section.appendChild(card)
    }) 
}

function browserDepoiment(){
    const section = document.querySelector(".students-box")

    depoiments.forEach((depoiment)=>{
        const card = document.createElement("div")
        card.classList.add("card-student")
        card.innerHTML = `
        <h3>${depoiment.name}</h3>
        <br>
        <p>${depoiment.depoiment}</p>`
        section.appendChild(card)
    })
}

function browserPhotoAlbum(){
    const section = document.querySelector(".photo-album-box")
    photos.forEach((photo)=>{
        const card = document.createElement("div")
        card.classList.add("card-photo")
        card.innerHTML = `
        <img src="./assets/${photo.img}" alt="photo-album">`
        section.appendChild(card)
    })
}

window.onload = function() {
    browserGym();
    browserDepoiment();
    browserPhotoAlbum();
  };