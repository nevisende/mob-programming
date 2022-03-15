const _ = require('lodash')
const chai = require("chai");
const assert = chai.assert;
const whatCentury = require("../challenge");

describe("Example cases", function() {
  it("basic tests", function() {
    assert.strictEqual(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output")
    assert.strictEqual(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output")

  });
});

describe("Random tests", function() {
  it("100 tests", function() {
    for (let i = 0; i < 100; ++i){
      let year = _.random(1000,9999).toString();    
      let exp = whatCenturySol(year);
      assert.strictEqual(whatCentury(year), exp);   
    }  
  });
});

function whatCenturySol(year) {
  let century = Math.ceil(Number(year)/100);
  return century + (century % 10 === 1 && century != 11 ? 'st' : century % 10 === 2 && century != 12 ? 'nd' : century % 10 === 3 && century != 13 ? 'rd' : 'th');
}