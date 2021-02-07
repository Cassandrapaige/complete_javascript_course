'use strict';

/*
 -- PROBLEM 1 --
 We work for a componay building smart home 
 thermometer. Our most recent task is this: 
 "Given an array of temperatures for a a 
 single day, calculate the temperature 
 amplitude. Keep in mind that sometimes there 
 might be a sensor error.

    1) Understanding the problem:

    Q. What is temp amptitude? 
    A. Difference b/w highest and lowest temp
    
    Q. How to commute max and min temperatures?

    Q. What does a sensor error look like? How to respond?

    2) Break up solution into sub-problems
        1. How to ignore errors?

        2. Find max value in temp array
        
        3. Find min value in temp array

        4. Subtract min from max and return value
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 12, 17, 15, 14, 9, 5];

function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // continue if "error" string occurs
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
}

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);

/*
 -- PROBLEM 2 --
 Function should now accept 2 arrays of temperatures

    1) Understanding the problem:

    Q. Shoule we just implement the first functionality twice? 
    A. No! Just merge the two arrays to return 1.
    

    2) Break up solution into sub-problems
        1. Merge 2 arrays
*/

const morningTemps = [3, -2, -6, -1, 'error'];
const eveningTemps = [9, 12, 17, 15, 14, 9, 5];

function calcTempAmplitude(array1, array2) {
  const temps = array1.concat(array2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // continue if "error" string occurs
    if (typeof curTemp !== 'number') continue;
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  return max - min;
}

const dblAmplitude = calcTempAmplitude(morningTemps, eveningTemps);

console.log(dblAmplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Degrees celcius')),
    value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

/*
 -- CHALLENGE --  
  Create a function calles "printForecse" which takes
  in an array and logs a string to the console: 
  "...17c in 1 day, 22 c in 2 days,  14c in 3 days..."

  TEST DATA 1: [17, 21, 23];
  TEST DATA 2: [12, 5, -5, 0, 4];
*/

function printForecast(array) {
  let str = '';
  array.map((arr, index) => {
    return (str += `...${arr}°c in ${index + 1} day${index > 0 ? 's' : ''}`);
  });
  return `${str}...`;
}

console.log(printForecast([17, 21, 23]));

/*
 -- SOLUTION --  

    1) Understanding the problem:

    -Array transformed to string, separated by 3 dots
    Q. What is x days? A. Index + 1

    2) Break up solution into sub-problems
        1. Transform array into string
        2. Transform each element to string with "c"
        3. String needs to contain day (index + 1)
        4. Add ... between elements at start and end of string
*/

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

// What final solution should look like
console.log(
  `...${data1[0]}°c in 1 day...${data1[1]}°c in 2 days...${data1[2]}°c in 3 days...`
);

const printForecastSolution = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}c in ${i + 1} day${i > 0 ? 's' : ''}...`;
  }
  return `...${str}`;
};

console.log(printForecastSolution(data1));
