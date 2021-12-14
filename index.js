const fs = require('fs')
var OceanFloor = require('./OceanFloor.js')

const { Worker } = require('worker_threads')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
	const lines = data.split(/\r?\n/).map(line => line.trim());
	const oceanFloor = new OceanFloor(lines);
	const fishAfter80Days = oceanFloor.simulateDaysV2(oceanFloor.lanternfish, 256)
	console.log(`number of lanter fish after 256 days`, fishAfter80Days)
})