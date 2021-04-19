const keys = "ASDFGHJWETYU"
document.addEventListener("keydown", function (event){
    const key = event.key.toUpperCase()
    if (keys.includes(key))
        new Audio(`media/${key}.mp3`).play();
})







