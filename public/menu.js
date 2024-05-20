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
//dat div 생성 - 식단표
for (let i = 0; i < 19; i++) {
  const dayDiv = document.createElement("div");
  day.appendChild(dayDiv);
  dayDiv.id = [i];
  day.children[7].innerText = "메뉴";
  day.children[7].style.gridRow = "2/5";
}

//menu 데이터 input 형태로 삽입
const totalArr = [];
for (let i = 0; i < 16; i++) {
  totalArr.push(
    `<label for="${idArr[i]}"> <input type="checkbox" name="${idArr[i]}" value="${nameArr[i]}" />${nameArr[i]}</label>`
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
let check = document.getElementsByTagName("input");
// console.log(check[0].value);
console.log(check.value);
console.dir(check);
for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("click", checkcount);
}

function checkcount() {
  let count = 0;
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      count++;
    }
    if (count > 3) {
      alert("3개까지 선택할 수 있습니다.");
      this.checked = false;
      return false;
    }
  }
  console.log(count);
}

//vaule check
for (let i = 0; i < 16; i++) {
  menu.addEventListener("click", valueCheck);
  function valueCheck(e) {
    e.target.style.backgroundColor = "black";
  }
  // let count = 0;
  // menu.addEventListener("click", (e) => {
  //   if ((count = 0)) {
  //     if (e.target) {
  //       console.dir(e.target.value);
  //       count++;
  //       day.children[8].innerHTML = e.target.value;
  //       day.children[8].innerHTML = "";
  //     } else {
  //     }
  //   } else if ((count = 1)) {
  //     if (e.target) {
  //       console.dir(e.target.value);
  //       count++;
  //       day.children[14].innerHTML = e.target.value;
  //     } else {
  //       day.children[14].innerHTML = "";
  //     }
  //   } else if ((count = 2)) {
  //     if (e.target) {
  //       console.dir(e.target.value);
  //       count++;
  //       day.children[20].innerHTML = e.target.value;
  //     } else {
  //       day.children[20].innerHTML = "";
  //     }
  //   }
  // });
}
