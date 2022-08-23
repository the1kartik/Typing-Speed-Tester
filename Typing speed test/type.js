const setOfWords = [
    "One of the most essentials skills to have been discontinued from your school days is typing.",
    "Although people tend to underestimate the value of typing faster and accurately, it is one of the most fundamental skill required in any field you wish to pursue.",
    "Be it in writing emails, writing a blog post, or writing copy, typing is one of the most essential skills.",
    "As a blogger, typing faster and better will save you a tremendous amount of time spent proofreading your article for errors and crafting the article itself.",
    "While the average typing speed is around 38-40 Words Per Minute, the world record for the fastest typing speed is held by Stella Pajunas who struck a whopping 216 WPM (Words per minute) on an IBM Electric Typewriter!",
    "Typing accurately is as important as typing fast. There is a speed-accuracy tradeoff that needs to be considered when you begin practicing typing faster.",
    "Faster is not always better if your accuracy gets compromised in the process. Aiming for a faster and accurate typing speed is essential.",
    "Finishing that assignment, blog article or just an email quickly and saving yourselves some amount of time in the process is a great way to make room for other tasks.",
    "Having written over 10 million words in all forms of posts, I can justify how valuable improving your typing speed and accuracy is.",
    "With the majority of the audience here at ShoudMeLoud being bloggers or wannabe bloggers, it is the time that you work on your typing speed, while not compromising on the accuracy part of it."
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++;
        }
    })

    let errorWords = ( words1.length - cnt);
    let accurate = Math.round((cnt/words1.length)*100);

    return (cnt + " correct words out of " + words1.length + " words and the total number of errors are " + errorWords + " and your accuracy is " + accurate+" % .");
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);
    
    let finalMsg = " Your typing speed is " +speed+ " words per minute and you typed ";

    finalMsg += compareWords(msg.innerText,totalStr);

    msg.innerText = finalMsg;

}

btn.addEventListener('click',function(){
    if(this.innerText == "Start"){
        typeWords.disabled = false;
        typeWords.value = "";
        
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
        typeWords.value = "";
    }
})