// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// my effort
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let difference = dadYearsOld - sonYearsOld
    if(difference > sonYearsOld){
      return difference - sonYearsOld
    }else if(difference < sonYearsOld){
      return sonYearsOld - difference
    }else{
      return 0
    }
  }


//   top result
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }