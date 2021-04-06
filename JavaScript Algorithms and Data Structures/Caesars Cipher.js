const ALPHABET = {
  alph: ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
  ascii: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77],
  alph2: ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ascii2: [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
}

const rot13 = (str) => {
  let strarray = str.split("");
  let strascii = str.split("");

  for(let i = 0; i < strarray.length; i++){
    strascii[i] = str.charCodeAt(i);
  }

    for(let l = 0; l < strarray.length; l++){
      for(let j = 0; j < ALPHABET.alph.length; j++){
        for(let k = 0; k <ALPHABET.alph2.length; k++){
        (strascii[l] == ALPHABET.ascii2[k]) ? strarray[l] = ALPHABET.alph[k] : ""
        }
      (strascii[l] == ALPHABET.ascii[j]) ? strarray[l] = ALPHABET.alph2[j] : ""
      }
    }
  return (strarray.join(""));
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR CVMMN!"));