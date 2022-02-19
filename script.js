var modeBtn = document.getElementById("modeBtn")
var light = document.getElementById("light")
var cover = document.getElementById("picture")



modeBtn.addEventListener("click",
    function darko()
    {
        cover.classList.toggle("coverD")
        modeBtn.classList.toggle("light")
        document.body.classList.toggle('bodyLight')
    }
)  

    