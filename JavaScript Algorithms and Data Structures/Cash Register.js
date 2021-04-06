var moneyType = {
 
  penny: 0.01, nickel:  0.05, dime:  0.1, quarter: 0.25,
  one: 1, five: 5, ten: 10, twenty: 20, hundred: 100
};

function checkCashRegister(price, cash, cid) {
  var cashInfo = {
    status: "Waiting",
    change: []
  };
  var change1 = cash - price;
  var myCash = 0;
  var noFund = false;

  function giveChange(){
    cashInfo.change.push(["ONE HUNDRED", 0]);
    cashInfo.change.push(["TWENTY", 0]);
    cashInfo.change.push(["TEN", 0]);
    cashInfo.change.push(["FIVE", 0]);
    cashInfo.change.push(["ONE", 0]);
    cashInfo.change.push(["QUARTER", 0]);
    cashInfo.change.push(["DIME", 0]);
    cashInfo.change.push(["NICKEL", 0]);
    cashInfo.change.push(["PENNY", 0]);
      while(change1 > 0){
        if((change1 >= moneyType.hundred) && (cid[8][1] > 0)){
          change1 -= moneyType.hundred;
          cid[8][1] -= moneyType.hundred;
          cashInfo.change[0][1] += moneyType.hundred;
        } else if((change1 >= moneyType.twenty) && (cid[7][1] > 0)){
          change1 -= moneyType.twenty;
          cid[7][1] -= moneyType.twenty;
          cashInfo.change[1][1] += moneyType.twenty;
        } else if((change1 >= moneyType.ten) && (cid[6][1] > 0)){
          change1 -= moneyType.ten;
          cid[6][1] -= moneyType.ten;
          cashInfo.change[2][1] += moneyType.ten;
        } else if((change1 >= moneyType.five) && (cid[5][1] > 0)){
          change1 -= moneyType.five;
          cid[5][1] -= moneyType.five;
          cashInfo.change[3][1] += moneyType.five;
        } else if((change1 >= moneyType.one) && (cid[4][1] > 0)){
          change1 -= moneyType.one;
          cid[4][1] -= moneyType.one;
          cashInfo.change[4][1] += moneyType.one;
        } else if((change1 >= moneyType.quarter) && (cid[3][1] > 0)){
          change1 -= moneyType.quarter;
          cid[3][1] -= moneyType.quarter;
          cashInfo.change[5][1] += moneyType.quarter;
        } else if((change1 >= moneyType.dime) && (cid[2][1] > 0)){
          change1 -= moneyType.dime;
          cid[2][1] -= moneyType.dime;
          cashInfo.change[6][1] += moneyType.dime;
        } else if((change1 >= moneyType.nickel) && (cid[1][1] > 0)){
          change1 -= moneyType.nickel;
          cid[1][1] -= moneyType.nickel;
          cashInfo.change[7][1] += moneyType.nickel;
        } else if((change1 >= moneyType.penny) && (cid[0][1] > 0)){
          change1 -= moneyType.penny;
          cid[0][1] -= moneyType.penny;
          cashInfo.change[8][1] += moneyType.penny;
          change1 = Math.round(change1*100)/100;
        } else {
          change1 = 0;
          noFund = true;
        }
      }

      for(let i = 0; i < cashInfo.change.length; i++){
        (cashInfo.change[i][1] === 0) ? (cashInfo.change.splice(i, 1), i--) : "";
      }
      
  }
  
    for(let i = 0; i <cid.length; i++){
      myCash += cid[i][1];
    }

    myCash = Math.round(myCash*100)/100;

  if(change1 == myCash) {
    cashInfo.status = "CLOSED";
    cashInfo.change = cid;
    return cashInfo;
  }
  giveChange();
  if(change1 == 0 && noFund == false){
    cashInfo.status = "OPEN";
        return cashInfo;
  }
  if(change1 == 0 && noFund == true){
    cashInfo.status = "INSUFFICIENT_FUNDS";
    cashInfo.change = [];
        return cashInfo;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));