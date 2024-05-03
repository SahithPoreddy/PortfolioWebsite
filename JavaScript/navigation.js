function Toggle() {
    const NavBarToggle = document.getElementById("buttonId")
    const List = document.getElementById("mainNav")
    NavBarToggle.children[0].classList.toggle('rotate-1')
    NavBarToggle.children[1].classList.toggle('rotate-2')
    NavBarToggle.children[2].classList.toggle('rotate-3')
    List.classList.toggle('showNav')
}