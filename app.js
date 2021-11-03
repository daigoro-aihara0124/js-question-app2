const quiz = [
  {
    question: "ゲーム機能。最も売れたゲーム機は何？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "任天堂ースイッチ",
      "任天堂DS"
    ],
    correct: "任天堂DS"
  },
  {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ",
      "スーパードンキーコング",
      "星のカービィー"
    ],
    correct: "MOTHER2"
  },
  {
    question: "ファイナルファンタジーの主人公の名前は？",
    answers: [ 
      "フリオール", 
      "クラウド", 
      "ティーダ", 
      "セシル"
    ],
    correct: "セシル"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//HTMLのオブジェクトの場合変数の前に＄マークをつける。
const $button = document.getElementsByTagName("button");
//ボタンの数の定義
let buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  //変数は=で上書きすることができる。定数の文字列をHTMLに反映させる。
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
//クイズの問題や選択肢の書き換え
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了! あなたの正解数は" + score + '/' + quizLength + "です")
  }
};

//ボタンをクリックしたら正誤判定 イベントハンドラー　e.targetでまとめる
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
