async function processWords(text) {

    const avoidedWords = [
        "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an",
        "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot",
        "could", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get",
        "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i",
        "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may",
        "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often",
        "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should",
        "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these",
        "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what",
        "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet",
        "you", "your", "it's", "&", "amp", "I"
    ];

    //split text to array 
    let textToArray = text.toLowerCase().split(" ");

    const regex = (/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    //filter out avoided words
    for (let y = 0; y < textToArray.length; y++) {
        //filter out puncuation 
        const punctuationless = textToArray[y].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        //console.log("no more punctuation " + punctuationless)
        const finalStrNoSpaces = punctuationless.trim();
        //console.log("white space gone " + deleteWhiteSpace)

        textToArray.splice(y, 1, finalStrNoSpaces) // at index y, delete 1 element, replace it with finalizedStr

    }

    //Now convert each word into an object count frequency of each word and store that as a property

    //everytime textToArray[i] matches a textToArray element then up the counter by 1 

    //for each word try each possible match  

    let wordObjArray = []

    let uniqueWords = []

    for (let i = 0; i < textToArray.length; i++) {

        let counter = 0

        //create a check to make sure that a wordInQuestion isn't being repeated 

        const caughtRepeat = uniqueWords.includes(textToArray[i]); //array of word NOT obj

        //console.log(caughtRepeat)

        if (caughtRepeat === false) {
            //console.log(textToArray[i]);
            counter++

            const wordInQuestion = textToArray[i]
            //const data = [counter, wordInQuestion]; //stored in array 

            const dataToObj = { frequency: counter, word: wordInQuestion }

            const uniqueWord = wordInQuestion;

            wordObjArray.push(dataToObj);

            uniqueWords.push(uniqueWord);


            //textToArray.forEach(possibleMatch => countMatches(possibleMatch, textToArray[i]))
        } else {
            //console.log("stopped")
            //find relevent index in  wordObjArray
            const allWords = wordObjArray.map(function (wordObj) {
                return wordObj.word
            })
            //add counter logic to specific word
            const index = allWords.indexOf(textToArray[i]);

            wordObjArray[index].frequency++;

        }

    }

    function removeUndefined(arr) {

        const removingUndefinedFromArr = arr.filter(function (x) {
            return x !== undefined;
        });

        return removingUndefinedFromArr

    }

    const filteredOutIrrelevance = wordObjArray.map(function (currentTweetWord) {
        if (avoidedWords.includes(currentTweetWord.word)) {
            return
        } else {
            return currentTweetWord;
        }
    })

    const filteredundefines = removeUndefined(filteredOutIrrelevance)

    // const removingUndefinedFromAbove = filteredOutIrrelevance.filter(function (x) {
    //     return x !== undefined;
    // });

    const reducedToMostCommonWords = filteredundefines.map(function (wordObj) {
        if (wordObj.frequency > 1) {
            return wordObj
        }
    })

    const finalReturn = removeUndefined(reducedToMostCommonWords).slice(0, 90); //can't fit more than 95 in word cloud space








    console.log(finalReturn.length);

    console.log(finalReturn);


    return finalReturn
}

//processWords("#Yo The quick brown fox jumped over the lazy dog This post is about building my first web application, Global News. I’d had the idea for the project for around a year, and at first it was in a very different form. Before I had begun learning to code there was an established view that immigration was going to be an important feature of the modern world. Between climate change creating unsafe homes and global economic inequality there would be a compounding need for travel both today and in the future. And so, I was thinking about how to facilitate information to those considering a journey to a new place.  ")

//processWords("#!Yo. ((***SHmurrple hello hello a a a us to with a gargoyle we of guzzle guzzle")
module.exports = processWords;