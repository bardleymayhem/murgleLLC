// funny thing that happens when you click tyhe logo simulator
// writteenn by ratcomputer

// <rat>
// i commented out the parts about mmaking an audio and sourfe
// because idk how th fucking point to the right directory for where
// shit is because this blasted thing is fucked and retarded
// i need to host shit on a web serever already for it to work properly with localhost:8000 or whatever
// which alreayd doesnt fucking work for some fucking reason that pisses me off loads.
// </rat>

const logo = document.getElementById("logo").firstElementChild
// const audioeysourcey = document.createElement("audio")
const audioeysourcey = document.getElementById("funnysource")
// const sourceofaudio = document.createElement("source")

let playing = false
// i love a good init funciton that basically does all the loose code thingssss
function init() {
    logo.style.cursor = "pointer"; // setting the cursor to pointer so its obvious you can click on it
    // sourceofaudio.src = "Resources/synthguitar.mp3" // *middle finger*
    

    // logo.appendChild(audioeysourcey);
    // audioeysourcey.appendChild(sourceofaudio)
    
    logo.addEventListener("click",()=>{
        if (!playing) {
            audioeysourcey.play();
            logo.parentElement.style.filter = "invert() saturate(10)"
            logo.style.filter = "invert() saturate(10)"
        } else {
            audioeysourcey.load();
            logo.parentElement.style.filter = ""
            logo.style.filter = ""
        }
        playing=!playing
        // logo.style.cursor = "default"; // for suggesting that you cant click on this anymore
    });
    audioeysourcey.addEventListener("ended",()=>{
        audioeysourcey.load();
        logo.parentElement.style.filter = ""
        logo.style.filter = ""
    });
}


init();



// <rat>
//
// TODO:    add funny effect for clicking on the screen, at the bottom of style2.css i have
//          it commented out but theres ther filtrer id like to use for the funey effect
//          which will mostl likely be flashing of that filter maybe varied in some ways
//          and only triggers when onClickington() to signify an songgf being playied!!!!
//
//
//          yes
//
//
//
//
//          the riff is sooooo powerful that it glitched the webs ite and made things brokey or some funny thing lol
//          we want mark to think he phone brokey hahjahahah
//
//
//
//
//          myes.
//
// </rat>