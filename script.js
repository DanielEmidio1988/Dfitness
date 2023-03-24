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
