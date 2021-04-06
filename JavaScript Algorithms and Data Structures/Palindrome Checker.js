const palindrome = (str) => {
  let string = str.toString().toLowerCase().replace(/[\W_]/g, "").split("").join("");
  let stringinverse = str.toString().toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("");
  return (string === stringinverse) ? true : false;
}

console.log(palindrome("almostomla"));