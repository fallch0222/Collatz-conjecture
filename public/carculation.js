const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

let tallestNumber = 0;


let savedX = 0;
let savedY = canvas.height;
let scale = 1;
const drawGraph = (x, y) =>{ 
  x = x * 10; //스케일 조정
  y = canvas.height - y; //그래프 반전
  y = y * 1.5; //cnavas.height에서 y를 뺴므로 0.9배로 스케일 조정

  if(y < 0){ 
    return;
  }

  ctx.beginPath();
  ctx.moveTo(savedX, savedY);
  ctx.lineTo(x, y);
  ctx.stroke();
  savedX = x;
  savedY = y;
  return true;
}

const drawText = (text) => { 
  ctx.font = "30px Arial";
  ctx.fillText(text, 10 , 30);
}


const ifEven = (num) => { //짝수인 경우
    return num / 2;
}

const ifOdd = (num) => { //홀수인 경우
    return num * 3 + 1;
}

let dnagerTestcase = 1; //현재 계산중인 숫자
const testCaseLimit = 300; //각 테스트 케이스의 최대 계산횟수를 정하는 상수
const maximumLimit = 500; //얼마나 많은 테스트 케이스에 대하여 계산할지 정하는 상수

// 자동계산
const dnagerbutton = () => {
  let currentNum = dnagerTestcase;
  let tryedNum = 0;
  while(dnagerTestcase > 0){
    drawGraph(tryedNum, currentNum);
    if(currentNum % 2 === 0) {
      currentNum = ifEven(currentNum);
    }
    else {
      currentNum = ifOdd(currentNum);
    }
    tryedNum += 1;
    if(currentNum > tallestNumber){
      tallestNumber = currentNum;
    }
    console.log(tryedNum,currentNum);
    

    if(tryedNum > testCaseLimit){
      break;
    }
  }

  if(dnagerTestcase > maximumLimit){
    drawText(tallestNumber);
    return;
  }
  dnagerTestcase += 1;
  dnagerbutton();
  return;
}

//수동 계산
const dnagerStart = () =>{
  const testCase = document.getElementById('dangerInput').value;

  if(testCase === '') {
    alert('Please enter a number');
  }

  if(isNaN((parseInt(testCase)))) {
    alert('Please enter proper number');
  }

  let currentNum = parseInt(testCase);
  if(currentNum <= 0) {
    alert('Please enter positive number');
  }

  let tryedNum = 0;
  while(testCase > 0){
    drawGraph(tryedNum, currentNum);
    if(currentNum % 2 === 0) {
      currentNum = ifEven(currentNum);
    }
    else {
      currentNum = ifOdd(currentNum);
    }
    tryedNum += 1;

    if(tryedNum > 101){

      break;
    }
  }
  return;
}

//초기화
const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}