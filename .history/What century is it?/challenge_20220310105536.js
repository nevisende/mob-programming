function whatCentury(year)
{
  let obj = { 0: 'th', 1: 'st', 2: 'nd', 3: 'rd' }
  let centuryNumber = 0
  centuryNumber = +year.slice(0,2)
  if(year.slice(-2) != "00"){
    centuryNumber += 1
  }
  let lastFix = ""
  let centuryString = centuryNumber.toString()
  if(centuryString == "13" || centuryString == "12" || centuryString == "11") {
    lastFix = obj["0"]
  }else if(centuryString.endsWith("1")) {
    lastFix = obj["1"]
  } else if(centuryString.endsWith("2")) {
    lastFix = obj["2"]
  }  else if(centuryNumber.toString().endsWith("3")) {
    lastFix = obj["3"]
  } else {
    lastFix = obj["0"]
  }
  
  
  return `${centuryNumber}${lastFix}`
} 

export default whatCentury;