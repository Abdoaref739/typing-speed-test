let wordsBox = document.getElementById("words-box");
var randomWords = [
  "apple", "bear", "cat", "dog", "elephant", "frog", "goat", "horse", "igloo", "jazz",
  "kite", "lion", "monkey", "nest", "owl", "pig", "queen", "rabbit", "snake", "tiger",
  "umbrella", "van", "whale", "xylophone", "yellow", "zebra", "train", "plane", "car", "ship",
  "bike", "walk", "run", "sit", "stand", "jump", "swim", "sleep", "eat", "drink",
  "read", "write", "talk", "listen", "speak", "play", "work", "study", "learn", "teach",
  "build", "break", "fix", "make", "do", "have", "get", "take", "put", "give",
  "find", "lose", "keep", "drop", "catch", "throw", "hit", "kick", "push", "pull",
  "open", "close", "lock", "key", "door", "window", "roof", "floor", "wall", "ceiling",
  "room", "house", "home", "yard", "garden", "tree", "flower", "grass", "leaf", "branch",
  "root", "seed", "plant", "fruit", "vegetable", "meat", "bread", "cheese", "milk", "water",
  "juice", "tea", "coffee", "sugar", "salt", "pepper", "soup", "bowl", "plate", "cup",
  "glass", "spoon", "fork", "knife", "pan", "pot", "oven", "stove", "sink", "fridge",
  "bed", "table", "chair", "desk", "lamp", "clock", "phone", "book", "pen", "paper",
  "bag", "box", "shirt", "pants", "shoes", "socks", "hat", "coat", "dress", "skirt",
  "ring", "watch", "sun", "moon", "star", "cloud", "rain", "snow", "wind", "storm",
  "sky", "earth", "ocean", "river", "lake", "mountain", "hill", "valley", "forest", "desert",
  "city", "town", "village", "street", "road", "bridge", "park", "school", "store", "shop",
  "bank", "hospital", "doctor", "nurse", "police", "fire", "guard", "king", "prince", "chief",
  "boss", "worker", "friend", "family", "mother", "father", "sister", "brother", "uncle", "aunt",
  "baby", "child", "boy", "girl", "man", "woman", "crowd", "group", "team", "class",
  "game", "sport", "score", "win", "lose", "tie", "race", "track", "field", "ball",
  "bat", "net", "goal", "point", "music", "song", "dance", "band", "drum", "bell",
  "note", "sound", "noise", "quiet", "loud", "soft", "hard", "smooth", "rough", "heavy",
  "light", "dark", "bright", "color", "red", "blue", "green", "black", "white", "brown",
  "pink", "gray", "shape", "round", "square", "flat", "long", "short", "tall", "high",
  "low", "deep", "shallow", "wide", "thin", "thick", "straight", "bent", "fast", "slow",
  "quick", "prompt", "delay", "wait", "stop", "start", "pause", "end", "finish", "begin",
  "first", "last", "next", "past", "future", "now", "then", "when", "where", "why",
  "how", "what", "who", "which", "that", "this", "these", "those", "here", "there",
  "near", "far", "left", "right", "up", "down", "out", "inside", "outside", "back",
  "front", "top", "bottom", "side", "edge", "center", "middle", "corner", "line", "space",
  "blank", "full", "empty", "clear", "clean", "dirty", "fresh", "stale", "new", "old",
  "young", "brave", "scared", "happy", "sad", "angry", "calm", "proud", "shy", "smart",
  "dull", "sharp", "weak", "strong", "rich", "poor", "cheap", "dear", "free", "cost",
  "price", "coin", "bill", "card", "note", "stamp", "mail", "post", "send", "fetch",
  "bring", "pass", "cross", "turn", "spin", "roll", "slide", "slip", "fall", "climb",
  "rise", "soar", "sink", "float", "drift", "sail", "fly", "drive", "ride", "steer",
  "guide", "lead", "follow", "chase", "hunt", "track", "hide", "seek", "search", "point",
  "show", "display", "mask", "cover", "wrap", "fold", "bend", "cut", "slice", "chop",
  "mix", "blend", "stir", "shake", "pour", "spill", "fill", "drain", "wash", "scrub",
  "wipe", "dry", "sweep", "dust", "pack", "load", "store", "stack", "sort", "pick",
  "choose", "select", "guess", "think", "know", "dream", "sleep", "wake", "rest", "relax",
  "hurt", "heal", "cure", "treat", "aid", "help", "save", "keep", "hold", "grab",
  "grip", "pinch", "squeeze", "stretch", "pull", "press", "touch", "tap", "rub", "scratch",
  "pat", "clap", "wave", "nod", "smile", "frown", "laugh", "cry", "sigh", "gasp",
  "breathe", "chew", "bite", "lick", "spit", "swallow", "taste", "smell", "sniff", "look",
  "stare", "peek", "glance", "watch", "view", "sight", "scene", "stage", "show", "act",
  "play", "film", "tape", "disk", "drive", "screen", "board", "chalk", "paint", "brush",
  "draw", "sketch", "craft", "art", "tool", "gear", "part", "piece", "bit", "whole",
  "sum", "total", "math", "shape", "form", "size", "mass", "weight", "scale", "measure"
];
let userInput = "";
let allLetters = [];
let wordsText = document.getElementById("words-text");
var randomTextList = [];
for(var j = 0; j < 15; j++){
var random_word = randomWords[(Math.floor(Math.random() * randomWords.length))];
randomTextList.push(random_word);
var splittedText = random_word.split("");
allLetters.push(...splittedText);
var final_words = splittedText.map(letter => `<span class="letter">${letter}</span>`).join("");;
wordsText.innerHTML += " " + final_words;
console.log(wordsText, final_words)
}

