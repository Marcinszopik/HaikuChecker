//
// import { LocateFirstLineSyllables } from './haiku.js';
// import { LocateSecondLineSyllables } from './haiku.js';
// import { LocateThirdLineSyllables }  from './haiku.js';
import { Haiku } from './haiku.js';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
    var textHaiku = $('.haiku-text').text();
    var firstLine = $("#line-one").text();
    var secondLine = $("#seven-syllables").text();
    var thirdLine = $("#line-three").text();
    console.log(textHaiku);

    var myHaiku=new Haiku(textHaiku, firstLine, secondLine, thirdLine);


    let numberOfVowels=0;
    numberOfVowels+=myHaiku.LocateFirstLineSyllables();
    numberOfVowels+=myHaiku.LocateSecondLineSyllables();
    numberOfVowels+=myHaiku.LocateThirdLineSyllables();


  $("button#verify-haiku").click(function(event) {
    if (numberOfVowels > 17) {
      $("#result").text("NOT AN HAIKU!");
    } else {
      $("#result").text("DEFINITELY A HAIKU!");
    }

    console.log(numberOfVowels);
  });



});
