// 기본 설정
const express = require("express");
const app = express();
const PORT = 5260;

// 정적 파일 불러오기
app.use(express.static(__dirname + "/public"));

// 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});