function checkValues(){
    const span = document.querySelectorAll(".letter");
            for(var i=0; i < span.length; i++){
                if(i < userInput.length){
            if(allLetters[i] === userInput[i]){
                span[i].style.color = "green"; 
                
            }else{
                span[i].style.color = "red";
            }
        }else{
               span[i].style.color = "";
        }
        }
    }
document.addEventListener("keyup", function(event){
    if(event.key.length === 1 && event.key !== " "){
    userInput += (event.key);
    console.log(userInput)
    checkValues();
    console.log(allLetters.length)
    console.log(userInput.length)
    }else if(event.key === "Backspace" && event.key.length > 1){
        userInput = userInput.slice(0, -1);
        console.log(userInput)
    }
});



let githubButton = document.getElementById("github-button");
let restartButton = document.getElementById("restart-button");
let profileButton = document.getElementById("profile-icon");
let timerSpan = document.getElementById("timer-span");
var time = 0;


profileButton.addEventListener("click", function(){
    window.location.href = "login-signup.html";
})
githubButton.addEventListener("click", function(){
    window.open("https://github.com/Abdoaref739", "_blank");
})

var wordsWritten;
var timeCounted;
let resultsDiv = document.getElementById("results-div");
function timer(event){
    time++;
    timerSpan.innerHTML = time;
        if(userInput.length !== allLetters.length){
    return;
}else if(userInput.length === allLetters.length){
    timeCounted = time;
    wordsWritten = 15;
    clearInterval(intervalId);
    calculateCountedWords();
}
}
var intervalId = setInterval(timer, 1000);
var wordsPerSecondSpan = document.getElementById("words-per-second-span");
var wordsPerMinuteSpan = document.getElementById("words-per-minute-span");
function calculateCountedWords(){
    var WpS = Math.ceil((wordsWritten / timeCounted));
    var WpM = Math.floor((wordsWritten / (timeCounted / 60)));
    wordsPerSecondSpan.innerHTML = WpS;
    wordsPerMinuteSpan.innerHTML = WpM;
    resultsDiv.style.opacity = "100%";
}

let gearIcon = document.getElementById("gear-icon");
let optionsDiv = document.getElementById("options-div");
let closeIcon = document.getElementById("close-icon");

gearIcon.addEventListener("click", function(){
    optionsDiv.style.display = "block";
});

closeIcon.addEventListener("click", function(){
    optionsDiv.style.display = "none";
    clearInterval(intervalId)
    time = 0;
});


let profileChoices = document.getElementById("profile-choices");
let profileChoicesDiv = document.getElementById("profile-choices-div");
let welcomeText = document.getElementById("welcome-text");
let username = localStorage.getItem("name");
profileChoicesDiv.addEventListener("mouseover", function(){
if(username !== ""){
    profileChoices.style.display = "flex";
}
});
profileChoicesDiv.addEventListener("mouseout", function(){
if(username !== ""){
    profileChoices.style.display = "none";
}
});
if(username !== ""){
    welcomeText.innerHTML = `welcome, ${username}!`;

}else{
    welcomeText.innerHTML = `welcome, user!`;
}

var buy_me_a_coffee = document.getElementById("buy-me-a-coffee-button");
buy_me_a_coffee.addEventListener("click", function(){
    alert("love u!")
});


profileChoices.addEventListener("click", function(){
window.location.href = "profile.html";
});





