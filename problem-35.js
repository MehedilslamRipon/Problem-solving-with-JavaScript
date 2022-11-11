// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    let index = haystack.indexOf("needle")
    for(let i of haystack){
      if(i == "needle")
      return  `found the needle at position ${index}`
    }  
  }
  