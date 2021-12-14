var assert = require('assert');
const fs = require('fs')
var OceanFloor = require('./OceanFloor.js')

describe('Ocean Floor', function() {
  describe('should have 5 lanternfish after test input', function() {
    it('parse test input', function(done) {
      fs.readFile('text-input.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const lines = data.split(/\r?\n/).map(line => line.trim());
      const oceanFloor = new OceanFloor(lines);
			
			assert.equal(oceanFloor.simulateFish(1, 2), 2)
			assert.deepEqual(oceanFloor.lanternfish,[3,4,3,1,2]);
			const fishAfter18 = oceanFloor.simulateDaysV2(oceanFloor.lanternfish, 18);
			assert.equal(fishAfter18,[6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8].length);
			// // simulate the rest of the 80 simulateDays
			const fishAfter80 = oceanFloor.simulateDaysV2(oceanFloor.lanternfish, 80);
			assert.equal(fishAfter80, 5934)
			const fishAfter256 = oceanFloor.simulateDaysV2(oceanFloor.lanternfish, 256)
			assert.equal(fishAfter256, 26984457539)
      done();
    })
    });
  });
});