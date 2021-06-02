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
        "you", "your"
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

        avoidedWords.forEach(avoidedWord => {
            if (avoidedWord === textToArray[y]) {
                //Delete from array 
                textToArray.splice(y, 1)
            }
        })
    }

    //Now convert each word into an object count frequency of each word and store that as a property
    //let wordObjArray = [];


    //textToArray.forEach(possibleMatch => countMatches(possibleMatch, textToArray[i]))

    //everytime textToArray[i] matches a textToArray element then up the counter by 1 

    //for each word try each possible match  

    let wordObjArray = []

    for (let i = 0; i < textToArray.length; i++) {

        let counter = 0

        textToArray.forEach(possibleMatch => countMatches(possibleMatch, textToArray[i]))

        function countMatches(possibleMatch, wordInQuestion) {
            //create a check to make sure that a wordInQuestion isn't being repeated 
            if (possibleMatch === wordInQuestion) {
                counter++
                if (wordInQuestion !== "") {
                    const data = [counter, wordInQuestion]; //stored in array 

                    const dataToObj = { frequency: data[0], word: data[1] }

                    wordObjArray.push(dataToObj);
                }
            }


        }
    }


    console.log(wordObjArray)


    //once you have the frequency you can create the object 

    //const 


    //console.log(textToArray)








}

//processWords("#Yo The quick brown fox jumped over the lazy dog This post is about building my first web application, Global News. I’d had the idea for the project for around a year, and at first it was in a very different form. Before I had begun learning to code there was an established view that immigration was going to be an important feature of the modern world. Between climate change creating unsafe homes and global economic inequality there would be a compounding need for travel both today and in the future. And so, I was thinking about how to facilitate information to those considering a journey to a new place.  ")

//processWords("#!Yo. ((***SHmurrple hello")
module.exports = processWords;