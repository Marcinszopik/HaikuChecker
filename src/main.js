
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

    var myHaiku=new Haiku(textHaiku);


    let numberOfSyllables=0;
    // numberOfSyllables+=myHaiku.LocateFirstLineSyllables();
    // numberOfSyllables+=myHaiku.LocateSecondLineSyllables();
    numberOfSyllables+=myHaiku.LocateNumberOfSyllables();


  $("button#verify-haiku").click(function(event) {
    if (numberOfSyllables == 17) {
      $("#result").text("DEFINITELY A HAIKU! There are " + numberOfSyllables + " syllables");
    } else {
      $("#result").text("NOT AN HAIKU! There are " + numberOfSyllables + " syllables");
    }

    console.log(numberOfSyllables);
  });



});
