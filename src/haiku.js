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
    const vowels = ["a","A","e","E","i","I","o","O","u","U"];
    let numberOfSyllables=0;
      // counts vowels
    for (var i =0; i < characterArr.length; i++) {
      if (characterArr[i] == "e" && characterArr[i+1]== " " && (characterArr[i-1] == "h" || characterArr[i-1] == "l" || characterArr[i-1] == "i") || (characterArr[i] == "u" && characterArr[i+1]== "e")) {
        numberOfSyllables += 1;
      }
      else if (characterArr[i] == "e" && (characterArr[i+1] == " " || characterArr[i+1] =="s")) {
        numberOfSyllables += 0;
      }
      else if (vowels.indexOf(characterArr[i]) != -1 && vowels.indexOf(characterArr[i+1]) != -1) {

        numberOfSyllables += 0;
      }
      else if (vowels.indexOf(characterArr[i]) != -1) {
        numberOfSyllables += 1;
      }
    }
    return numberOfSyllables;
  }
}
