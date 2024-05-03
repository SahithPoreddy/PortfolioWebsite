function Event(offset) {
    const slides = document.getElementsByClassName("carousel-slide")
    let index = 0
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("data-active")) {
            index = i
        }
    }
    let newIndex = index + offset
    if (newIndex < 0) newIndex = slides.length - 1
    if (newIndex >= slides.length) newIndex = 0
    slides[index].classList.remove("data-active")
    slides[newIndex].classList.add("data-active")
}