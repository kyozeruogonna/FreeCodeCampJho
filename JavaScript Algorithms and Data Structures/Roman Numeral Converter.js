const ROMAN_NUMBERS = [
  {unit: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]},
  {deci: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]},
  {cent: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]},
  {mill: ["", "M", "MM", "MMM"]}
];

const convertToRoman = (num) => {
  let arabNum = num.toString().split("").reverse();
  let romanNum = [];
  let romUnit = ROMAN_NUMBERS[0].unit[arabNum[0]], romDeci = ROMAN_NUMBERS[1].deci[arabNum[1]], romCent = ROMAN_NUMBERS[2].cent[arabNum[2]], romMill = ROMAN_NUMBERS[3].mill[arabNum[3]];
  romanNum = romanNum.concat(romMill, romCent, romDeci, romUnit).join("");

 return (num >= 4000) ? "Por favor, ingrese un número menor a 4000" : (num <= 0) ? "Por favor, ingrese un número mayor a 0" : (romanNum)

}

console.log(convertToRoman(798));