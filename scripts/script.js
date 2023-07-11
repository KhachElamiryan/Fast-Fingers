let highScore = document.getElementById("high-score")
let highScore2 = document.getElementById("high-score2")
let infotext = document.getElementById("info-text")
let infotext2 = document.getElementById("info-text2")
let text = document.getElementById("text")
let text2 = document.getElementById("text2")
let scoreEl = document.getElementById("score")
let scoreEl2 = document.getElementById("score2")
let timeEl = document.getElementById("time")
let timeEl2 = document.getElementById("time2")
let finalscore = document.getElementById("final-score")
let finalscore2 = document.getElementById("final-score2")
let menu2 = document.getElementById("menu2")
let game2 = document.getElementById("game2")
let countdown2 = document.getElementById("count-down2")
let startcount2 = document.getElementById("start-count2")
let hrtir = document.getElementById("figure-jumping")
let choose = document.getElementById("choose")
let keyboard = document.getElementById("keyboard")
let startbutton2 = document.getElementById("button")
var idid
var idididid
var gameover
var gameover2
function startbutton() {
   startbutton2.style.display = "none"
   choose.style.display = "block"
}
var letterEl
function button1() {

   let falseEl;
   hrtir.style.display = "none"
   choose.style.display = "none"
   keyboard.style.display = "block"
   menu2.style.display = "block"
   if (letterEl)
      letterEl.classList.remove("selected")
   oneletter = randomletter()
   letterEl = document.getElementById(oneletter)
   letterEl.classList.add("selected")
   mySound = new Audio('assets/sounds/keyboard_sound1.m4a')
   mySound2 = new Audio('assets/sounds/wronganswer-37702.mp3')

   document.addEventListener('keydown', function (e) {
      if (falseEl) {
         setTimeout(() => falseEl.classList.remove("hit"), 50)
      }
      if (e.code == oneletter) {
         letterEl.classList.remove("selected")
         oneletter = randomletter()
         letterEl = document.getElementById(oneletter)
         letterEl.classList.add("selected")
         mySound.play()
      } else if (e.code != oneletter) {
         falseEl = document.getElementById(e.code)

         falseEl.classList.add("hit")
    
      }
   })
}


function button3() {
   choose.style.display = "none"
   menu2.style.display = "none"
   countdown2.style.display = "block"
   startcount2.style.display = "block"
   hrtir.style.display = "none"
   ididid = setInterval(function time2() {
      if (startcount2.innerHTML == 0) {
         clearInterval(ididid)
         countdown2.style.display = "none"
         startcount2.style.display = "none"
         game2.style.display = "block"
         menu2.style.display = "block"

         gamee()
      } else {
         startcount2.innerHTML = startcount2.innerHTML - 1
      }
   }, 1000)

}

function gamee() {
   let time2 = 0;
   let oneWord2;
   let score2 = 0;
   let hscore2;
   timeEl2.innerHTML = time2
   scoreEl2.innerHTML = score2
   startcount2.innerHTML = 3
   idididid = setInterval(function timee() {
      if (score2 == 10) {
         clearInterval(idididid)

         gameover2 = document.getElementById("game-over2")
         gameover2.style.display = "block"
         game2.style.display = "none"
         menu2.style.display = "none"
         finalscore2.innerHTML = timeEl2.innerHTML
      } else {
         time2++
         timeEl2.innerHTML = time2
      }
   }, 1000)

   if (!localStorage.score2) {
      localStorage.score2 = 0
   }
   hscore2 = localStorage.score2
   highScore2.innerHTML = localStorage.score2
   oneWord2 = randomWord()
   infotext2.innerHTML = oneWord2
   text2.onchange = function () {
      if (text2.value == oneWord2) {
         score2++
         timeEl2.innerHTML = time2
         if (time2 <= hscore2) {
            hscore2 = score2
            localStorage.score2 = time2
            highScore2.innerHTML = time2
         }
         scoreEl2.innerHTML = score2
         text2.value = ""
         oneWord2 = randomWord()

         infotext2.innerHTML = oneWord2
      } else {
         text2.value = ""
         oneWord2 = randomWord()
         infotext2.innerHTML = oneWord2
         time2 += 3
         timeEl2.innerHTML = time2


      }
   }
}



function menuu() {
   choose.style.display = "block"
   hrtir.style.display = "block"
   keyboard.style.display = "none"
   game.style.display = "none"
   game2.style.display = "none"
   menu2.style.display = "none"
   if (idid)
      clearInterval(idid)
   if (idididid)
      clearInterval(idididid)
}

function button2() {
   choose = document.getElementById("choose")
   choose.style.display = "none"
   hrtir = document.getElementById("figure-jumping")
   hrtir.style.display = "none"
   countdown = document.getElementById("count-down")
   countdown.style.display = "block"
   startcount = document.getElementById("start-count")
   startcount.style.display = "block"
   menu2.style.display = "none"




   let id = setInterval(function time() {
      if (startcount.innerHTML == 0) {
         clearInterval(id)
         countdown = document.getElementById("count-down")
         countdown.style.display = "none"
         startcount = document.getElementById("start-count")
         startcount.style.display = "none"
         game = document.getElementById("game")
         game.style.display = "block"
         menu2.style.display = "block"

         game1()
      } else {
         startcount.innerHTML = startcount.innerHTML - 1
      }
   }, 1000)

}

function game1() {
   let time = 10;
   let oneWord;
   let score = 0;
   let hscore;
   timeEl.innerHTML = time
   scoreEl.innerHTML = score
   startcount.innerHTML = 3
   idid = setInterval(function timee() {
      if (time <= 0) {
         clearInterval(idid)

         game = document.getElementById("game")
         gameover = document.getElementById("game-over")
         gameover.style.display = "block"
         game.style.display = "none"
         menu2.style.display = "none"
         finalscore.innerHTML = scoreEl.innerHTML
      } else {
         time--
         timeEl.innerHTML = time
      }
   }, 1000)

   if (localStorage.length == 0) {
      localStorage.score = 0
   }
   hscore = localStorage.score
   highScore.innerHTML = localStorage.score
   oneWord = randomWord()
   infotext.innerHTML = oneWord
   text.onchange = function () {
      if (text.value == oneWord) {
         score++
         time += 3
         timeEl.innerHTML = time
         if (score >= hscore) {
            hscore = score
            localStorage.score = hscore
            highScore.innerHTML = hscore
         }
         scoreEl.innerHTML = score
         text.value = ""
         oneWord = randomWord()
         infotext.innerHTML = oneWord
      } else {
         text.value = ""
         oneWord = randomWord()
         infotext.innerHTML = oneWord
         time -= 3
         if(time>=0)
         timeEl.innerHTML = time


      }
   }
}

function menu() {
   choose = document.getElementById("choose")
   choose.style.display = "block"
   hrtir = document.getElementById("figure-jumping")
   hrtir.style.display = "block"
   if (gameover) gameover.style.display = "none"
   if (gameover2) gameover2.style.display = "none"
}


function randomWord() {
   let i = Math.floor(Math.random() * words.length)
   return words[i]
}


function randomletter() {
   let j = Math.floor(Math.random() * letter.length)
   return letter[j]
}