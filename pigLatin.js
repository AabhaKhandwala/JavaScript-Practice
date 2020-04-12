

function isVowel(c) { 
    return (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || 
            c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'); 
} 
  
function pigLatin(s) { 
  
    // the index of the first vowel is stored. 
    let len = s.length; 
    let index = -1; 
    for (let i = 0; i < len; i++) 
    { 
        if (isVowel(s.charAt(i))) { 
        index = i; 
        break; 
    } 
    } 
  
    // Pig Latin is possible only if vowels 
    // is present 
    if (index == -1) 
        return "-1"; 
  
    // Take all characters after index (including 
    // index). Append all characters which are before 
    // index. Finally append "ay" 
    console.log(s.substring(index) + 
           s.substring(0, index) + "ay"); 
} 

pigLatin("graphic");