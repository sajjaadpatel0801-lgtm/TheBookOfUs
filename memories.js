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

"Even though we're long distance, you've always made me feel close to you.",
  "The first time we spoke while you were reading your book. You had no idea that one conversation would change my whole life.",

"I remember thinking how beautiful you looked the first time we really spoke.",

"Grade 10 will always be special to me because that's where our story truly began.",

"I'll never forget how nervous I felt before our first date at Housewives.",

"The moment I saw you on our first date, every bit of nervousness disappeared.",

"I still remember every smile you gave me at Housewives.",

"Our first date wasn't just a date. It became one of my favourite memories.",

"I'll never forget how excited I was counting down the days until I could see you.",

"Walking beside you always felt like the safest place in the world.",

"Rosebank will always remind me of us.",

"I loved watching you become so competitive while we played games.",

"You made every game more fun simply because you were there.",

"I still smile when I think about us laughing together at Rosebank.",

"I'll never forget watching our 3D movie together.",

"I don't remember every scene from the movie, but I'll always remember sitting next to you.",

"Mochachos tasted better because I was sharing that moment with you.",

"Our first anniversary on 14 December 2024 is a memory I'll carry forever.",

"One whole year together felt like the beginning of forever.",

"The day you gave us a second chance became one of the happiest days of my life.",

"Every memory we've made together has become one of my favourite stories."

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
