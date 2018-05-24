import { Haiku } from './../src/haiku';


describe('Haiku Counter', function() {
  var myHaiku;
  var numberOfSyllables = 0;

  beforeEach(function() {
    myHaiku = new Haiku("The old ceiling pond A frog jumps into the pond splash Silence again");
    expect(myHaiku.LocateNumberOfSyllables()).toEqual(17);
  });

  it('should count the number of syllables in haiku', function() {
    console.log(numberOfSyllables);
  });
});
