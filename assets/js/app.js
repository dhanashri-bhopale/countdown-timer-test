const cl = console.log;

//let spread = document.getElementById("spread");
//cl(spread);
//let str = spread.innerHTML;
//cl(str);

//let arr = [...str];
//cl(arr);

//let spannedArr = arr.map(ele => `<span>${ele}</span>`).join("");
//cl(spannedArr);

//spread.innerHTML = spannedArr;

const spread = document.getElementById("spread"); 

spread.innerHTML = [...spread.innerHTML].map(ele => `<span>${ele}</span>`).join("")
