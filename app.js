let taskName = document.getElementById('taskName')
let dateTime = document.getElementById('dateTime')
let desc = document.getElementById('desc')
let newdata = document.querySelector('.newDiv')
let imgs = document.querySelector('.Bdyimages')
let todolist = document.querySelector('.todolist')
let alertbox = document.querySelector('.newalertbox')
let bacimg = document.querySelector(".bac")
bacimg.style.display ='none'

let imgc  = document.querySelector(".imgcaurosal")
imgc.style.display = 'none'


let nameStyle = document.querySelector(".name-style")
nameStyle.style.display = 'none'

let newaudio = document.querySelector(".audio")

function addTask() {

    if (taskName.value != 'shreya') {
        let alert = document.createElement('div')
        alert.innerHTML = `
        <div class="alertbox">
        <div class="alert alert-danger bg-danger text-light" role="alert">
           Name not found,Enter name correctly.
          </div>
    </div>`

        alertbox.appendChild(alert)

        setTimeout(() => {
            alert.style.display = 'none'
        }, 2000)
    }
    else {
        let newTask = document.createElement('div')
        newTask.innerHTML = `
            <div class='newData'>  
                <div class='taskcontent'>
               
                <h2>Happy Birthday Mami &#128151&#128151&#128512;</h2>
               
                </div>

               
                </div>

            <div class='audio'>
            <audio controls autoplay loop>
   
            <source src="song.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio></div>
    `

    let audio = document.createElement('div')
        audio.innerHTML = `

            <div class='audio'>
            <audio controls autoplay loop>
   
            <source src="song.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio></div>
    `



        newdata.appendChild(newTask)
        newaudio.appendChild(audio)
        // setTimeout(()=>{
        //     newdata.style.display='none'
        // },2000)
        taskName.value = ''
        todolist.style.display = 'none'
        nameStyle.style.display = 'block'
        imgc.style.display = 'block'
        bacimg.style.display ='block'
       


    }



}

let play = document.getElementById('play')

function playMusic(){
    let audio = new Audio("song.mp3");
    audio.play()
}



// =============================================


const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Happy",
    "Birthday",
    "Mami",
    "Love",
    "You..!",
    // "Give",
    // "a Love",
    // ":)",
    // "by @DotOnion"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
