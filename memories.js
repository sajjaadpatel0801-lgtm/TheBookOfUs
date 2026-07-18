const memories = [

"The first time we spoke while you were reading your book. You had no idea that one conversation would change my life forever.",

"Our first date at Housewives. I was nervous, but seeing you made everything feel right.",

"Walking around Rosebank together is still one of my favourite memories.",

"I'll never forget seeing your competitive side while we played games. It made me smile so much.",

"Watching our 3D movie together. I don't remember every scene, but I'll always remember sitting next to you.",

"Ending our anniversary with Mochachos. It wasn't just the food—it was the company.",

"14 December 2024. One whole year together. A day I'll never forget.",

"Thank you for giving us a second chance. I'll always be grateful for that gift.",

"Every good morning and every good night message reminded me how lucky I am.",

"Even though we're long distance, you've always made me feel close to you."

];

let current = -1;

const memory = document.getElementById("memory");

function nextMemory(){

let newIndex;

do{

newIndex = Math.floor(Math.random()*memories.length);

}while(newIndex===current);

current=newIndex;

memory.classList.add("fade");

setTimeout(()=>{

memory.innerHTML=memories[current];

memory.classList.remove("fade");

},300);

}

nextMemory();
