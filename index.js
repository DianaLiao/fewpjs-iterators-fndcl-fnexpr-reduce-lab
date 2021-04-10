const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = (array) => {
//   return array.reduce((sum, e) => sum + e)
// }

// totalBatteries(batteryBatches)

let totalBatteries = batteryBatches.reduce((sum,e) => sum + e)
