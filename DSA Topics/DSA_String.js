const Full_Name = "Abhishek Choudhary";

// const str = Full_Name.split(" ");
// const reversed = str.map((ele) => ele.split("").reverse().join(""));

// console.log(reversed.join(" "));


function strstr(hello, needle) {
    for (let i = 0; i <= hello.length - needle.length; i++) {
        let found = true;
        for (let j = 0; j < needle.length; j++) {
            if (hello[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) return i; 
    }
    return -1; 
}

// console.log(strstr("leetcode", "leeto")); // Output: -1
// console.log(strstr("leetcode", "leet"));  // Output: 0
// console.log(strstr("abcde", "cde"));      // Output: 2


function reverseStr(str) {
    const newStr=[]
    for(let i=str.length-1 ; i>=0;i--){
        newStr.push(str[i])
    }
    return newStr;
}

// console.log(reverseStr("Abhishek"))

function checkReverseStr(S,R) {
    for(let i=0;i<S.length;i++){     

         return S[i] === R[S.length-1-i];

    }
}

// console.log(checkReverseStr("Abhishek" ,"kehsihbA"))


function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        const currentChar = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if ( strs[j][i] !== currentChar) {
                return prefix;
            }
        }

        prefix += currentChar;
    }

    return prefix;
}

// console.log(longestCommonPrefix(["Abhishek", "Abhimanyu", "Abhi"])); // Output: "Abhi"

function mergeAlternately(word1,word2) {
    const mergeStr =[]
    
    for(let i=0;i<(word1.length>word2.length? word1.length: word2.length);i++){
        if (i < word1.length) {
            mergeStr.push(word1[i]);
        }
        if (i < word2.length) {
            mergeStr.push(word2[i]);
        }
    }
    return mergeStr.join("");
}

// console.log(mergeAlternately("ab", "pqrs"));


function lengthOfLastStr(str) {
    const words = str.split(" ");
    let i = words.length - 1;
    
    while (i >= 0 && words[i] === "") {
        i--;
    }

    if (i >= 0) {
        return words[i].length;
    }

    return 0; 
}

// console.log(lengthOfLastStr("Hi I am Abhishek Car Best"));      
// console.log(lengthOfLastStr("     "));       



