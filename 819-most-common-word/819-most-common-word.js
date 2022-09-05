/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let wordMap = {};
    let bannedWordSet = new Set();
    let newPara = paragraph.replace(/[^a-z0-9]+/gi, " ");
    console.log(newPara);
    let desired = newPara.toLowerCase().split(" ");
    console.log(desired);
    
    for (let i = 0; i < banned.length; i++) {
        bannedWordSet.add(banned[i]);
    }
    
    for (let words of desired) {
        if(words === '') continue;
        wordMap[words] = (wordMap[words] || 0) + 1;
    }
    console.log(wordMap);
    let mostComWord = '';
    let seenValue = 0;
    
    for (let word in wordMap) {
        if (wordMap[word] > seenValue && !bannedWordSet.has(word)) {
            mostComWord = word;
            seenValue = wordMap[word];
        }
    }
    
    return mostComWord;
};