let themeOption1 = document.getElementById("theme-option1");
let themeOption2 = document.getElementById("theme-option2");
let themeOption3 = document.getElementById("theme-option3");
let themeOption4 = document.getElementById("theme-option4");
let styledText = document.querySelector(".styled-text");
let themeOption1_icon = document.getElementById("theme-option1-check");
let themeOption2_icon = document.getElementById("theme-option2-check");
let themeOption3_icon = document.getElementById("theme-option3-check");
let themeOption4_icon = document.getElementById("theme-option4-check");
let timeBasedTestButton = document.getElementById("time-based-test-button");
themeOption1_icon.style.display = "block";

function theme1(){
localStorage.setItem("theme", "first-theme");
        themeOption1_icon.style.display = "block";
        themeOption2_icon.style.display = "none";
        themeOption3_icon.style.display = "none";
        themeOption4_icon.style.display = "none";
        document.body.style.backgroundColor = "rgb(22, 22, 22)";
        styledText.style.color = "#ffd700";
        timeBasedTestButton.addEventListener("mouseover", function(){
            timeBasedTestButton.style.color = "#ffd700";
        })
        timeBasedTestButton.addEventListener("mouseout", function(){
            timeBasedTestButton.style.color = "#fff";
        });
        restartButton.addEventListener("mouseover", function(){
            restartButton.style.color = "#ffd700";
        });
        restartButton.addEventListener("mouseout", function(){
            restartButton.style.color = "#fff";
        });
}
themeOption1.addEventListener("click", function(){
        theme1();
        
});

function theme2(){
        localStorage.setItem("theme", "second-theme");
        themeOption1_icon.style.display = "none";
        themeOption2_icon.style.display = "block";
        themeOption3_icon.style.display = "none";
        themeOption4_icon.style.display = "none";
        document.body.style.backgroundColor = "#0f1117";
        styledText.style.color = "#00ff88";
        console.log("done")
        timeBasedTestButton.addEventListener("mouseover", function(){
            timeBasedTestButton.style.color = "#00ff88";
        })
        timeBasedTestButton.addEventListener("mouseout", function(){
            timeBasedTestButton.style.color = "#fff";
        });
        restartButton.addEventListener("mouseover", function(){
            restartButton.style.color = "#00ff88";
        });
        restartButton.addEventListener("mouseout", function(){
            restartButton.style.color = "#fff";
        });
}

themeOption2.addEventListener("click", function(){
        theme2();
});

function theme3(){
        localStorage.setItem("theme", "third-theme");
        themeOption1_icon.style.display = "none";
        themeOption2_icon.style.display = "none";
        themeOption3_icon.style.display = "block";
        themeOption4_icon.style.display = "none";
        document.body.style.backgroundColor = "#f5f0e8";
        styledText.style.color = "#a0522d";
        console.log("done")
        timeBasedTestButton.addEventListener("mouseover", function(){
            timeBasedTestButton.style.color = "#a0522d";
        })
        timeBasedTestButton.addEventListener("mouseout", function(){
            timeBasedTestButton.style.color = "#fff";
        });
        restartButton.addEventListener("mouseover", function(){
            restartButton.style.color = "#a0522d";
        });
        restartButton.addEventListener("mouseout", function(){
            restartButton.style.color = "#fff";
        });
}

themeOption3.addEventListener("click", function(){
        theme3();
});

function theme4(){
        localStorage.setItem("theme", "forth-theme");
        themeOption1_icon.style.display = "none";
        themeOption2_icon.style.display = "none";
        themeOption3_icon.style.display = "none";
        themeOption4_icon.style.display = "block";
        document.body.style.backgroundColor = "#0a0e27";
        styledText.style.color = "#4e8cff";
        console.log("done")
        timeBasedTestButton.addEventListener("mouseover", function(){
            timeBasedTestButton.style.color = "#4e8cff";
        })
        timeBasedTestButton.addEventListener("mouseout", function(){
            timeBasedTestButton.style.color = "#fff";
        });
        restartButton.addEventListener("mouseover", function(){
            restartButton.style.color = "#4e8cff";
        });
        restartButton.addEventListener("mouseout", function(){
            restartButton.style.color = "#fff";
        });
}

themeOption4.addEventListener("click", function(){
        theme4();
});
function themeRestart(){
    window.location.reload();
    if(localStorage.getItem("theme") == "first-theme"){
        theme1();
    }else if(localStorage.getItem("theme") == "second-theme"){
        theme2();
    }else if(localStorage.getItem("theme") == "third-theme"){
        theme3();
    }else if(localStorage.getItem("theme") == "forth-theme"){
        theme4();
    }

}
restartButton.addEventListener("click", themeRestart);
document.addEventListener("keydown", function(event){
if(event.shiftKey && event.key === "Enter"){
    themeRestart();
    window.location.reload();
}
});