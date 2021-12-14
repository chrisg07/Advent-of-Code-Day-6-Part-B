module.exports = class OceanFloor {
  lanternfish = [];

  constructor(lines) {
		for (let line of lines) {
			if (line) {
				this.lanternfish = line.split(',').map(num => Number(num));
			}
		}
  }

	simulateDays(fish, numDays) {
		let currentFish = fish;
		for (let i = 0; i < numDays; i++) {
			let fishToAdd = []
			currentFish = currentFish.map((value) => {
				switch (value) {
					case 8:
					case 7:
					case 6:
					case 5:
					case 4:
					case 3:
					case 2:
					case 1:
					 	return value - 1
					case 0:
						fishToAdd.push(8)
						return 6
					default:
						console.error('switch')
				}
			})
			currentFish = currentFish.concat(fishToAdd)
			console.log('days', i)
		}
		return currentFish;
	}

	simulateDaysV2(fish, numDays) {
		let fishCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0]
		for (let value of fish) {
			fishCounts[value] += 1
		}
		for (let i = 0; i < numDays; i++) {
			let swap = fishCounts[0]
			fishCounts[0] = fishCounts[1]
			fishCounts[1] = fishCounts[2]
			fishCounts[2] = fishCounts[3]
			fishCounts[3] = fishCounts[4]
			fishCounts[4] = fishCounts[5]
			fishCounts[5] = fishCounts[6]
			fishCounts[6] = swap + fishCounts[7]
			fishCounts[7] = fishCounts[8]
			fishCounts[8] = swap
		}
		return fishCounts.reduce((a, b) => a + b);
	}
	
	simulateFish(value, numDays) {
		if (numDays <= value) {
			return 1;
		}
		if (value > 0){
			return this.simulateFish(0, numDays - value)
		}
		if (value === 0) {
			return this.simulateFish(0, numDays - 7) + this.simulateFish(0, numDays - 9)
		}
	}
}
