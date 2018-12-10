document.getElementById("countButton").onclick = function () {
    var typedText = document.getElementById("textInput").value;
    
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.
  
    letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
        // do something for each letter.
    }
    
    
    for (letter in letterCounts) {
     
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
    words = typedText.split(/\s/);
    var wordCount = {};
    for(let i= 0; i < words.length; i++) {
        currentWord = words[i];
        if(wordCount[currentWord] === undefined)  {
            wordCount[currentWord] = 1;
        } else {
            wordCount[currentWord]++;
        }
    }
    for(word in wordCount) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordCount[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }

}