// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:

// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

//Solution

function isValidIP(str) {
    let a = str.split(".")
    let res = ""
    
    if(a.length === 4){
      for(let i=0; i<a.length; i++){   
        for(let j=0; j<a[i].length; j++){
          if(j==0 && a[i].length>1 && a[i][j] == 0) return false
          switch(a[i][j]){
              case "0": break
              case "1": break
              case "2": break
              case "3": break
              case "4": break
              case "5": break
              case "6": break
              case "7": break
              case "8": break
              case "9": break
              default: return false
          }
        }
        if(parseInt(a[i])>=0 && parseInt(a[i])<=255){
        } else return false
      }
    } else return false
    return true;
  }