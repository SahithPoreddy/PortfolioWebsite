const animationOne = document.getElementsByClassName("animationOne")
const animationTwo = document.getElementsByClassName("animationTwo")

const observerOne = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollAnimationOne')
        }
    })
},
    {
        threshold: 0.5
    });

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollAnimationTwo')
        }
    })
},
    {
        threshold: 0
    });

for (let i = 0; i < animationOne.length; i++) {
    const elements = animationOne[i];
    observerOne.observe(elements);
}

for (let i = 0; i < animationTwo.length; i++) {
    const elements = animationTwo[i];
    observerTwo.observe(elements);
} 
