function telephoneCheck(str) {
  let regexSpaces = /[\s]/g, regexFirstNumber = /^[0-9]|^[(]/, regexMinus = /[-]/g, regexParentesis = /[(][0-9][0-9][0-9][)]/, regexContPan = /[(]|[)]/g, regexAllNumber = /[0-9]{10}/, regexLocal = /^[1]/;
  
  let strNoSpace = str.replace(regexSpaces, ""), strNoMinus, strClean;
  
  if(regexFirstNumber.test(strNoSpace)){
    strNoMinus = strNoSpace.replace(regexMinus, "");
    if(regexContPan.test(strNoMinus)){
      if(regexParentesis.test(strNoMinus)){
        strClean = strNoMinus.replace(regexContPan,"");
        if(regexAllNumber.test(strClean)){
          if(strClean.length > 9 && strClean.length < 12){
            if(strClean.length == 10){
              return true;
            } else {
              if(regexLocal.test(strClean)){
                return true;
              } else {
                return false;
              }
            }
          } else {
            return false;
          }
        } else {
        return false;
        }

      } else {
        return false;
      }
    } else {
      if(regexAllNumber.test(strNoMinus)){
        if(strNoMinus.length > 9 && strNoMinus.length < 12){
            if(strNoMinus.length == 10){
              return true;
            } else {
              if(regexLocal.test(strNoMinus)){
                return true;
              } else {
                return false;
              }
            }
          } else {
            return false;
          }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}

console.log(telephoneCheck("1 767-987-4658"));