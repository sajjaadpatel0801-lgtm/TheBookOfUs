const reasons = [

"I love you because you gave us a second chance.",
"I love you because your smile brightens my darkest days.",
"I love you because you believe in me.",
"I love you because you make me want to become a better man.",
"I love you because you are my best friend.",
"I love you because I can be myself around you.",
"I love you because your laugh makes me smile.",
"I love you because you never stop amazing me.",
"I love you because you make ordinary moments feel special.",
"I love you because every day with you is a blessing."

];

let current = 0;

const counter = document.getElementById("counter");
const reason = document.getElementById("reason");

function showReason(){

counter.innerHTML = `Reason ${current + 1} of ${reasons.length} ❤️`;

reason.classList.add("fade");

setTimeout(()=>{

reason.innerHTML = reasons[current];

reason.classList.remove("fade");

},300);

}

function nextReason(){

current++;

if(current >= reasons.length){

current = 0;

}

showReason();

}

function previousReason(){

current--;

if(current < 0){

current = reasons.length - 1;

}

showReason();

}

showReason();
