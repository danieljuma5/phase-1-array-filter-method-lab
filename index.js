// findMatching
function findMatching(driver,str) {
  return driver.filter(driver => driver.toUpperCase() === str.toUpperCase()) ;
}



//fuzzyMatch

function fuzzyMatch(driver,str) {
  return driver.filter(driver => driver.toLowerCase().startsWith(str.toLowerCase()));
}


//matchName
function matchName(driver, str) {
  return driver.filter(driver => driver.name.toUpperCase() === str.toUpperCase())
}