// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//Solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let resta = dadYearsOld - sonYearsOld * 2
    if(resta < 0){
      return resta * -1
    }
    return resta
 }