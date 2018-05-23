
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var characterArr = [];
var vowels = ["a","e","i","o","u"]
var numberOfVowels = 0;

$(document).ready(function() {
    var textHaiku = $('.haiku-text').text();
    console.log(textHaiku);
    characterArr = textHaiku.split('');

    function LocateNumberOfSyllables() {
        // counts vowels
      for (var i =0; i < characterArr.length; i++) {
        for (var j =0; j < vowels.length; j++) {
          //subtract vowel count if two vowels are next to eachother
          if ((characterArr[i] == vowels[j]) && (characterArr[i+1] == vowels[j])) {
            numberOfVowels -= 1;
          }
          //counts vowels
          else if (characterArr[i] == vowels[j]) {
            numberOfVowels += 1;
          }
        }
        //subtract vowel count if e is silent
        if ((characterArr[i] == " ") && (characterArr[i-1] == "e")) {
          numberOfVowels -= 1;
        }
      }
    }

  LocateNumberOfSyllables()


    console.log(characterArr);
    console.log(numberOfVowels);
});
