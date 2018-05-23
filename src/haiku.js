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
      const vowels = ["a","e","i","o","u"];
      let numberOfVowels=0;
        // counts vowels
      for (var i =0; i < characterArr.length; i++) {
        for (var j =0; j < vowels.length; j++) {
          //subtract vowel count if two vowels are next to eachother
          if (characterArr[i] == vowels[j] && characterArr[i+1] == vowels[j]) {
            numberOfVowels += 0;
          }
          //counts vowels
          else if (characterArr[i] == vowels[j]) {
            numberOfVowels += 1;
          }
        }
        //subtract vowel count if e is silent
        if ((characterArr[i] == " ") && (characterArr[i-1] == "e")) {
          numberOfVowels += 0;
        }
      }
      return numberOfVowels;
    }


    LocateFirstLineSyllables() {
        // counts vowels
      let firstLineArr = this.firstLine.split('');
      const vowels = ["a","e","i","o","u"];
      let numberOfVowels=0;

      for (var i =0; i < firstLineArr.length; i++) {
        for (var j =0; j < vowels.length; j++) {
          //subtract vowel count if two vowels are next to eachother
          if (firstLineArr[i] == vowels[j] && firstLineArr[i+1] == vowels[j]) {
            numberOfVowels += 0;
          }
          //counts vowels
          else if (firstLineArr[i] == vowels[j]) {
            numberOfVowels += 1;
          }
        }
        //subtract vowel count if e is silent
        if ((firstLineArr[i] == " ") && (firstLineArr[i-1] == "e")) {
          numberOfVowels += 0;
        }
      }
      return numberOfVowels;
    }


    LocateSecondLineSyllables() {
      let secondLineArr = this.secondLine.split('');
      const vowels = ["a","e","i","o","u"];
      let numberOfVowels=0;
        // counts vowels
      for (var i =0; i < secondLineArr.length; i++) {
        for (var j =0; j < vowels.length; j++) {
          //subtract vowel count if two vowels are next to eachother
          if (secondLineArr[i] == vowels[j] && secondLineArr[i+1] == vowels[j]) {
            numberOfVowels += 0;
          }
          //counts vowels
          else if (secondLineArr[i] == vowels[j]) {
            numberOfVowels += 1;
          }
        }
        //subtract vowel count if e is silent
        if ((secondLineArr[i] == " ") && (secondLineArr[i-1] == "e")) {
          numberOfVowels += 0;
        }
      }
      return numberOfVowels;
    }

    LocateThirdLineSyllables() {
      // counts vowels
      let thirdLineArr = this.thirdLine.split('');
      const vowels = ["a","e","i","o","u"];
      let numberOfVowels=0;
      for (var i =0; i < thirdLineArr.length; i++) {
        for (var j =0; j < vowels.length; j++) {
          //subtract vowel count if two vowels are next to eachother
          if (thirdLineArr[i] == vowels[j] && thirdLineArr[i+1] == vowels[j]) {
            numberOfVowels += 0;
          }
          //counts vowels
          else if (thirdLineArr[i] == vowels[j]) {
            numberOfVowels += 1;
          }
        }
        //subtract vowel count if e is silent
        if ((thirdLineArr[i] == " ") && (thirdLineArr[i-1] == "e")) {
          numberOfVowels += 0;
        }
      }
      return numberOfVowels;
    }
}
