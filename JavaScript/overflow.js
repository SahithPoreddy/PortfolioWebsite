function myFunction(index) {
    var dots = document.getElementsByClassName("dots");
    var moreText = document.getElementsByClassName("more");
    var btnText = document.getElementsByClassName("myBtn");

    if (dots[index].style.display === "none") {
        dots[index].style.display = "inline";
        btnText[index].innerHTML = "Read more";
        moreText[index].style.display = "none";
    } else {
        dots[index].style.display = "none";
        btnText[index].innerHTML = "Read less";
        moreText[index].style.display = "inline";
    }
}