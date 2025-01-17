import { Game } from "./game.js";

const canvasTetris = document.getElementById("canvas-tetris");
const canvasNext = document.getElementById("canvas-next");
const canvasHold = document.getElementById("canvas-hold");

const score = document.getElementById("score");
const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btn-start");
const gameOver = document.getElementById("gameover");

const rows = 20;
const cols = 10;
const cellsize = 26;
const space = 2;

const audio = new Audio('./sounds/tetris.ogg');
audio.volume = 0.5;
audio.loop = true;



const game = new Game(canvasTetris,rows,cols,cellsize,space,canvasNext,canvasHold);

function update(){

    if(game.gameOver){
        menu.style.display = "flex";
        gameOver.style.display = "flex";
        audio.pause();
        audio.load();
    }else if(game.start){
        game.update();
        score.innerHTML = game.score;
    }

    requestAnimationFrame(update);
}

btnMenu.addEventListener("click",()=>{
    setTimeout(()=>{
        menu.style.display = "none";
        gameOver.style.display = "none";
        game.startGame();
        audio.play();
        game.reset();
    },200)
})

update();