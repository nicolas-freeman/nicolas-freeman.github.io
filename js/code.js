function hide(x) {
    var element = document.getElementById(x);
    console.log(element);
    console.log(x);
    var c= x+"Container";
    console.log("c = "+c);
    var y = document.getElementById(c);
    console.log ("y = "+y);
    if (y.style.display === "block") {
        element.style.transform = "rotate(0deg)";
        y.style.display = "none";
        console.log("blocked");
    } else {
        element.style.transform = "rotate(90deg)";
        y.style.display = "block";
    }
}