const reasons = [
const reasons = [

"I love you because you gave us a second chance.",
"I love you because you never gave up on us.",
"I love you because your smile makes my whole day better.",
"I love you because your laugh is my favourite sound.",
"I love you because you make me want to become a better man.",
"I love you because you always believe in me.",
"I love you because you are my best friend.",
"I love you because I can be myself around you.",
"I love you because you understand me.",
"I love you because you make ordinary days feel special.",
"I love you because you are beautiful inside and out.",
"I love you because you have the kindest heart.",
"I love you because you care so deeply about the people you love.",
"I love you because you make me feel at home.",
"I love you because every memory with you means everything to me.",
"I love you because our first conversation changed my life.",
"I love you because I'll never forget seeing you reading that book.",
"I love you because our first date at Housewives was perfect.",
"I love you because Rosebank became one of my favourite places because of you.",
"I love you because I loved seeing your competitive side when we played games.",
"I love you because watching a 3D movie with you made it unforgettable.",
"I love you because even Mochachos tasted better with you beside me.",
"I love you because every anniversary with you means the world to me.",
"I love you because I can picture our whole future together.",
"I love you because I know you'll be an amazing wife.",
"I love you because I know you'll be an amazing mother.",
"I love you because I dream about raising our two children with you.",
"I love you because I dream about growing old with you.",
"I love you because I dream about watching sunsets with you.",
"I love you because I can't wait to make Umrah with you.",
"I love you because I can't wait to visit Makkah and Madinah with you.",
"I love you because I can't wait to travel the world with you.",
"I love you because our future home already feels real in my heart.",
"I love you because I can't wait for our coffee mornings together.",
"I love you because movie nights will always be better with you.",
"I love you because you make me feel loved.",
"I love you because you make me feel safe.",
"I love you because you make me laugh even when I'm stressed.",
"I love you because you inspire me every day.",
"I love you because you are patient with me.",
"I love you because you forgive me.",
"I love you because you accept me for who I am.",
"I love you because you make my future exciting.",
"I love you because I never get tired of talking to you.",
"I love you because even silence with you feels peaceful.",
"I love you because you're my favourite notification.",
"I love you because you're the first person I want to tell everything to.",
"I love you because every "I love you" from you still gives me butterflies.",
"I love you because loving you is the easiest thing I've ever done.",
"I love you because no matter what happens, I will always choose you."

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
