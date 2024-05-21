//data import
import { nameArr, idArr } from "./data.js";
//array
//nameArr (한글)
//idArr (영어)
//html 요소 js 변수로 할당
const root = document.getElementById("root");
const next = document.getElementById("next");
const menu = document.getElementById("menu");
const day = document.getElementById("day");
//버튼에 이벤트 추가
next.addEventListener("click", toCafe);
function toCafe() {
  window.location.href = "./cafe.html";
}

//day div 생성 - 날짜
for (let i = 1; i < 7; i++) {
  const dayDiv = document.createElement("div");
  day.appendChild(dayDiv);
  dayDiv.innerText = `2.${i}`;
  day.children[0].innerText = "";
}
//day div 생성 - 식단표
for (let i = 0; i < 19; i++) {
  const dayDiv = document.createElement("div");
  day.appendChild(dayDiv);
  dayDiv.id = `div${[i]}`;
  day.children[7].innerText = "메뉴";
  day.children[7].style.gridRow = "2/5";
}

//menu 데이터 input 형태로 삽입
const totalArr = [];
for (let i = 0; i < 16; i++) {
  totalArr.push(
    `<label for="${idArr[i]}"> <input type="checkbox" name="${idArr[i]}" value="${nameArr[i]}" id = "${idArr[i]}" />${nameArr[i]}</label>`
  );
}

//menu list
//제목
const menuarr = ["한", "양", "후"];
for (let i = 0; i < 3; i++) {
  const menuDiv = document.createElement("div");
  menu.appendChild(menuDiv);
  menuDiv.innerText = `${menuarr[i]}식`;
  day.children[0].innerText = "";
}
//내용
for (let i = 0; i < 15; i++) {
  const menuDiv = document.createElement("div");
  menu.appendChild(menuDiv);
  console.dir(menuDiv);
  menuDiv.innerHTML = `${totalArr[i]}`;
}

//checkbox 3개까지 선택
let label = document.getElementsByTagName("label");
let check = document.getElementsByTagName("input");
for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("click", checkcount);
}
function checkcount(event) {
  let count = 0;
  //check 3개 선택
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      count++;
    } else if (count > 3) {
      alert("3개까지 선택할 수 있습니다.");
      this.checked = false;
      return false;
    }
  }

  //check된 값 day에 반영

  // console.log(check);
  // console.log(check[0].checked);
  // console.log(event.target.value);
  // if (check.checked) {
  //   foodArr.push(event.target.value);
  //   console.log(2);
  //   isSelected = true;
  // } else {
  //   console.log(1);
  //   foodArr.push(event.target.value);
  // }
  // console.log(isSelected);
  // switch (isSelected) {
  //   case 0:
  //     console.log(3);
  //     foodArr.push(event.target.value);
  //     console.log(foodArr);
  //     break;
  //   default:
  //     console.log(2);
  //     isSelected = 0;
  //     foodArr.push(event.target.value);
  //     console.log(foodArr);
  // }
  if (event.target.checked) {
    if (isSelected) {
      console.log(3);
      foodArr.push(event.target.value);
      console.log(foodArr);
      console.log(event.target.checked);
      isSelected = "";
    } else {
      console.log(2);
      isSelected = event.target.value;
      foodArr.push(event.target.value);
      console.log(event.target.checked);
      console.log(foodArr);
    }
  } else {
    foodArr.pop();
    // foodArr.forEach(function () {});
    // if (event.target.value === foodArr)
    // foodArr.splice(`${i}`, 1)
    console.log("false");
  }
  // if ((count = 1)) {
  //   div1.innerHTML = foodArr[0];
  //   div7.innerHTML = "";
  //   div13.innerHTML = "";
  //   // if ((count = 2)) {
  //   //   div7.innerHTML = foodArr[1];
  //   //   div13.innerHTML = " ";
  //   //   if ((count = 3)) {
  //   //     div13.innerHTML = foodArr[2];
  //   //   }
  //   // }
  // }
  switch (count) {
    // case 0:
    //   console.log("dlrp dho?");
    //   div1.innerHTML = "";
    case 1:
      div1.innerHTML = foodArr[0];
      div7.innerHTML = "";

      break;
    case 2:
      div7.innerHTML = foodArr[1];
      div13.innerHTML = "";
      break;
    case 3:
      div13.innerHTML = foodArr[2];
      break;
    default:
      div1.innerHTML = "";
  }
}

let isSelected;
let foodArr = [];

// if (check.checked == true) {
//   // console.log(check[i].checked);
//   div1.innerText = "선택";
//   // selected = e.target;
//   // console.log(count);
// }
// // if (selected.checked == true && count === 2) {
// //   div1.innerText = selected.value;
// //   div7.innerText = e.target.value;
// //   div7.style.backgroundColor = "yellow";
// //   console.log(count);
// // }
// // if (selected.checked == true && count === 3) {
// //   console.log(count);
// // }
