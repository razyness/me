window.addEventListener("load", function () {
    document.getElementById("blurry-mess").style.opacity = "0";

    // Set a timeout of 200ms and dellete the blurry mess div entirely
    setTimeout(function () {
        document.getElementById("blurry-mess").remove();
    }, 200);
});
