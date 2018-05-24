export class Haiku {

  constructor (textHaiku,firstLine, secondLine, thirdLine)
  {
    this.textHaiku=textHaiku;
    this.firstLine=firstLine;
    this.secondLine=secondLine;
    this.thirdLine=thirdLine;
  }

  LocateNumberOfSyllables() {
      var characterArr = this.textHaiku.split('');
      var dipthongExeptions = ["th", "sh", "ph", "th", "ch", "wh"]
      const vowels = ["a","A","e","E","i","I","o","O","u","U"];
      let numberOfVowels=0;
        // counts vowels
      for (var i =0; i < characterArr.length; i++) {
        if (characterArr[i] == "e" && characterArr[i+1]== " " && characterArr[i-1] == "h") {
          numberOfVowels += 1;
        }
        else if (characterArr[i] == "e" && characterArr[i+1]== " ") {
          numberOfVowels += 0;
        }
        else if (vowels.indexOf(characterArr[i]) != -1 && vowels.indexOf(characterArr[i+1]) != -1) {

          numberOfVowels += 0;
        }
        else if (vowels.indexOf(characterArr[i]) != -1) {
          numberOfVowels += 1;
        }
      }
      return numberOfVowels;
    }


    // LocateFirstLineSyllables() {
    //     // counts vowels
    //   let firstLineArr = this.firstLine.split('');
    //   const vowels = ["a","e","i","o","u"];
    //   let numberOfVowels=0;
    //
    //   for (var i =0; i < firstLineArr.length; i++) {
    //     // for (var j =0; j < vowels.length; j++) {
    //       //subtract vowel count if two vowels are next to eachother
    //       if (vowels.indexOf(firstLineArr[i]) !== -1 && vowels.indexOf(firstLineArr[i+1]) !== -1) {
    //         numberOfVowels += 0;
    //       }
    //       //counts vowels
    //       else if (vowels.indexOf(firstLineArr[i]) !== -1) {
    //         numberOfVowels += 1;
    //       }
    //     // }
    //     //subtract vowel count if e is silent
    //     else if ((firstLineArr[i] == " ") && (firstLineArr[i-1] == "e")) {
    //       numberOfVowels += 0;
    //     }
    //   }
    //   return numberOfVowels;
    // }
    //
    //
    // LocateSecondLineSyllables() {
    //   let secondLineArr = this.secondLine.split('');
    //   const vowels = ["a","e","i","o","u"];
    //   let numberOfVowels=0;
    //     // counts vowels
    //   for (var i =0; i < secondLineArr.length; i++) {
    //     if (vowels.indexOf(secondLineArr[i]) !== -1 && vowels.indexOf(secondLineArr[i+1]) !== -1) {
    //       numberOfVowels += 0;
    //     }
    //     //counts vowels
    //     else if (vowels.indexOf(secondLineArr[i]) !== -1) {
    //       numberOfVowels += 1;
    //     }
    //     //subtract vowel count if e is silent
    //     else if ((secondLineArr[i] == " ") && (secondLineArr[i-1] == "e")) {
    //       numberOfVowels += 0;
    //     }
    //   }
    //   return numberOfVowels;
    // }
    //
    // LocateThirdLineSyllables() {
    //   // counts vowels
    //   let thirdLineArr = this.thirdLine.split('');
    //   const vowels = ["a","e","i","o","u"];
    //   let numberOfVowels=0;
    //   for (var i =0; i < thirdLineArr.length; i++) {
    //     if (vowels.indexOf(thirdLineArr[i]) !== -1 && vowels.indexOf(thirdLineArr[i+1]) !== -1) {
    //       numberOfVowels += 0;
    //     }
    //     //counts vowels
    //     else if (vowels.indexOf(thirdLineArr[i]) !== -1) {
    //       numberOfVowels += 1;
    //     }
    //     //subtract vowel count if e is silent
    //     else if ((thirdLineArr[i] == " ") && (thirdLineArr[i-1] == "e")) {
    //       numberOfVowels += 0;
    //     }
    //   }
    //   return numberOfVowels;
    // }
}
