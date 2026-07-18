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

"Every memory we've made together has become one of my favourite stories.",
  "I remember checking my phone hoping to see a message from you.",

"Every countdown until I could see you again was worth it.",

"I still remember how happy I felt after our first date.",

"The little moments with you have always meant the most to me.",

"I loved listening to your stories, no matter how long they were.",

"I remember smiling for hours after spending time with you.",

"Seeing you happy has always made me happy too.",

"I'll always remember how excited I was planning our dates.",

"I never wanted our time together to end.",

"Even sitting quietly together felt perfect.",

"I remember how proud I felt to have you by my side.",

"I still think about all the little moments that made us smile.",

"I loved every goodbye because it meant there would be another hello.",

"Our memories remind me why you're worth waiting for.",

"I remember dreaming about our future even before we spoke about it.",

"I've replayed some of our happiest moments in my mind more times than I can count.",

"I remember laughing with you until my cheeks hurt.",

"The little adventures we had together will always stay with me.",

"I'll always treasure every photo we've taken together.",

"Every memory with you reminds me how blessed I am.",
  "I remember how excited I felt every time we made plans together.",

"I'll never forget waiting to see you again because every second was worth it.",

"I always felt lucky whenever I was with you.",

"You turned ordinary days into unforgettable memories.",

"I remember wishing time would slow down whenever we were together.",

"The happiest moments of my life always seem to have you in them.",

"I remember looking at you and thinking how lucky I was.",

"I'll always remember the butterflies I got before seeing you.",

"I loved every little conversation we had, no matter how random.",

"Every laugh we shared became another reason I fell in love with you.",

"I remember how much I missed you every time we had to say goodbye.",

"Long distance has taught me that love is stronger than distance.",

"Every call with you became the best part of my day.",

"I'll always remember falling asleep with a smile after talking to you.",

"Every voice note from you felt like a hug.",

"I remember waiting for your messages because they always made my day.",

"I never stopped believing that our story was worth fighting for.",

"Every difficult day became easier because I knew I had you.",

"I'll always be thankful that our paths crossed.",

"I wouldn't change our story for anything in the world.",
  "I dream about the day I finally call you my wife.",

"I can already picture us saying our nikah vows together.",

"I dream about walking into our first home together.",

"I imagine us decorating our home with memories we've made.",

"I can't wait for our little coffee corner every morning.",

"I dream about cooking supper together after a long day.",

"I can't wait for our movie nights on the couch.",

"I dream about hearing your laugh fill our home.",

"I can't wait to make Umrah with you by my side.",

"I dream about standing together in Makkah making dua.",

"I can't wait to visit Madinah with you and cherish every moment.",

"I dream about taking our children on their first holiday.",

"I can't wait to watch our two children grow up knowing they are loved.",

"I dream about celebrating our fifth anniversary together.",

"I dream about celebrating our tenth anniversary together.",

"I dream about celebrating our fiftieth anniversary together.",

"I dream about growing old with you while watching the sunset.",

"I dream about holding your hand even when our hair has turned grey.",

"I dream about looking through old photo albums and remembering every chapter of our story.",

"My favourite future memory will always be spending the rest of my life with you.",
  "I'll always choose you, no matter what life brings us.",

"I'll never stop falling in love with you.",

"My favourite place will always be wherever you are.",

"I'll never stop making dua for your happiness.",

"I'll always be proud to call you my person.",

"I'll always believe that Allah brought us together for a reason.",

"I'll never stop thanking Allah for bringing you into my life.",

"I'll always protect the love we've built together.",

"I'll never stop chasing our dreams together.",

"I'll always look at you the way I do today.",

"I hope one day we can read this website together and laugh about all these memories.",

"I hope one day our children will know just how much I loved their mother.",

"I hope we never stop making new memories together.",

"I'll always remember that love isn't measured by distance, but by commitment.",

"I'll always remember that every goodbye brought us one step closer to forever.",

"I'll always carry these memories in my heart.",

"No matter how many memories we make, I'll always look forward to the next one.",

"My favourite chapter of my life will always be the one that has you in it.",

"The best memory I have is finding you. The best memory I'm waiting for is marrying you.",

"And one day, when we're old and reading through these memories together, I'll still look at you and think... I would choose you all over again. I love you to infinity and beyond. ❤️"

];
let current=-1;

const memory=document.getElementById("memory");
const note=document.getElementById("note");
const jar=document.querySelector(".jar");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=(window.innerWidth/2-20+(Math.random()*120-60))+"px";

heart.style.top=(jar.getBoundingClientRect().top+120)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2500);

}

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=(window.innerWidth/2-20+(Math.random()*140-70))+"px";

sparkle.style.top=(jar.getBoundingClientRect().top+100)+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1500);

}

function nextMemory(){

let newIndex;

do{

newIndex=Math.floor(Math.random()*memories.length);

}while(newIndex===current);

current=newIndex;

note.classList.remove("show");

jar.classList.add("shake");

setTimeout(()=>{

jar.classList.remove("shake");

memory.innerHTML=memories[current];

note.classList.add("show");

for(let i=0;i<6;i++){

setTimeout(createHeart,i*120);

}

for(let i=0;i<10;i++){

setTimeout(createSparkle,i*80);

}

},500);

}

window.onload=function(){

nextMemory();

};


}

// Show the first memory when the page loads
window.onload = function(){

nextMemory();

};

