// // console.log("Hey");

// const intputF = document.querySelector("#valuef");
// const intputC = document.querySelector("#valuec");

// const buttonF = document.querySelector("#buttonf");
// const buttonC = document.querySelector("#buttonc");

// let calC;
// let calF;

// // when click buttonF
// buttonF.addEventListener("click", function () {
//   // console.log("HeyF");
//   // console.log(intputF.value);

//   if (!intputF.value) {
//     alert("Please type a temperture number!");
//     return;
//   }

//   // calculate F to C
//   calC = (((intputF.value - 32) * 5) / 9).toFixed(1);

//   intputC.value = calC;
// });

// // when click buttonC
// buttonC.addEventListener("click", function () {
//   // console.log("HeyC");
//   // console.log(intputC.value);

//   if (!intputC.value) {
//     alert("Please type a temperture number!");
//     return;
//   }

//   // calculate C to F
//   calF = (intputC.value * 1.8 + 32).toFixed(1);
//   // console.log(intputC.value);

//   intputF.value = calF;
// });

// //////////////////////////////////////// Version 2

const intputF = document.querySelector("#valuef");
const intputC = document.querySelector("#valuec");

const inputvalue = document.querySelectorAll(".input-value");
const cbs = document.getElementsByClassName("convertButton");

let calC;
let calF;

for (let i = 0; i < cbs.length; i++) {
  let cb = cbs[i];
  cb.addEventListener("click", function (e) {
    // let value = parseFloat(inputvalue.value);
    let value = inputvalue[i].value;
    console.log(value);
    console.log(e.target.name);

    switch (e.target.name) {
      case "fahrenheit":
        calC = (((value - 32) * 5) / 9).toFixed(1);
        intputC.value = calC;
        break;

      case "celcius":
        calF = (value * 1.8 + 32).toFixed(1);
        intputF.value = calF;
        break;
    }
  });
}
