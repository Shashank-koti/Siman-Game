let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red","purple","green"]

let started = false;
let level = 0;
let score = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started")
        started = true;
    }
    levelUp();
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log("gameseq:",gameSeq);
    btnFlash(randombtn);
}

function checkAns(idx){
    // console.log(`current level ${level}`);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000 );
            console.log("userseq:",userSeq)
        }
    }else{
        h2.innerHTML = `Game over!your score is <b>${level}</b> press any key to start again `;
        document.querySelector("body").style.backgroundColor = "red";        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150);
        reset();
    }
}

function highScore(){
        if(score < gameSeq.length){
            score = gameSeq.length;
            h3.innerText = `high score is ${score}`;
        }
}


function btnpressed(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log("user:",userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpressed);
}

function reset(){
    started = false;
    highScore();
    gameSeq = [];
    userSeq = [];
    level =0;
};


